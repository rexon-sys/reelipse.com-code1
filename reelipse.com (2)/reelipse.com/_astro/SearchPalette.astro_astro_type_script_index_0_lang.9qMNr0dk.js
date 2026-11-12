import {
  g as e,
  h as t,
  l as n,
  n as r,
  s as i,
  t as a,
  u as o,
  x as s,
  y as c,
} from "./store.BYy0rHSB.js";
var l = document.getElementById(`search-palette`),
  u = document.getElementById(`palette-q`),
  d = document.getElementById(`palette-results`),
  f = JSON.parse(d.dataset.examples ?? `[]`),
  p = 0,
  m = [],
  h = 0,
  g,
  _ = null,
  v = ``,
  y = (e) =>
    `<span class="h-12 w-8 shrink-0 overflow-hidden rounded-sm bg-ink-3">${
      e
        ? `<img src="${s(
            e,
            `w92`
          )}" alt="" width="32" height="48" loading="lazy" class="h-full w-full object-cover">`
        : ``
    }</span>`,
  b = (e) => (n) => ({
    href: t(n),
    group: e,
    html: `${y(
      n.p
    )}<span class="min-w-0 flex-1"><span class="block truncate font-medium">${i(
      n.t
    )}</span>
      <span class="block truncate text-xs text-mute">${
        n.k === `tv` ? `TV series · ` : ``
      }${n.y ?? `TBA`}${
      n.vc > 0 ? ` · ${n.sc.toFixed(1)}/10` : ``
    }</span></span>
      ${
        n.k === `tv`
          ? ``
          : `<a href="${o(n)}" class="chip shrink-0 text-xs">Like this</a>`
      }`,
  }),
  x = (t) => ({
    href: e(t),
    group: `People`,
    html: `${y(
      t.photo
    )}<span class="min-w-0 flex-1"><span class="block truncate font-medium">${i(
      t.name
    )}</span>
      <span class="block truncate text-xs text-mute">${i(t.dept)}${
      t.known.length ? ` · ${i(t.known.join(`, `))}` : ``
    }</span></span>`,
  }),
  S = (e) => ({
    href: e.href,
    group: `Go to`,
    html: `<span class="flex h-12 w-8 shrink-0 items-center justify-center rounded-sm bg-amber text-ink"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
      <span class="min-w-0 flex-1"><span class="block truncate font-medium text-amber-2">${i(
        e.label
      )}</span>
      <span class="block truncate text-xs text-mute">Press Enter to open</span></span>`,
  }),
  C = (e) => ({
    href: e.href,
    group: `Keep exploring`,
    html: `<span class="flex w-8 shrink-0 justify-center">${n(
      e.icon,
      `h-9 w-9`
    )}</span>
      <span class="min-w-0 flex-1"><span class="block truncate font-medium">${i(
        e.label
      )}</span>
      <span class="block truncate text-xs text-mute">${i(
        e.note
      )}</span></span>`,
  }),
  w = (e) =>
    `<li role="presentation" class="px-3 py-8 text-center text-sm text-mute">${e}</li>`,
  T = () => `<li role="presentation" class="px-3 pb-3 pt-4">
    <p class="text-sm text-mute">Ask anything about any film or show, from any page. Try one:</p>
    <div class="mt-3 flex flex-wrap gap-2">${f
      .map(
        (e) =>
          `<button type="button" class="chip text-sm" data-example="${i(
            e
          )}">${i(e)}</button>`
      )
      .join(``)}</div></li>`,
  E = (e) => (_?.term !== e && (_ = { term: e, req: r(e) }), _.req);
function D() {
  let e = u.value.trim();
  clearTimeout(g);
  let t = ++h;
  (p = 0),
    e.length < 2
      ? ((v = ``), k([]))
      : (g = setTimeout(async () => {
          m.length || (d.innerHTML = w(`Finding the answer…`));
          let n = await E(e);
          t === h &&
            (O(n, e),
            n.fuzzy &&
              (g = setTimeout(async () => {
                if (t !== h) return;
                d.insertAdjacentHTML(
                  `afterbegin`,
                  `<li role="presentation" class="px-3 pt-2 text-xs text-amber-2" data-ai-note>Understanding with AI…</li>`
                );
                let n = await r(e, 1, !0);
                t === h &&
                  (d.querySelector(`[data-ai-note]`)?.remove(),
                  n.ai &&
                    ((_ = { term: e, req: Promise.resolve(n) }), O(n, e)));
              }, 700)));
        }, 220));
}
function O(e, n) {
  let {
      results: r,
      people: o = [],
      shows: s = [],
      answer: c,
      label: l,
      error: u,
      go: d,
      explore: f = [],
    } = e,
    p = r.filter((e) => !d || d.href !== t(e)),
    m = s
      .filter((e) => !d || d.href !== t(e))
      .slice(0, c?.film?.k === `tv` ? 5 : 3)
      .map(b(`TV shows`));
  (v = n),
    k(
      [
        ...(d ? [S(d)] : []),
        ...(c?.film?.k === `tv` ? m : []),
        ...p.slice(0, c ? 6 : 8).map(b(l || `Movies`)),
        ...(c?.film?.k === `tv` ? [] : m),
        ...o.slice(0, 3).map(x),
        ...f.map(C),
        {
          href: `/search?q=${encodeURIComponent(n)}`,
          html: `<span class="text-sm text-mute">See all results for “${i(
            n
          )}”</span>`,
        },
      ],
      (e.ai
        ? `<p class="px-3 pt-2 text-xs text-amber-2">Understood with AI</p>`
        : ``) +
        (c
          ? a(c)
          : u
          ? `<p class="px-3 pt-3 text-sm text-mute">${i(u)}</p>`
          : ``)
    );
}
function k(e, t = ``) {
  (m = e),
    (p = Math.min(p, Math.max(0, m.length - 1))),
    (d.innerHTML = m.length
      ? (t ? `<li role="presentation" class="p-1 pb-2">${t}</li>` : ``) +
        m
          .map(
            (e, t) =>
              `${
                e.group && m[t - 1]?.group !== e.group
                  ? `<li role="presentation" class="truncate px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wide text-mute">${i(
                      e.group
                    )}</li>`
                  : ``
              }<li role="option" id="pr-${t}" aria-selected="${
                t === p
              }" data-href="${i(
                c(e.href)
              )}" class="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 aria-selected:bg-ink-3">${
                e.html
              }</li>`
          )
          .join(``)
      : T()),
    u.setAttribute(`aria-activedescendant`, m.length ? `pr-${p}` : ``);
}
function A(e) {
  m.length &&
    ((p = (p + e + m.length) % m.length),
    d
      .querySelectorAll(`[role=option]`)
      .forEach((e, t) => e.setAttribute(`aria-selected`, String(t === p))),
    u.setAttribute(`aria-activedescendant`, `pr-${p}`),
    d.querySelector(`#pr-${p}`)?.scrollIntoView({ block: `nearest` }));
}
function j() {
  l.open || (l.showModal(), u.value || k([]), u.select());
}
async function M() {
  let e = u.value.trim();
  if (e.length < 2) return;
  if (m.length && v === e) {
    location.href = m[p].href;
    return;
  }
  clearTimeout(g), ++h, (d.innerHTML = w(`Finding the answer…`));
  let n = await E(e);
  location.href = n.go
    ? c(n.go.href)
    : n.results[0]
    ? t(n.results[0])
    : `/search?q=${encodeURIComponent(e)}`;
}
document
  .querySelectorAll(`[data-open-search]`)
  .forEach((e) => e.addEventListener(`click`, j)),
  l
    .querySelector(`[data-close-search]`)
    .addEventListener(`click`, () => l.close()),
  l.addEventListener(`click`, (e) => {
    e.target === l && l.close();
  }),
  u.addEventListener(`input`, D),
  u.addEventListener(`keydown`, (e) => {
    e.key === `ArrowDown` && (e.preventDefault(), A(1)),
      e.key === `ArrowUp` && (e.preventDefault(), A(-1)),
      e.key === `Enter` && (e.preventDefault(), M());
  }),
  d.addEventListener(`click`, (e) => {
    let t = e.target.closest(`[data-example]`);
    if (t) {
      (u.value = t.dataset.example), u.focus(), D();
      return;
    }
    if (e.target.closest(`a`)) return;
    let n = e.target.closest(`[data-href]`);
    n && (location.href = n.dataset.href);
  }),
  document.addEventListener(`keydown`, (e) => {
    let t =
      /input|textarea|select/i.test(e.target.tagName) ||
      e.target.isContentEditable;
    ((e.key === `/` && !t) ||
      (e.key.toLowerCase() === `k` && (e.metaKey || e.ctrlKey))) &&
      (e.preventDefault(), j());
  });
