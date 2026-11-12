var e = document.querySelector(`[data-menu-toggle]`),
  t = document.getElementById(`mobile-nav`);
e?.addEventListener(`click`, () => {
  let n = e.getAttribute(`aria-expanded`) === `true`;
  e.setAttribute(`aria-expanded`, String(!n)),
    e.setAttribute(`aria-label`, n ? `Open menu` : `Close menu`),
    t?.classList.toggle(`hidden`, n);
});
var n = document.querySelector(`[data-header]`),
  r = n?.firstElementChild,
  i = matchMedia(`(min-width: 1024px)`),
  a = () => {
    if (!r) return !1;
    let e =
      r.getBoundingClientRect().right -
      parseFloat(getComputedStyle(r).paddingRight);
    return (
      r.scrollWidth > r.clientWidth + 1 ||
      r.lastElementChild.getBoundingClientRect().right > e + 1
    );
  },
  o = () => {
    n &&
      (n.classList.remove(`search-compact`, `nav-compact`),
      i.matches &&
        (a() && n.classList.add(`search-compact`),
        a() && n.classList.add(`nav-compact`)));
  },
  s = 0,
  c = () => {
    cancelAnimationFrame(s), (s = requestAnimationFrame(o));
  };
o(), window.addEventListener(`resize`, c), document.fonts?.ready.then(c);
var l = document.querySelector(`[data-nav]`);
l &&
  new MutationObserver(c).observe(l, {
    subtree: !0,
    childList: !0,
    characterData: !0,
    attributes: !0,
    attributeFilter: [`data-c`],
  });
var u = document.querySelector(`[data-nav]`),
  d = u?.querySelector(`[data-glider]`);
if (u && d) {
  u.classList.add(`has-glider`);
  let e = [...u.querySelectorAll(`.nav-link`)],
    t = e.find((e) => e.getAttribute(`aria-current`) === `page`),
    n = (e, t = !1) => {
      e
        ? (t && (d.style.transition = `none`),
          d.style.setProperty(`--gx`, `${e.offsetLeft}px`),
          (d.style.width = `${e.offsetWidth}px`),
          (d.style.height = `${e.offsetHeight}px`),
          (d.style.opacity = `1`),
          t && (d.offsetWidth, (d.style.transition = ``)))
        : (d.style.opacity = `0`);
    },
    r = () => {
      d.style.setProperty(`--rx`, `0deg`),
        d.style.setProperty(`--ry`, `0deg`),
        n(t);
    };
  e.forEach((e) => {
    e.addEventListener(`pointerenter`, () => n(e)),
      e.addEventListener(`focus`, () => n(e)),
      e.addEventListener(`blur`, r),
      e.addEventListener(`pointermove`, (t) => {
        let n = e.getBoundingClientRect(),
          r = (t.clientX - n.left) / n.width,
          i = (t.clientY - n.top) / n.height;
        d.style.setProperty(`--mx`, `${r * 100}%`),
          d.style.setProperty(`--my`, `${i * 100}%`),
          d.style.setProperty(`--ry`, `${(r - 0.5) * 14}deg`),
          d.style.setProperty(`--rx`, `${(0.5 - i) * 18}deg`);
      });
  }),
    u.addEventListener(`pointerleave`, r),
    n(t, !0),
    window.addEventListener(`resize`, () => n(t, !0)),
    document.fonts?.ready.then(() => n(t, !0));
}
