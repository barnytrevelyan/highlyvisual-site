// Highly Visual — animation runtime
// Activates: .reveal scroll-in, hero rotator, testimonial carousel.
// Respects prefers-reduced-motion.

(function() {
  'use strict';

  window.__hvAnimationsInit = true;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Scroll reveal ---
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in-view'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in-view');
          if (e.target.classList.contains('reveal-stagger')) {
            [...e.target.children].forEach((child, i) => child.style.setProperty('--i', i));
          }
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
    els.forEach((el) => io.observe(el));
  }

  // --- Hero rotator (cross-fade still images) ---
  function initHeroRotator() {
    const rotator = document.querySelector('.hero-rotator');
    if (!rotator || reduced) {
      // Reduced motion: show first slide only
      const first = rotator?.querySelector('.hero-rotator__slide');
      if (first) first.classList.add('is-active');
      return;
    }
    const slides = [...rotator.querySelectorAll('.hero-rotator__slide')];
    if (slides.length < 2) {
      slides[0]?.classList.add('is-active');
      return;
    }
    let idx = 0;
    slides[idx].classList.add('is-active');
    const interval = parseInt(rotator.dataset.interval || '5500', 10);
    setInterval(() => {
      slides[idx].classList.remove('is-active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('is-active');
    }, interval);
  }

  // --- Testimonial carousel ---
  function initCarousels() {
    document.querySelectorAll('.testimonial-carousel').forEach((root) => {
      const track = root.querySelector('.testimonial-track');
      const slides = [...root.querySelectorAll('.testimonial-slide')];
      const dots = [...root.querySelectorAll('.testimonial-dot')];
      const prev = root.querySelector('.testimonial-prev');
      const next = root.querySelector('.testimonial-next');
      if (!track || !slides.length) return;
      let i = 0;
      let timer = null;
      const interval = parseInt(root.dataset.interval || '7000', 10);
      const autorotate = root.dataset.autorotate !== 'false';

      function go(n) {
        i = (n + slides.length) % slides.length;
        track.style.transform = `translateX(-${i * 100}%)`;
        dots.forEach((d, idx) => d.setAttribute('aria-current', idx === i ? 'true' : 'false'));
      }
      function startAuto() {
        if (!autorotate || reduced) return;
        stopAuto();
        timer = setInterval(() => go(i + 1), interval);
      }
      function stopAuto() {
        if (timer) { clearInterval(timer); timer = null; }
      }

      dots.forEach((d, idx) => d.addEventListener('click', () => { go(idx); startAuto(); }));
      prev?.addEventListener('click', () => { go(i - 1); startAuto(); });
      next?.addEventListener('click', () => { go(i + 1); startAuto(); });

      // Pause on hover, resume on leave
      root.addEventListener('mouseenter', stopAuto);
      root.addEventListener('mouseleave', startAuto);
      // Pause when off-screen
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => e.isIntersecting ? startAuto() : stopAuto());
        }, { threshold: 0.2 });
        io.observe(root);
      }

      go(0);
      startAuto();

      // Keyboard support
      root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { go(i + 1); startAuto(); }
        if (e.key === 'ArrowLeft') { go(i - 1); startAuto(); }
      });
    });
  }

  // --- Header background fade on scroll ---
  function initHeaderFade() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    function update() {
      if (window.scrollY > 40) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initReveal(); initHeroRotator(); initCarousels(); initHeaderFade();
    });
  } else {
    initReveal(); initHeroRotator(); initCarousels(); initHeaderFade();
  }
})();
