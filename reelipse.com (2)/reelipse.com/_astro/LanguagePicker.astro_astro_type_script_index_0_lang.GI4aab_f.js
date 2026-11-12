import { n as e, r as t } from "./languages.CroomS91.js";
var n = t()?.code ?? `en`;
for (let t of document.querySelectorAll(`[data-lang-picker]`)) {
  let r = t.querySelector(`[data-lang-toggle]`),
    i = t.querySelector(`[data-lang-panel]`);
  i.querySelectorAll(`[data-lang]`).forEach((e) =>
    e.setAttribute(`aria-pressed`, String(e.dataset.lang === n))
  );
  let a = (e) => {
    r.setAttribute(`aria-expanded`, String(e)),
      i.classList.toggle(`hidden`, !e);
  };
  r.addEventListener(`click`, () => a(i.classList.contains(`hidden`))),
    document.addEventListener(`click`, (e) => {
      t.contains(e.target) || a(!1);
    }),
    document.addEventListener(`keydown`, (e) => {
      e.key === `Escape` && a(!1);
    }),
    i.addEventListener(`click`, async (t) => {
      let r = t.target.closest(`[data-lang]`);
      if (!r || r.dataset.lang === n) return a(!1);
      i.querySelectorAll(`button`).forEach((e) => (e.disabled = !0)),
        r.classList.add(`is-loading`);
      try {
        await e(r.dataset.lang);
      } catch {
        i.querySelectorAll(`button`).forEach((e) => (e.disabled = !1)),
          r.classList.remove(`is-loading`);
      }
    });
}
