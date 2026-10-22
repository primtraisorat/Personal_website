# Clickable prototypes

Each Figma prototype rebuilt as plain HTML/CSS you can open and click through. No build step.

| Project | Open | Figma source |
| --- | --- | --- |
| TappedIn | `tappedin/index.html` | Mid-fis Lo-fis Design System, HighFi page |

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
