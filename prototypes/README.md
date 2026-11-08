# Clickable prototypes

Each Figma prototype rebuilt as plain HTML/CSS you can open and click through. No build step.

| Project | Open | Figma source |
| --- | --- | --- |
| TappedIn | `tappedin/index.html` | Mid-fis Lo-fis Design System, HighFi page |
| BruinPlace | `bruinplace/index.html` | BruinPlace hi-fi flow (landing, search, listings, profile, add listing) |
| nearU | `nearu/index.html` | nearU college marketplace (Ulmo e-commerce kit look): emoji categories, made-up campus listings, product, bag and checkout, search, sign-in, account, saved items. Sort and other sheets open as overlays |
| Hotelify | `hotelify/index.html` | Hotelify dashboard flow (dashboard, front desk, guests, rooms, deals, rates, add forms) |

## How a prototype is put together

- `index.html` is the player. It shows one screen at a time, scaled to the window, and opens pop-ups (event details, filters, sign-up) over it. Restart and the screen menu sit in the top bar. Esc closes a pop-up.
- `screens/*.html` are the screens, each at its Figma frame size. They also open on their own.
- Links between screens are attributes on the elements, handled by `screens/proto.js`:
  - `data-go="friends"` goes to `screens/friends.html`
  - `data-overlay="filters"` opens `screens/filters.html` as a pop-up
  - `data-close` closes the pop-up
  - `data-toggle` flips `aria-pressed` (hearts, chips, interest tiles)
- Clicking a spot that isn't clickable outlines everything that is, like Figma's hotspot hints.

To add a screen: copy one in `screens/`, change it, add it to `SCREENS` in `index.html`, and point a `data-go` or `data-overlay` at it.

BruinPlace keeps its shared pieces (header, footer, listing cards, maps, star rows, dropdowns) in `bruinplace/screens/bp.js`, which fills in any element marked `data-render="…"` before `proto.js` wires the links.

Hotelify keeps its sidebar, top bar and icons in `hotelify/screens/hf.js` (filled in from `data-render="side:rooms"`, `data-render="top"` and `<i data-icon="…">`), plus tab groups (`data-tabs`) and the guest counters (`data-count`).

nearU keeps its status bar, top bar, tab bar, keyboards and the little empty-state character in `nearu/screens/nu.js`. Small bits of state (bag emptied, signed out, chosen photo, new card) live in sessionStorage so the flow stays consistent while you click around. Listings and categories live in `nearu/screens/data.js`.
