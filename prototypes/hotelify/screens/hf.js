/* Shared pieces for the Hotelify screens: icons, the sidebar, the top bar, tab groups and counters.
   Runs before proto.js, so the links it adds get wired like hand-written ones.
   <aside data-render="side:rooms">   sidebar with Rooms highlighted
   <header data-render="top">         search, notifications and avatar
   <i data-icon="dots">               an inline icon
   [data-tabs] > [data-tab]           one selected at a time (visual only, like Figma)
   [data-count]                       a − n + counter */
(function () {
  var P = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    home: '<path d="M3.5 10.5 12 4l8.5 6.5"/><path d="M5.5 9v10.5h4.5v-6h4v6h4.5V9"/>',
    desk: '<path d="M11 4.5H6A1.5 1.5 0 0 0 4.5 6v12A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5v-5"/><path d="M17.6 3.6a2 2 0 0 1 2.8 2.8L12 14.8l-3.6.8.8-3.6z"/>',
    guests: '<rect x="5" y="5" width="14" height="16" rx="1.5"/><path d="M9 3.5h6v3H9z"/><path d="m9 13.5 2 2 4-4"/>',
    rooms: '<path d="M6.5 3.5h11v17l-5.5-4-5.5 4z"/>',
    deals: '<path d="M3.5 11.6V4.5a1 1 0 0 1 1-1h7.1l8.9 8.9a1 1 0 0 1 0 1.4l-7.1 7.1a1 1 0 0 1-1.4 0z"/><circle cx="8" cy="8" r="1.2"/>',
    rates: '<circle cx="12" cy="12" r="8.5"/><path d="M14.8 9.2c-.4-.9-1.5-1.5-2.8-1.5-1.6 0-2.8.8-2.8 2.1 0 3 5.8 1.5 5.8 4.4 0 1.3-1.3 2.1-3 2.1-1.4 0-2.6-.6-3-1.6M12 6v1.7M12 16.3V18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    bell: '<path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    filter: '<path d="M3.5 4.5h17l-6.5 8v6l-4 2v-8z"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    left: '<path d="m15 5-7 7 7 7"/>', right: '<path d="m9 5 7 7-7 7"/>',
    minus: '<path d="M6 12h12"/>', plus: '<path d="M12 6v12M6 12h12"/>',
    dots: '<circle cx="12" cy="5.5" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="18.5" r="1.4" fill="currentColor" stroke="none"/>'
  };
  function icon(n) { return '<svg viewBox="0 0 24 24" ' + P + ' aria-hidden="true">' + ICONS[n] + '</svg>'; }
  window.hfIcon = icon;
  var LOGO = '<svg viewBox="0 0 32 40" aria-hidden="true"><defs><linearGradient id="hfg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b93f7"/><stop offset="1" stop-color="#1a63e0"/></linearGradient></defs>' +
    '<g fill="url(#hfg)"><path d="M1 13.2 6 15.6v12.2L1 25.4z"/><path d="M13.5 4.6 18.5 2v15.6l-5 2.6z"/><path d="M13.5 22.6l5-2.6V36l-5 2.6z"/><path d="M26 15.6l5-2.4v12.2l-5 2.4z"/></g></svg>';
  var NAV = [['dashboard', 'Dashboard', 'home'], ['front-desk', 'Front desk', 'desk'], ['guests', 'Guests', 'guests'],
             ['rooms', 'Rooms', 'rooms'], ['deals', 'Deals', 'deals'], ['rates', 'Rate', 'rates']];

  document.querySelectorAll('[data-render]').forEach(function (el) {
    var r = el.getAttribute('data-render').split(':');
    if (r[0] === 'side') {
      el.className = 'hf-side';
      el.innerHTML = '<div class="hf-logo" data-go="dashboard">' + LOGO + 'Hotelify</div><nav class="hf-nav">' + NAV.map(function (n) {
        return '<a data-go="' + n[0] + '"' + (n[0] === r[1] ? ' aria-current="page"' : '') + '>' + icon(n[2]) + n[1] + '</a>';
      }).join('') + '</nav>';
    } else if (r[0] === 'top') {
      el.className = 'hf-top';
      el.innerHTML = '<label class="hf-search">' + icon('search') + '<input placeholder="Search for rooms and offers" aria-label="Search for rooms and offers"></label>' +
        '<div class="hf-me">' + icon('bell') + '<img src="assets/avatar.webp" alt="Profile"></div>';
    }
  });
  document.querySelectorAll('i[data-icon]').forEach(function (el) { el.outerHTML = icon(el.getAttribute('data-icon')).replace('<svg ', '<svg class="' + (el.className || '') + '" '); });

  // Tab groups and page numbers: one selected at a time.
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-tab]'); if (!t) return;
    var g = t.closest('[data-tabs]');
    g.querySelectorAll('[data-tab]').forEach(function (b) { b.setAttribute('aria-selected', b === t ? 'true' : 'false'); });
  });
  // Counters (Adult, Children): − n +
  document.querySelectorAll('[data-count]').forEach(function (c) {
    var out = c.querySelector('output'), min = +c.getAttribute('data-count');
    c.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () { out.value = Math.max(min, +out.value + (b.dataset.step === '+' ? 1 : -1)); });
    });
  });
})();
