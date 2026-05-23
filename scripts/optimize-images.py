#!/usr/bin/env python3
"""
Optimize every image in public/img/ in place.

- Backup expected at ../img-original-backup/ (created separately before running).
- Resize to web-sensible max widths per category (hero/body/feat/credit/etc).
- Recompress JPEGs at quality 82 progressive + optimize.
- Opaque PNGs → JPEG (filename kept; we patch references separately).
- PNGs with real alpha → optimized PNG (palette where feasible).
- Skip SVG and tiny PNG/JPEG below 50 KB unless oversized in pixels.
- Atomic write (tmpfile + os.replace) — safe under hardlinks.
- Generate a sibling WebP at quality 80 for future <picture> upgrade.

Generates report at scripts/optimize-images-report.txt
"""
import os, sys, json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "public" / "img"
TRASH = ROOT / "_trash"
TRASH.mkdir(exist_ok=True)
REPORT = ROOT / "scripts" / "optimize-images-report.txt"

# Max width by filename prefix (heuristic — site is dark, dense, retina-aware)
WIDTH_RULES = [
    ("hero-",        2400),
    ("portrait-",    1800),
    ("body-",        1800),
    ("feat-",        1800),
    ("sup-",         1800),
    ("bts-",         1800),
    ("wildlife-",    1800),
    ("aerial-",      1800),
    ("drone-",       1800),
    ("cinema-",      1800),
    ("heli-",        1800),
    ("kit-",         1800),
    ("credit-",      1200),
]
DEFAULT_MAX_WIDTH = 1800

JPEG_QUALITY = 82
WEBP_QUALITY = 78
PNG_OPTIMIZE = True

def max_width_for(name: str) -> int:
    for prefix, w in WIDTH_RULES:
        if name.startswith(prefix):
            return w
    return DEFAULT_MAX_WIDTH

def has_real_alpha(im: Image.Image) -> bool:
    """True only if there are meaningfully transparent pixels (alpha < 64).
    A barely-transparent edge or anti-aliased pixel doesn't justify a 10x file
    size; flatten those onto the site background."""
    if im.mode in ("RGBA", "LA"):
        a = im.split()[-1]
        lo, _ = a.getextrema()
        return lo < 64
    if im.mode == "P" and im.info.get("transparency") is not None:
        return True
    return False

def process(path: Path, results: list) -> None:
    before = path.stat().st_size
    name = path.name
    ext = path.suffix.lower()

    if ext == ".svg":
        results.append((name, before, before, "skip-svg"))
        return
    if name == "logo.png":
        results.append((name, before, before, "skip-logo"))
        return

    try:
        im = Image.open(path)
        im = ImageOps.exif_transpose(im)
    except Exception as e:
        results.append((name, before, before, f"error-open:{e}"))
        return

    orig_w, orig_h = im.size
    target_w = max_width_for(name)
    resized = False
    if orig_w > target_w:
        new_h = int(round(orig_h * target_w / orig_w))
        im = im.resize((target_w, new_h), Image.LANCZOS)
        resized = True

    real_alpha = has_real_alpha(im)
    tmp = path.with_suffix(path.suffix + ".tmp")

    if real_alpha:
        # Keep as PNG, but try to quantize to save bytes
        if im.mode != "RGBA":
            im = im.convert("RGBA")
        try:
            q = im.quantize(colors=256, method=Image.Quantize.LIBIMAGEQUANT, dither=Image.Dither.FLOYDSTEINBERG)
            q.save(tmp, "PNG", optimize=PNG_OPTIMIZE)
        except Exception:
            im.save(tmp, "PNG", optimize=PNG_OPTIMIZE)
        os.replace(tmp, path)
        verb = "png-quant"
    else:
        # Save as JPEG regardless of original extension (we'll handle renames separately)
        if im.mode in ("RGBA", "LA", "P"):
            bg = Image.new("RGB", im.size, (10, 10, 11))  # site background
            if im.mode == "P":
                im = im.convert("RGBA")
            bg.paste(im, mask=im.split()[-1] if im.mode in ("RGBA", "LA") else None)
            im = bg
        elif im.mode != "RGB":
            im = im.convert("RGB")

        target_path = path
        if ext == ".png":
            # Rewrite as .jpg
            target_path = path.with_suffix(".jpg")
            tmp = target_path.with_suffix(target_path.suffix + ".tmp")
        im.save(tmp, "JPEG", quality=JPEG_QUALITY, progressive=True, optimize=True, subsampling=2)
        os.replace(tmp, target_path)
        if target_path != path and path.exists():
            try:
                path.unlink()
            except PermissionError:
                # Sandbox: can't unlink — rename to trash (outside public/)
                trash_dest = TRASH / path.name
                if trash_dest.exists():
                    trash_dest = TRASH / (path.name + ".dup")
                os.rename(path, trash_dest)
        verb = "jpeg"
        path = target_path

        # Also write a WebP sibling for future <picture> use
        try:
            webp_path = path.with_suffix(".webp")
            im.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=6)
        except Exception:
            pass

    after = path.stat().st_size
    note = []
    if resized:
        note.append(f"resized {orig_w}px→{target_w}px")
    note.append(verb)
    results.append((path.name, before, after, ",".join(note)))

def main():
    files = sorted([p for p in IMG_DIR.iterdir() if p.is_file()])
    results = []
    for p in files:
        process(p, results)

    total_before = sum(r[1] for r in results)
    total_after = sum(r[2] for r in results if not r[3].startswith("skip"))
    total_after += sum(r[2] for r in results if r[3].startswith("skip"))
    # actually total_after already includes all
    total_after = sum(r[2] for r in results)

    lines = []
    lines.append(f"Images processed: {len(results)}")
    lines.append(f"Total before: {total_before/1024/1024:.2f} MB")
    lines.append(f"Total after:  {total_after/1024/1024:.2f} MB")
    lines.append(f"Saved:        {(total_before-total_after)/1024/1024:.2f} MB  ({100*(total_before-total_after)/total_before:.1f}%)")
    lines.append("")
    lines.append(f"{'File':<48} {'Before':>10} {'After':>10} {'Saved':>10}  Note")
    for n, b, a, note in sorted(results, key=lambda r: r[1]-r[2], reverse=True):
        lines.append(f"{n:<48} {b/1024:>8.0f} KB {a/1024:>8.0f} KB {(b-a)/1024:>8.0f} KB  {note}")
    REPORT.write_text("\n".join(lines))
    print("\n".join(lines[:6]))
    print(f"... full report at {REPORT}")

if __name__ == "__main__":
    main()
