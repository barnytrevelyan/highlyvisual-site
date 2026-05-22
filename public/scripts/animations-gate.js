// public/scripts/animations-gate.js
//
// Engage the scroll-reveal gate only when JS is available. The companion
// animations.js sets window.__hvAnimationsInit when it runs successfully;
// if that flag isn't set within 1500ms (404, parse error, blocked by CSP)
// the safety timer below forces every .reveal element visible so content
// can never be stuck at opacity:0.
//
// Loaded as an external script so it passes `script-src 'self'` in the
// CSP. The original inline version was blocked by the browser.
document.documentElement.classList.add('has-js');
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    if (window.__hvAnimationsInit) return;
    document.documentElement.classList.remove('has-js');
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      el.classList.add('is-in-view');
    });
  }, 1500);
});
