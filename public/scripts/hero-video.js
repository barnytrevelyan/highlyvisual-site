// Defers the Vimeo hero iframe — mounted on first user interaction
// (scroll / pointermove / touch / keydown) or 4s after page load,
// whichever comes first. The poster image already paints as part of
// the rotator, so deferring the iframe costs nothing visually and
// saves ~1.5s of background work on cold visits (per the Bronze audit).
(function () {
  var wrap = document.querySelector('[data-hero-video]');
  if (!wrap) return;
  var url = wrap.getAttribute('data-src');
  if (!url) return;

  var mounted = false;
  function mount() {
    if (mounted) return;
    mounted = true;
    var iframe = document.createElement('iframe');
    iframe.className = 'hero-video';
    iframe.src = url;
    iframe.title = 'Natural-history showreel';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.setAttribute('loading', 'lazy');
    wrap.appendChild(iframe);
    cleanup();
  }

  function cleanup() {
    window.removeEventListener('scroll', mount, { passive: true });
    window.removeEventListener('pointermove', mount, { passive: true });
    window.removeEventListener('touchstart', mount, { passive: true });
    window.removeEventListener('keydown', mount);
  }

  // Skip the deferred mount entirely if the user prefers reduced motion
  // or the viewport is narrow (per existing CSS the wrap is display:none on mobile).
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var narrow = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  if (reduce || narrow) return;

  window.addEventListener('scroll', mount, { passive: true, once: true });
  window.addEventListener('pointermove', mount, { passive: true, once: true });
  window.addEventListener('touchstart', mount, { passive: true, once: true });
  window.addEventListener('keydown', mount, { once: true });

  // Fallback — mount 4s after load, so the showreel still appears for
  // visitors who land and don't interact (still saves the cost during
  // the critical first-paint window).
  if (document.readyState === 'complete') {
    setTimeout(mount, 4000);
  } else {
    window.addEventListener('load', function () { setTimeout(mount, 4000); }, { once: true });
  }
})();
