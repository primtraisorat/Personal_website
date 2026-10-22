/* Wiring for one prototype screen.
   data-go="screen"       go to another screen
   data-overlay="screen"  open a screen as a pop-up over this one
   data-close             close the pop-up
   data-toggle            flip aria-pressed (hearts, chips, interest tiles)
   Inside the player these become messages to it; opened on their own they navigate directly. */
(function () {
  var inPlayer = parent !== window,
      screen = document.querySelector('.screen'),
      name = location.pathname.split('/').pop().replace(/\.html$/, '');

  function send(msg) { parent.postMessage(Object.assign({ tappedin: true, from: name }, msg), '*'); }
  function report() {
    if (inPlayer) send({ size: [screen.offsetWidth, screen.offsetHeight], title: document.title });
  }

  if (!inPlayer) document.body.classList.add('solo');
  report();
  addEventListener('load', report);
  if (window.ResizeObserver) new ResizeObserver(report).observe(screen);

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-go], [data-overlay], [data-close], [data-toggle]');
    if (!t) {
      // Dead spot: flash what is clickable, the way Figma does.
      if (e.target.closest('a, button, input, label, select')) return;
      document.body.classList.add('hint');
      clearTimeout(window.__hint);
      window.__hint = setTimeout(function () { document.body.classList.remove('hint'); }, 450);
      return;
    }
    e.preventDefault();
    if (t.hasAttribute('data-toggle')) {
      e.stopPropagation();
      t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      return;
    }
    var go = t.getAttribute('data-go'), ov = t.getAttribute('data-overlay');
    if (inPlayer) {
      if (go) send({ go: go });
      else if (ov) send({ overlay: ov });
      else send({ close: true });
    } else if (go || ov) {
      location.href = (go || ov) + '.html';
    } else {
      history.back();
    }
  });

  // Enter/Space on the non-button elements we made clickable.
  document.querySelectorAll('[data-go], [data-overlay], [data-close], [data-toggle]').forEach(function (el) {
    if (/^(A|BUTTON)$/.test(el.tagName)) return;
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', el.hasAttribute('data-toggle') ? 'switch' : 'button');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && inPlayer) send({ close: true });
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role=button], [role=switch]')) { e.preventDefault(); e.target.click(); }
  });
})();
