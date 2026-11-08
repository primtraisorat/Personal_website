/* Shared pieces for the nearU screens. Runs before proto.js, so links it adds get wired like hand-written ones.
   <div data-render="status">                 status bar (white text on .dim / .on-photo screens)
   <header data-render="bar:Title:back:catalog:Right text:target">  top bar: left icon (back|close|none) going to a screen, title, right link
   <nav data-render="tabs:home">               tab bar (home | bag | saved | account)
   <div data-render="kbd"> / "num"             keyboard that types into the focused field
   <i data-icon="bag"> / <i data-guy="sad">    icons and the little character
   [data-tabs] > [data-tab]                    one selected at a time; fires a "tab" event on the group */
(function () {
  var P = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  var I = {
    back: '<path d="M20 12H4.5M10.5 6l-6 6 6 6"/>', close: '<path d="M6 6l12 12M18 6 6 18"/>', chev: '<path d="m9.5 6 6 6-6 6"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>', bag: '<path class="fillable" d="M5.5 8.5h13v11.5h-13z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/>',
    heart: '<path class="fillable" d="M12 19.5s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 7.5 2.3c0 5.6-7.5 10-7.5 10z"/>',
    user: '<circle cx="12" cy="7.8" r="3.6"/><path d="M5 20.5c.8-4.4 3.6-6.7 7-6.7s6.2 2.3 7 6.7"/>',
    sort: '<path d="M8 5v14M4.5 15.5 8 19l3.5-3.5M16 19V5M12.5 8.5 16 5l3.5 3.5"/>', filter: '<path d="M4 7h9M18 7h2M4 17h3M12 17h8"/><circle cx="15.5" cy="7" r="2"/><circle cx="9.5" cy="17" r="2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>', check: '<path d="m6 12.5 4 4 8-8.5"/>', x: '<circle cx="12" cy="12" r="8"/><path d="m9.3 9.3 5.4 5.4M14.7 9.3l-5.4 5.4"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>', mic: '<rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M6 11.5a6 6 0 0 0 12 0M12 17.5v3"/>',
    gear: '<circle cx="12" cy="12" r="2.8"/><path d="M12 3.5l1.6 1.9 2.4-.5.6 2.4 2.3 1-.9 2.3 1.4 2-2 1.4.3 2.5-2.5.2-1.1 2.2-2.1-1.3-2.1 1.3-1.1-2.2-2.5-.2.3-2.5-2-1.4 1.4-2-.9-2.3 2.3-1 .6-2.4 2.4.5z"/>',
    pin: '<path d="M12 20.5s-6-5.6-6-10.5a6 6 0 0 1 12 0c0 4.9-6 10.5-6 10.5z"/><circle cx="12" cy="10" r="2.2"/>', card: '<rect x="3.5" y="6" width="17" height="12" rx="1.5"/><path d="M3.5 10h17M7 14.5h3"/>',
    out: '<path d="M10 4.5H5v15h5M9 12h11M16.5 8.5 20 12l-3.5 3.5"/>', car: '<path d="M5 16.5V12l1.8-4.5h10.4L19 12v4.5zM5 16.5v2h2.5v-2M16.5 16.5v2H19v-2M5 12h14"/><circle cx="8" cy="14.2" r=".6" fill="currentColor"/><circle cx="16" cy="14.2" r=".6" fill="currentColor"/>',
    cart: '<path d="M3.5 5h2.5l2 10h10l1.7-7H7"/><circle cx="9" cy="19" r="1.3"/><circle cx="17" cy="19" r="1.3"/>', camera: '<path d="M4 8.5h3.2L9 6h6l1.8 2.5H20V19H4z"/><circle cx="12" cy="13.5" r="3.2"/>',
    percent: '<path d="M6 18 18 6"/><circle cx="7.5" cy="7.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/>', spin: '<path d="M12 4a8 8 0 1 0 8 8"/>', minuscircle: '<circle cx="12" cy="12" r="8"/><path d="M8 12h8"/>',
    del: '<path d="M8.5 6H20v12H8.5L3.5 12z"/><path d="m11 9.5 5 5M16 9.5l-5 5"/>', shift: '<path d="M12 4.5 4.5 12H8.5v6.5h7V12h4z"/>', bagbtn: '<path d="M6 8.5h12v11.5H6z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/>',
    calendar: '<rect x="4" y="5.5" width="16" height="14" rx="1.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>'
  };
  function icon(n, cls) { return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' viewBox="0 0 24 24" ' + P + ' aria-hidden="true">' + (I[n] || '') + '</svg>'; }
  // The little character from the kit's empty states. Faces: surprised, sad, puzzled, smile, wink
  var FACES = {
    surprised: '<path d="M38 36q4-3 8 0M54 36q4-3 8 0"/><circle cx="42" cy="42" r="1.6" fill="currentColor"/><circle cx="58" cy="42" r="1.6" fill="currentColor"/><ellipse cx="50" cy="52" rx="2.4" ry="3.2"/>',
    sad: '<path d="M37 38q4 2 8-1M55 37q4 3 8 1"/><path d="M40 43q2-2 4 0M56 43q2-2 4 0"/><path d="M43 54q3-3 7 0t7 0"/>',
    puzzled: '<path d="M37 37q4-2 8 0M55 35l8 2"/><circle cx="42" cy="42" r="1.6" fill="currentColor"/><circle cx="58" cy="42" r="1.6" fill="currentColor"/><path d="M44 53h12"/>',
    smile: '<path d="M38 36q4-3 8 0M54 36q4-3 8 0"/><circle cx="42" cy="42" r="1.6" fill="currentColor"/><circle cx="58" cy="42" r="1.6" fill="currentColor"/><path d="M43 50q7 6 14 0"/>',
    wink: '<path d="M38 36q4-3 8 0M54 37h8"/><circle cx="42" cy="42" r="1.6" fill="currentColor"/><path d="M55 42q3 2 6 0"/><path d="M44 51q6 4 12-1"/>'
  };
  function guy(f) { return '<svg class="guy" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><circle cx="50" cy="44" r="19"/><path d="M22 99c2-20 13-33 28-33s26 13 28 33"/>' + FACES[f] + '</svg>'; }
  window.NU = { icon: icon, guy: guy,
    get: function (k) { try { return sessionStorage.getItem('nu:' + k); } catch (e) { return null; } },
    set: function (k, v) { try { sessionStorage.setItem('nu:' + k, v); } catch (e) {} },
    go: function (target) { var a = document.createElement('a'); a.setAttribute('data-go', target); a.hidden = true; document.body.appendChild(a); a.click(); a.remove(); }
  };

  var SIG = '<span class="ic"><svg viewBox="0 0 18 11"><rect x="0" y="7" width="3" height="4" rx=".8" fill="currentColor"/><rect x="5" y="5" width="3" height="6" rx=".8" fill="currentColor"/><rect x="10" y="2.5" width="3" height="8.5" rx=".8" fill="currentColor"/><rect x="15" y="0" width="3" height="11" rx=".8" fill="currentColor"/></svg>' +
    '<svg viewBox="0 0 16 11"><path d="M8 2.3c2.2 0 4.2.9 5.7 2.3l1.1-1.2A9.8 9.8 0 0 0 8 .7 9.8 9.8 0 0 0 1.2 3.4l1.1 1.2A8.1 8.1 0 0 1 8 2.3zm0 3.4c1.2 0 2.3.5 3.2 1.2l1.1-1.2A6.4 6.4 0 0 0 8 4.1a6.4 6.4 0 0 0-4.3 1.6l1.1 1.2c.9-.7 2-1.2 3.2-1.2zM8 9l1.5 1.6L8 12.1 6.5 10.6z" fill="currentColor"/></svg>' +
    '<svg viewBox="0 0 26 11"><rect x=".5" y=".5" width="21" height="10" rx="2.6" fill="none" stroke="currentColor" opacity=".35"/><rect x="2" y="2" width="18" height="7" rx="1.5" fill="currentColor"/><path d="M23 3.7v3.6c.8-.3 1.3-1 1.3-1.8s-.5-1.5-1.3-1.8z" fill="currentColor" opacity=".4"/></svg></span>';
  var TABS = [['home', '<span class="u">u</span>', 'Home'], ['bag', icon('bag'), 'Bag'], ['saved', icon('heart'), 'Saved items'], ['account', icon('user'), 'Account']];
  var KEYS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

  document.querySelectorAll('[data-render]').forEach(function (el) {
    var r = el.getAttribute('data-render').split(':');
    if (r[0] === 'status') { el.className = 'st'; el.innerHTML = '<span>9:41</span>' + SIG; }
    else if (r[0] === 'bar') {
      el.className = 'bar';
      var left = r[2] && r[2] !== 'none' ? '<button class="l" data-go="' + r[3] + '" aria-label="' + (r[2] === 'close' ? 'Close' : 'Back') + '">' + icon(r[2]) + '</button>' : '<span></span>';
      var title = (r[1] || '').replace('|', '<small>') + (r[1] && r[1].indexOf('|') > 0 ? '</small>' : '');
      var right = r[4] ? (r[4].charAt(0) === '@' ? '<button class="r" data-go="' + r[5] + '" aria-label="' + r[4].slice(1) + '">' + icon(r[4].slice(1)) + '</button>' : '<button class="r"' + (r[5] ? ' data-go="' + r[5] + '"' : '') + '>' + r[4] + '</button>') : '<span></span>';
      el.innerHTML = left + '<h1>' + title + '</h1>' + right;
    }
    else if (r[0] === 'tabs') {
      el.className = 'tabs';
      el.innerHTML = TABS.map(function (t) {
        var target = t[0] === 'bag' ? (NU.get('bagEmpty') ? 'bag-empty' : 'bag') : t[0] === 'saved' ? (NU.get('savedEmpty') ? 'saved-empty' : 'saved') : t[0] === 'account' ? (NU.get('signedOut') ? 'account-empty' : 'account') : 'home';
        return '<a data-go="' + target + '" aria-label="' + t[2] + '"' + (t[0] === r[1] ? ' aria-current="page"' : '') + '>' + t[1] + '</a>';
      }).join('');
    }
    else if (r[0] === 'kbd') {
      el.className = 'kbd';
      el.innerHTML = KEYS.map(function (row, i) {
        return '<div class="r">' + (i === 2 ? '<button class="fn" aria-label="Shift">' + icon('shift') + '</button>' : '') + row.split('').map(function (k) { return '<button data-key="' + k.toLowerCase() + '">' + k + '</button>'; }).join('') +
          (i === 2 ? '<button class="fn" data-key="del" aria-label="Delete">' + icon('del') + '</button>' : '') + '</div>';
      }).join('') + '<div class="r"><button class="fn">123</button><button class="wide" data-key=" ">space</button><button class="fn" data-key="enter">return</button></div>';
    }
    else if (r[0] === 'num') {
      el.className = 'num';
      el.innerHTML = '123456789'.split('').map(function (k) { return '<button data-key="' + k + '">' + k + '</button>'; }).join('') + '<span></span><button data-key="0">0</button><button data-key="del" aria-label="Delete">' + icon('del') + '</button>';
    }
  });
  document.querySelectorAll('i[data-icon]').forEach(function (el) { el.outerHTML = icon(el.getAttribute('data-icon'), el.className); });
  document.querySelectorAll('i[data-guy]').forEach(function (el) { el.outerHTML = guy(el.getAttribute('data-guy')); });

  // Keyboards type into the last focused field; screens can listen for "nukey" on document for their own handling.
  var last = document.querySelector('input[autofocus]') || document.querySelector('.fld input, .search input');
  document.addEventListener('focusin', function (e) { if (e.target.matches('input, textarea')) last = e.target; });
  document.addEventListener('mousedown', function (e) { if (e.target.closest('[data-key]')) e.preventDefault(); });
  document.addEventListener('click', function (e) {
    var k = e.target.closest('[data-key]');
    if (k) {
      var key = k.getAttribute('data-key'), ev = new CustomEvent('nukey', { detail: key, cancelable: true });
      if (!document.dispatchEvent(ev) || !last) return;
      if (key === 'enter') { last.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); return; }
      last.value = key === 'del' ? last.value.slice(0, -1) : last.value + key;
      last.dispatchEvent(new Event('input', { bubbles: true }));
      return;
    }
    var t = e.target.closest('[data-tab]'); if (!t) return;
    var g = t.closest('[data-tabs]');
    g.querySelectorAll('[data-tab]').forEach(function (b) { b.setAttribute('aria-selected', b === t ? 'true' : 'false'); });
    g.dispatchEvent(new CustomEvent('tab', { detail: t }));
  });
  // Every screen has the iPhone home indicator
  var s = document.querySelector('.screen'); if (s && !s.classList.contains('pop')) { var h = document.createElement('i'); h.className = 'homebar'; s.appendChild(h); }
})();
