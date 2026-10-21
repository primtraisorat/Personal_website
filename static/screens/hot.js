/* Click areas copied from the Figma prototype links: [x, y, w, h, target, label] in frame pixels,
   or [cssSelector, target, label] to make matching elements clickable. */
(function () {
  var logo = [80, 17, 187, 50, 'bruinplace-landing', 'BruinPlace home'],
      add = [1107, 22, 133, 40, 'bruinplace-add-listing', 'Add listing'],
      me = [1323, 18, 48, 48, 'bruinplace-profile', 'Your profile'];
  function grid(xs, ys, w, h, to, label) {
    var out = [];
    ys.forEach(function (y) { xs.forEach(function (x) { out.push([x, y, w, h, to, label]); }); });
    return out;
  }
  var side = [['dashboard', 'Dashboard'], ['front-desk', 'Front desk'], ['guests', 'Guests'],
              ['room', 'Room'], ['deals', 'Deals'], ['rate', 'Rate']];
  function sidebar(self) {
    return side.filter(function (s) { return s[0] !== self; })
               .map(function (s) { return [12, 104 + 56 * side.indexOf(s), 196, 40, 'hotelify-' + s[0], s[1]]; });
  }
  var MAP = {
    'tappedin-landing': [[311, 475, 862, 55, 'tappedin-split-screen', 'Search events']],
    'tappedin-split-screen': [['.grid .ti-card', 'tappedin-event-details', 'Open event']],
    'tappedin-event-details': [[1120, 20, 40, 40, 'tappedin-split-screen', 'Close']],
    'tappedin-interests': [[126, 616, 473, 58, 'tappedin-landing', 'Continue']],
    'bruinplace-landing': grid([80, 407, 735, 1062], [534, 955, 1376], 300, 293, 'bruinplace-building', 'Open building')
      .concat(grid([1228], [479, 900, 1321], 137, 42, 'bruinplace-split-screen', 'See more'))
      .concat([[443, 323, 556, 57, 'bruinplace-split-screen', 'Search'], logo, add, me]),
    'bruinplace-split-screen': grid([39, 357], [176, 489, 803, 1116, 1429], 295, 291, 'bruinplace-listing', 'Open listing')
      .concat([logo, add, [1324, 18, 48, 48, 'bruinplace-profile', 'Your profile']]),
    'bruinplace-building': [logo, add, me],
    'bruinplace-listing': [logo, [1107, 18, 133, 48, 'bruinplace-add-listing', 'Add listing'], me],
    'bruinplace-profile': grid([329, 636, 943], [405, 693, 980], 281, 275, 'bruinplace-building', 'Open building').concat([logo, add]),
    'bruinplace-add-listing': [logo, me]
  };
  side.forEach(function (s) { MAP['hotelify-' + s[0]] = sidebar(s[0]); });

  var page = location.pathname.split('/').pop().replace(/\.html$/, ''),
      spots = MAP[page], screen = document.querySelector('.screen');
  if (parent !== window) parent.postMessage({ screen: page }, '*');  // keeps the viewer's tabs in step
  if (!spots || !screen) return;
  screen.setAttribute('role', 'group');
  spots.forEach(function (s) {
    var a = document.createElement('a');
    a.className = 'hot';
    if (typeof s[0] === 'string') {
      screen.querySelectorAll(s[0]).forEach(function (el) {
        var b = a.cloneNode();
        b.href = s[1] + '.html'; b.setAttribute('aria-label', s[2]);
        b.style.cssText = 'left:0;top:0;width:100%;height:100%;z-index:1';
        if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
        el.appendChild(b);
      });
      return;
    }
    a.href = s[4] + '.html'; a.setAttribute('aria-label', s[5]);
    a.style.cssText = 'left:' + s[0] + 'px;top:' + s[1] + 'px;width:' + s[2] + 'px;height:' + s[3] + 'px';
    screen.appendChild(a);
  });
})();
