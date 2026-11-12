import { i as e, r as t, t as n } from "./languages.CroomS91.js";
var r = document.documentElement,
  i = () => r.classList.remove(`i18n-wait`),
  a = [`aria-label`, `placeholder`, `title`, `alt`],
  o = `script, style, noscript, textarea, code, pre, [translate="no"], [contenteditable]`,
  s = `January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec`,
  c = s.split(`|`),
  l = (e) => {
    let t = c.indexOf(e);
    return t < 12 ? t : [0, 1, 2, 3, 5, 6, 7, 8, 8, 9, 10, 11][t - 12];
  },
  u = RegExp(
    `\\b(\\d{1,2}) (${s})(?: (\\d{4}))?\\b|\\b(${s}) (\\d{1,2}), (\\d{4})\\b|\\b(${s}) (\\d{4})\\b|\\d+(?:[.,:]\\d+)*`,
    `g`
  ),
  d = /\p{L}/u;
function f(e, t) {
  let n = new Map(Object.entries(e)),
    r = new Map([...n].map(([e, t]) => [e.toLowerCase(), t])),
    i = (e, n) => {
      let i = p(e, n);
      if (i !== null) return i;
      let a = r.get(e.toLowerCase());
      return a === void 0
        ? e
        : e === e.toLowerCase() && !t?.code.startsWith(`de`)
        ? a.toLocaleLowerCase(t?.locale)
        : a;
    },
    a = [];
  for (let [e, t] of n) {
    if (!/\{[a-z]\}/.test(e)) continue;
    let n = e.split(/(\{[a-z0-9]\})/),
      r = [],
      i = n
        .map((e, t) =>
          t % 2 == 0
            ? e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)
            : (r.push(e.slice(1, -1)),
              /\d/.test(e) ? `(\\d+(?:[.,:]\\d+)*)` : `(.+?)`)
        )
        .join(``),
      o = n.filter((e, t) => t % 2 == 0).sort((e, t) => t.length - e.length)[0];
    a.push({ re: RegExp(`^${i}$`), anchor: o, slots: r, out: t });
  }
  a.sort((e, t) => t.anchor.length - e.anchor.length);
  let o = (e) =>
      new Intl.DateTimeFormat(t?.locale ?? `en-IN`, { ...e, timeZone: `UTC` }),
    s = (e, t, n, r) =>
      o({
        day: n ? `numeric` : void 0,
        month: r ? `long` : `short`,
        year: e ? `numeric` : void 0,
      }).format(new Date(Date.UTC(e ? +e : 2e3, l(t), n ? +n : 1)));
  function c(e) {
    let t = [];
    return {
      key: e.replace(u, (e, n, r, i, a, o, c, l, u) => {
        let d = r ?? a ?? l;
        return (
          t.push(
            d
              ? s(
                  i ?? c ?? u,
                  d,
                  n ?? o,
                  d.length > 4 || d === `June` || d === `July` || d === `May`
                )
              : e
          ),
          `{${t.length - 1}}`
        );
      }),
      values: t,
    };
  }
  let f = (e, t) => e.replace(/\{([a-z0-9])\}/g, (e, n) => t[n] ?? e);
  function p(e, t = 0) {
    let r = n.get(e);
    if (r !== void 0) return r;
    let { key: o, values: s } = c(e);
    if (s.length) {
      let e = n.get(o);
      if (e !== void 0) return f(e, s);
      if (!d.test(o.replace(/\{\d\}/g, ``))) return f(o, s);
    }
    if (t < 2)
      for (let n of a) {
        if (!e.includes(n.anchor)) continue;
        let r = n.re.exec(e);
        if (!r) continue;
        let a = {};
        return (
          n.slots.forEach((e, n) => {
            a[e] = /\d/.test(e) ? r[n + 1] : i(r[n + 1], t + 1);
          }),
          f(n.out, a)
        );
      }
    return null;
  }
  return p;
}
function p(e, t) {
  let n = new WeakMap(),
    r = (e) => e.trim().replace(/\s+/g, ` `);
  function i(i) {
    let a = i.data;
    if (!d.test(a) || n.get(i) === a || i.parentElement?.closest(o)) return;
    let s = r(a),
      c = e(s);
    if (c === null || c === s || !t) return;
    let l =
      a.slice(0, a.length - a.trimStart().length) +
      c +
      a.slice(a.trimEnd().length);
    n.set(i, l), (i.data = l);
  }
  function s(i, a) {
    let s = i.getAttribute(a);
    if (!s || !d.test(s) || n.get(i) === a + s || i.closest(o)) return;
    let c = e(r(s));
    c !== null && t && (n.set(i, a + c), i.setAttribute(a, c));
  }
  function c(e) {
    for (let t of a) e.hasAttribute(t) && s(e, t);
    e instanceof HTMLInputElement &&
      /^(button|submit|reset)$/.test(e.type) &&
      s(e, `value`),
      e.classList.contains(`ai-tag`) &&
        e.hasAttribute(`data-c`) &&
        s(e, `data-c`),
      e.classList.contains(`nav-roll`) && l(e);
  }
  function l(n) {
    let r = [...n.querySelectorAll(`.nav-ch`)],
      i = e(
        r
          .map((e) => e.dataset.c)
          .join(``)
          .replace(/ /g, ` `)
      );
    if (i === null || !t || !r.length) return;
    let a = [
      ...new Intl.Segmenter(void 0, { granularity: `grapheme` }).segment(i),
    ].map((e) => e.segment);
    n.replaceChildren(
      ...a.map((e, t) => {
        let n = r[0].cloneNode(!1);
        return (
          n.style.setProperty(`--i`, String(t)),
          (n.dataset.c = e === ` ` ? `\xA0` : e),
          n
        );
      })
    );
  }
  function u(e) {
    if (e.nodeType === Node.TEXT_NODE) return i(e);
    if (e.nodeType !== Node.ELEMENT_NODE) return;
    let t = e;
    if (t.closest(o)) return;
    c(t);
    let n = document.createTreeWalker(
      t,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
    );
    for (let e = n.nextNode(); e; e = n.nextNode())
      e.nodeType === Node.TEXT_NODE ? i(e) : c(e);
  }
  u(document.body);
  let f = document.title
    .split(` | `)
    .map((t) => e(r(t)) ?? t)
    .join(` | `);
  t && f !== document.title && (document.title = f),
    new MutationObserver((e) => {
      for (let t of e)
        t.type === `childList`
          ? t.addedNodes.forEach(u)
          : t.type === `characterData`
          ? i(t.target)
          : t.attributeName && s(t.target, t.attributeName);
    }).observe(document.body, {
      subtree: !0,
      childList: !0,
      characterData: !0,
      attributes: !0,
      attributeFilter: [...a, `value`],
    });
}
function m(e) {
  let t = [...document.querySelectorAll(`[data-l10n]`)],
    n = new Set(t.map((e) => e.dataset.l10n.split(`:`).slice(0, 2).join(`:`)));
  for (let r of n) {
    let [n, i] = r.split(`:`);
    fetch(`/api/l10n?${new URLSearchParams({ k: n, id: i, lang: e.code })}`)
      .then((e) => (e.ok ? e.json() : {}))
      .then((n) => {
        for (let i of t) {
          let [t, a, o] = i.dataset.l10n.split(`:`),
            s = `${t}:${a}` === r ? n[o] : void 0;
          if (!s) continue;
          if (((i.lang = e.code), o !== `biography`)) {
            i.textContent = s;
            continue;
          }
          let c = i.querySelector(`p`);
          i.replaceChildren(
            ...s
              .split(
                `
`
              )
              .filter(Boolean)
              .slice(0, 2)
              .map((e) => {
                let t = document.createElement(`p`);
                return (
                  (t.className = c?.className ?? ``), (t.textContent = e), t
                );
              })
          );
        }
      })
      .catch(() => {});
  }
}
var h = (e) => ((window.rwT = (t) => e(t) ?? t), e),
  g = t();
if (g) {
  (r.lang = g.code), g.indic && (r.dataset.script = `indic`), m(g);
  let t = n(g);
  t
    ? (p(h(f(t.dict, g)), !0),
      i(),
      t.fresh || setTimeout(() => e(g).catch(() => {}), 3e3))
    : (window.rwI18n = e(g)
        .then((e) => p(h(f(e, g)), !0))
        .catch(() => {})
        .finally(i));
} else i();
