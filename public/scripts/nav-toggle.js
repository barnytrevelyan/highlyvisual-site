// public/scripts/nav-toggle.js
//
// Mobile nav toggle. Loaded as an external script from /scripts/nav-toggle.js
// so it passes `script-src 'self'` in the CSP (inline scripts are blocked).
//
// Runs once on page load. The script tag is emitted at the end of the body
// after the header markup, so the button + nav already exist when this
// executes — no need to wait for DOMContentLoaded.
(function () {
  var btn = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('.primary-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var open = nav.hasAttribute('data-open');
    if (open) {
      nav.removeAttribute('data-open');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      nav.setAttribute('data-open', '');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close the menu after tapping any link inside it so the user doesn't
  // land on the next page with the dropdown still open.
  nav.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (a && nav.hasAttribute('data-open')) {
      nav.removeAttribute('data-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
