/* Shared BruinPlace pieces: the listing data, header, footer, cards and maps.
   A screen marks where they go with data-render="…"; this fills them in before proto.js wires the links. */
var BP = (function () {
  var I = 'assets/img/', ICON = 'assets/icons/';
  var B = {
    atrium:    { name: 'The Atrium', rate: '4.3', n: 4, addr: '10965 Strathmore Dr, Los Angeles, CA', zip: ' 90024', img: '941c9bbd', img2: '7fec6131' },
    elgreco:   { name: 'El Greco Lofts', rate: '4.2', n: 11, addr: '1030 Tiverton Avenue, Los Angeles, CA', addr2: '1030 Tiverton Ave, Los Angeles, CA 90024', img: 'bbf41493', img2: 'da151d71' },
    eight70:   { name: 'Eight 70', rate: '4.1', n: 1, addr: '870 Hilgard Avenue, Los Angeles, CA', zip: ' 90024', img: '2f8cd5e1', img2: '1728589c' },
    rochester: { name: 'Rochester Parkside', rate: '4.6', n: 5, addr: '10989 Rochester Ave, Los Angeles, CA', rate2: '4.7', n2: 17, addr2: '1098 Rochester Ave, Los Angeles, CA 90024', img: '2afae7b7', img2: '2b3dc7f7' },
    luxe:      { name: 'Luxe Villas', rate: '4.7', n: 17, addr: '11640 Mayfield Ave, Los Angeles, CA 90049', img: '5abfb3a4' },
    levering:  { name: 'Levering Apartments', rate: '4.7', n: 17, addr: '628 Levering Ave, Los Angeles, CA 90024', img: '2af07eaa' }
  };
  var U = {
    hilgard:   { price: '$2,845', rate: '4.7', n: 12, bd: 3, ba: 2, sqft: '1,328', addr: '1033 Hilgard Ave, Los Angeles, CA 90024', img: 'df0bc74f' },
    bentley:   { price: '$1,342', rate: '3.7', n: 5, bd: 2, ba: 2, sqft: '1,463', addr: '1620 S Bentley Ave, Los Angeles, CA 90025', img: '1c8625f6' },
    glendon:   { price: '$1,256', rate: '4.9', n: 6, bd: 1, ba: 1, sqft: '1,228', addr: '1040 Glendon Ave, Los Angeles, CA 90024', img: 'cf6b72f6' },
    wilshire:  { price: '$1,423', rate: '4.7', n: 13, bd: 2, ba: 1, sqft: '1,328', addr: '10700 Wilshire Blvd, Los Angeles, CA 90024', img: '932fadbd' },
    lindbrook: { price: '$1,899', rate: '4.7', n: 8, bd: 4, ba: 3, sqft: '1,528', addr: '10824 Lindbrook Dr, Los Angeles, CA 90024', img: '019808ba' },
    wilshire2: { price: '$1,572', rate: '4.7', n: 7, bd: 1, ba: 1, sqft: '1,302', addr: '10636 Wilshire Blvd, Los Angeles, CA 90024', img: '418c9bf8' },
    glendon2:  { price: '$1,300', rate: '4.9', n: 6, bd: 1, ba: 1, sqft: '1,228', addr: '1040 Glendon Ave, Los Angeles, CA 90024', img: 'cf6b72f6' }
  };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function heart(saved) { return '<button class="heart" data-toggle aria-pressed="' + !!saved + '" aria-label="Save to favorites"></button>'; }
  function rate(r, n) { return '<span class="bp-rate"><img src="' + ICON + 'star.svg" alt="">' + r + ' <i>(' + n + ')</i></span>'; }

  /* Building card. size "" (landing, 300px) or "sm" (split screens, 295px). */
  function building(key, size, saved) {
    var b = B[key], sm = size === 'sm' || size === 'rec';
    var addr = sm ? (b.addr2 || b.addr + (b.zip || '')) : b.addr;
    return '<a class="bp-card ' + (size || '') + '" href="#" data-go="building-listing" aria-label="' + esc(b.name) + '">' +
      '<div class="ph"><img src="' + I + (sm && b.img2 || b.img) + '.webp" alt="">' + heart(saved) + '</div>' +
      '<div class="body"><div class="row"><b class="name">' + esc(b.name) + '</b>' + rate(sm && b.rate2 || b.rate, sm && b.n2 || b.n) + '</div>' +
      '<p class="addr">' + esc(addr) + '</p></div></a>';
  }
  function unit(key, size, saved) {
    var u = U[key];
    return '<a class="bp-card unit ' + (size || '') + '" href="#" data-go="unit-listing" aria-label="' + u.price + ' per month, ' + esc(u.addr) + '">' +
      '<div class="ph"><img src="' + I + u.img + '.webp" alt="">' + heart(saved) + '</div>' +
      '<div class="body"><div class="row"><b class="name">' + u.price + ' per month</b>' + rate(u.rate, u.n) + '</div>' +
      '<p class="specs"><span><b>' + u.bd + '</b> bd</span><i>|</i><span><b>' + u.ba + '</b> ba</span><i>|</i><span><b>' + u.sqft + '</b> sq ft</span></p>' +
      '<p class="addr">' + esc(u.addr) + '</p></div></a>';
  }

  function header(kind) {
    var find = kind === 'search' ?
      '<form class="bp-find" data-go-on-submit="building-split"><label class="bp-search"><input type="search" placeholder="Search for more listings..." aria-label="Search for more listings">' +
      '<button type="submit" data-go="building-split" aria-label="Search"><img src="' + ICON + 'search.svg" alt=""></button></label>' +
      '<button type="button" class="bp-filter" data-overlay="filters"><img src="' + ICON + 'settings-2.svg" alt="">Filters</button></form>' : '';
    return '<a class="bp-logo" href="#" data-go="landing"><img src="' + ICON + 'logo.svg" alt="">BruinPlace</a>' + find +
      '<div class="bp-btns"><a class="bp-add" href="#" data-go="add-lease"><img src="' + ICON + 'plus.svg" alt="">Add listing</a>' +
      '<img class="bp-bell" src="' + ICON + 'notif.svg" alt="Notifications">' +
      '<a class="bp-avatar" href="#" data-go="favorites" aria-label="Your profile">JB</a></div>';
  }
  function footer() {
    return '<div class="who"><b>BruinPlace</b><p>Built by Bruins, for Bruins looking for their next place.</p></div>' +
      '<div class="feat"><h4>Features</h4><a href="#" data-go="landing">Home</a><a href="#" data-go="building-split">Search listings</a><a href="#" data-go="add-lease">Add listing</a></div>' +
      '<div class="links"><h4>Contact us</h4><span><img src="' + ICON + 'mail.svg" alt="">bruinplaceatucla@gmail.com</span>' +
      '<span><img src="' + ICON + 'linkedin.svg" alt="">BruinPlace</span><span><img src="' + ICON + 'instagram.svg" alt="">@bruinplace</span></div>' +
      '<img class="art" src="' + I + 'fab72918.webp" alt="">';
  }

  /* data-render="buildings:atrium,elgreco" (add "/sm" for the smaller card, "!" after a key for a saved heart),
     "units:…", "header", "header:search", "footer" */
  function cards(list, fn) {
    var p = list.split('/'), size = p[1] || '';
    return p[0].split(',').map(function (k) { var saved = /!$/.test(k); return fn(k.replace('!', ''), size, saved); }).join('');
  }
  document.querySelectorAll('[data-render]').forEach(function (el) {
    var r = el.getAttribute('data-render'), kind = r.split(':')[0], arg = r.slice(kind.length + 1);
    if (kind === 'buildings') el.innerHTML = cards(arg, building);
    else if (kind === 'units') el.innerHTML = cards(arg, unit);
    else if (kind === 'header') { el.classList.add('bp-head'); el.innerHTML = header(arg); }
    else if (kind === 'footer') { el.classList.add('bp-foot'); el.innerHTML = footer(); }
  });

  /* data-stars="4": a row of five stars, that many filled */
  var STAR = '<path d="M12 2.5l2.9 5.9 6.6 1-4.75 4.6 1.1 6.5L12 17.4l-5.85 3.1 1.1-6.5L2.5 9.4l6.6-1z" stroke="#FFCB64" stroke-width="1.6" stroke-linejoin="round"';
  document.querySelectorAll('[data-stars]').forEach(function (el) {
    var n = +el.getAttribute('data-stars'), h = '';
    for (var i = 0; i < 5; i++) h += '<svg viewBox="0 0 24 24" aria-hidden="true">' + STAR + ' fill="' + (i < n ? '#FFCB64' : 'none') + '"/></svg>';
    el.innerHTML = h; el.setAttribute('role', 'img'); el.setAttribute('aria-label', n + ' out of 5 stars');
  });

  /* Small dropdown menus (.menu > button + ul). A menu with data-filter shows only the matching cards. */
  document.querySelectorAll('.menu').forEach(function (m) {
    var b = m.querySelector('button');
    b.addEventListener('click', function (e) { e.stopPropagation(); m.classList.toggle('open'); });
    m.querySelectorAll('li').forEach(function (li) {
      li.addEventListener('click', function (e) {
        e.stopPropagation(); m.classList.remove('open');
        m.querySelectorAll('li').forEach(function (x) { x.setAttribute('aria-selected', x === li); });
        if (m.dataset.label !== 'keep') b.firstChild.textContent = li.textContent;
        var f = m.dataset.filter; if (!f) return;
        var want = li.dataset.value || '';
        document.querySelectorAll(f).forEach(function (c) { c.classList.toggle('filtered', !!want && c.dataset.type !== want); });
      });
    });
    document.addEventListener('click', function () { m.classList.remove('open'); });
  });

  /* "Read more" / "Show more": reveal the hidden part next to it. */
  document.querySelectorAll('[data-more]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      var open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', open);
      document.querySelectorAll(b.getAttribute('data-more')).forEach(function (x) { x.hidden = !open; });
      var t = b.querySelector('span'); if (t) t.textContent = open ? 'Show less' : b.getAttribute('data-label');
    });
  });

  /* Pressing Enter in a search box goes where its search button goes. */
  document.addEventListener('submit', function (e) {
    var b = e.target.querySelector('[type=submit][data-go]');
    e.preventDefault(); if (b) b.click();
  });

  /* Maps: zoom buttons, and price pins that open a listing card under them. */
  document.querySelectorAll('.bp-map').forEach(function (map) {
    var tiles = map.querySelector('.tiles'), z = 1, pins = [].slice.call(map.parentNode.querySelectorAll('.pin'));
    pins.forEach(function (p) { p.dataset.x = parseFloat(p.style.left); p.dataset.y = parseFloat(p.style.top); });
    function place() {
      var cx = map.offsetWidth / 2, cy = map.offsetHeight / 2;
      tiles.style.transform = 'scale(' + z + ')';
      pins.forEach(function (p) {
        var x = cx + (p.dataset.x - cx) * z, y = cy + (p.dataset.y - cy) * z;
        p.style.left = x + 'px'; p.style.top = y + 'px';
        p.hidden = x < 30 || y < 0 || x > map.offsetWidth - 30 || y > map.offsetHeight - 30;
      });
      closeCard();
    }
    map.querySelectorAll('[data-zoom]').forEach(function (b) {
      b.addEventListener('click', function () { z = Math.max(1, Math.min(2.5, z * (b.dataset.zoom === 'in' ? 1.35 : 1 / 1.35))); place(); });
    });
    var card = map.parentNode.querySelector('.pin-card');
    function closeCard() { if (card) card.hidden = true; pins.forEach(function (p) { p.setAttribute('aria-pressed', 'false'); }); }
    pins.forEach(function (p, i) {
      p.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = p.getAttribute('aria-pressed') === 'true';
        closeCard(); if (open || !card) return;
        p.setAttribute('aria-pressed', 'true');
        var units = card.dataset.kind === 'units',
            keys = units ? Object.keys(U) : ['atrium', 'elgreco', 'eight70', 'rochester', 'luxe', 'levering'];
        card.innerHTML = (units ? unit : building)(keys[i % keys.length], 'sm');
        // centered under the pin, kept inside the map's width
        card.style.left = Math.max(-40, Math.min(map.offsetWidth - 255, map.offsetLeft + p.offsetLeft - 113)) + 'px';
        card.style.top = (map.offsetTop + p.offsetTop + 40) + 'px';
        card.hidden = false;
      });
    });
    document.addEventListener('click', function (e) { if (card && !card.hidden && !card.contains(e.target)) closeCard(); });
  });

  return { B: B, U: U, building: building, unit: unit };
})();
