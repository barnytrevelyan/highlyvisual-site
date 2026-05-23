#!/usr/bin/env python3
"""Generate favicons (16/32/180) + 1200x630 OG image.

Favicons: HV monogram on #0A0A0B (site base) using DejaVu/Liberation as Inter fallback.
OG image: smart-crop portrait-barny-flying.jpg to 1200x630.
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "public"
IMG = PUB / "img"

BG = (10, 10, 11)
FG = (245, 244, 241)

def find_font(weight_hint=900):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    ]
    for c in candidates:
        if Path(c).exists():
            return c
    return None

def make_monogram(size: int, text: str = "HV") -> Image.Image:
    im = Image.new("RGBA", (size, size), BG + (255,))
    d = ImageDraw.Draw(im)
    font_path = find_font()
    # Pick a font size that fits with ~10% padding
    target = int(size * 0.62)
    if font_path:
        font = ImageFont.truetype(font_path, target)
    else:
        font = ImageFont.load_default()
    # Center-render
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    x = (size - w) // 2 - bbox[0]
    y = (size - h) // 2 - bbox[1]
    d.text((x, y), text, font=font, fill=FG + (255,))
    return im

def make_favicons():
    # 16, 32, 48 ICO + 180 apple-touch
    sizes_ico = [16, 32, 48]
    images = [make_monogram(s) for s in sizes_ico]
    images[0].save(PUB / "favicon.ico", format="ICO", sizes=[(s, s) for s in sizes_ico], append_images=images[1:])
    make_monogram(32).save(PUB / "favicon-32x32.png", "PNG", optimize=True)
    make_monogram(16).save(PUB / "favicon-16x16.png", "PNG", optimize=True)
    make_monogram(180).save(PUB / "apple-touch-icon.png", "PNG", optimize=True)
    # web manifest icons
    make_monogram(192).save(PUB / "icon-192.png", "PNG", optimize=True)
    make_monogram(512).save(PUB / "icon-512.png", "PNG", optimize=True)
    # SVG version — single-glyph monogram
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#0A0A0B"/><text x="32" y="44" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-weight="900" font-size="36" fill="#F5F4F1">HV</text></svg>'''
    (PUB / "icon.svg").write_text(svg)

def make_og_image():
    src = IMG / "portrait-barny-flying.jpg"
    if not src.exists():
        print("No portrait — skipping OG image")
        return
    im = Image.open(src).convert("RGB")
    target_w, target_h = 1200, 630
    # Cover-fit: scale so the smaller side fills, then center crop
    src_ratio = im.width / im.height
    tgt_ratio = target_w / target_h
    if src_ratio > tgt_ratio:
        # source wider — scale by height
        new_h = target_h
        new_w = int(round(im.width * target_h / im.height))
    else:
        new_w = target_w
        new_h = int(round(im.height * target_w / im.width))
    im = im.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - target_w) // 2
    top = (new_h - target_h) // 2
    # Bias crop upward for portraits — keep faces visible
    top = max(0, int(top * 0.4))
    im = im.crop((left, top, left + target_w, top + target_h))
    im.save(IMG / "og-default.jpg", "JPEG", quality=86, progressive=True, optimize=True)
    im.save(IMG / "og-default.webp", "WEBP", quality=82, method=6)

def make_web_manifest():
    manifest = '''{
  "name": "Highly Visual",
  "short_name": "Highly Visual",
  "description": "Natural-history and aerial cinematography from Nairobi.",
  "start_url": "/",
  "display": "browser",
  "background_color": "#0A0A0B",
  "theme_color": "#0A0A0B",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any" }
  ]
}'''
    (PUB / "site.webmanifest").write_text(manifest)

if __name__ == "__main__":
    make_favicons()
    make_og_image()
    make_web_manifest()
    print("Generated:")
    for f in ["favicon.ico", "favicon-32x32.png", "favicon-16x16.png",
              "apple-touch-icon.png", "icon-192.png", "icon-512.png",
              "icon.svg", "site.webmanifest", "img/og-default.jpg", "img/og-default.webp"]:
        p = PUB / f
        if p.exists():
            print(f"  {f}: {p.stat().st_size} bytes")
