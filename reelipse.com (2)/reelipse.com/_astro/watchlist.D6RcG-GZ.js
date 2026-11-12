import { a as e, v as t, w as n } from "./store.BYy0rHSB.js";
var r = `rw:watch`,
  i = `rw:watched`,
  a = () => t(r, []),
  o = () => t(i, []),
  s = (e, t) => (n(e === `watch` ? r : i, t), l());
function c(r, i) {
  let a = t(r, []),
    o = e(i),
    s = a.some((t) => e(t) === o);
  n(r, s ? a.filter((t) => e(t) !== o) : [i, ...a]), l();
}
function l() {
  let t = new Set(a().map(e)),
    n = new Set(o().map(e));
  document.querySelectorAll(`[data-watch-toggle]`).forEach((e) => {
    let n = t.has(e.dataset.watchToggle);
    e.setAttribute(`aria-pressed`, String(n));
    let r = e.querySelector(`[data-label]`);
    r && (r.textContent = n ? `On Your Watchlist` : `Add to Watchlist`);
  }),
    document.querySelectorAll(`[data-seen-toggle]`).forEach((e) => {
      let t = n.has(e.dataset.seenToggle);
      e.setAttribute(`aria-pressed`, String(t));
      let r = e.querySelector(`[data-label]`);
      r && (r.textContent = t ? `Watched` : `Mark as Watched`);
    }),
    document.querySelectorAll(`[data-watchlist-count]`).forEach((e) => {
      (e.textContent = String(t.size)),
        e.classList.toggle(`hidden`, t.size === 0);
    });
}
document.addEventListener(`click`, (e) => {
  let t = e.target.closest(`[data-watch-toggle],[data-seen-toggle]`);
  if (!t?.dataset.card) return;
  e.preventDefault();
  let n = JSON.parse(t.dataset.card);
  c(t.dataset.watchToggle ? r : i, n);
}),
  l(),
  (window.rwSync = l);
export { o as n, s as r, a as t };
