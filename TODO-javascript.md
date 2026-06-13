# JavaScript TO-DO list

Things we've deliberately left for later, once we start adding JavaScript.
Until then the site stays HTML + CSS only.

---

## 1. Hero parallax — photo scrolls slower than the text

**Goal:** As the page scrolls, the hero photo should drift upward at a
*fraction* of the scroll speed (e.g. half), so it scrolls — but less than the
foreground text. This is "parallax."

**Why it's not done yet:** Pure CSS only offers `background-attachment: fixed`
(photo pinned, doesn't move) or `scroll` (photo moves 1:1 with the text). There
is no CSS setting for "half speed" that works in the current Mac Safari version.

**Current state:** `.hero` in [mystyle.css](mystyle.css) uses
`background-attachment: fixed` (the photo stays anchored while text scrolls past).

**Approach when we add JS:**
- Listen for the page scroll, then nudge the hero background up by a fraction of
  how far the page has scrolled (e.g. `backgroundPositionY = scrollY * 0.5`),
  or move a background layer with `transform: translateY(...)`.
- Respect `@media (prefers-reduced-motion: reduce)` — skip the effect for users
  who ask for less motion (accessibility).
- Keep the mobile fallback simple (the effect is often disabled on phones).

---

## 2. News carousel — Prev / Next buttons

**Goal:** Add "Previous" and "Next" buttons (and maybe little dots) to the News
carousel so people can click through slides, not just swipe/scroll.

**Current state:** `.news-grid` in [mystyle.css](mystyle.css) is a CSS-only
horizontal scroller that snaps to each card. It works by swiping on a phone or
scrolling/dragging on a trackpad, but has no clickable buttons.

**Approach when we add JS:**
- Add the buttons in [index.html](index.html) next to the `.news-grid` list.
- On click, scroll the list left/right by one card
  (`element.scrollBy({ left: ..., behavior: "smooth" })`).
- Optional: disable/hide the buttons at the start/end of the list.

---

## 4. Sortable / filterable repertoire table

**Goal:** Let visitors click a column header (Title, Composer, Year…) to sort the
repertoire table, and/or type in a search box to filter rows.

**Why it's not done yet:** Sorting and filtering require reading and reordering
the rows at runtime, which needs JavaScript.

**Current state:** The table in [resources.html](resources.html) is static, with a
sticky header, color-coded action pills, and Year chips — all CSS only.

**Approach when we add JS:**
- Sort: on header click, compare the cells in that column and reorder the `<tr>`s
  (toggle ascending/descending; show a ▲/▼ indicator).
- Filter: a text input that hides rows whose text doesn't match what's typed.
- Keep it accessible: make the sortable headers real `<button>`s and announce
  changes (`aria-sort` on the `<th>`).

---

<!-- Add new "wait until we have JavaScript" ideas below this line. -->
