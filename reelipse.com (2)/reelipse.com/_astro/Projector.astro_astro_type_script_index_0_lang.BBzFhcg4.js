import { t as e } from "./gsap.CvDoa17S.js";
import { t } from "./ScrollTrigger.C7HwZxAz.js";
e.registerPlugin(t);
function n(t, { hold: n = 2, scrub: r = !0, phone: i = `same`, build: a }) {
  let o = (e) => [...t.querySelectorAll(e)],
    s = e.matchMedia();
  return (
    s.add(
      {
        motion: `(prefers-reduced-motion: no-preference)`,
        phone: `(max-width: 767px)`,
      },
      (s) => {
        let c = !!s.conditions?.phone;
        if (!s.conditions?.motion || (c && i === `rest`))
          return (
            t.classList.add(`is-rest`), () => t.classList.remove(`is-rest`)
          );
        t.classList.add(`is-live`), t.style.setProperty(`--hold`, String(n));
        let l = e.timeline({
          defaults: { ease: `none` },
          scrollTrigger: {
            trigger: t,
            start: `top top`,
            end: `bottom bottom`,
            scrub: r,
            invalidateOnRefresh: !0,
          },
        });
        return (
          a(l, { root: t, q: o, phone: c }),
          l.duration() < 1 &&
            l.to({}, { duration: 1 - l.duration() }, l.duration()),
          () => {
            t.classList.remove(`is-live`), t.style.removeProperty(`--hold`);
          }
        );
      }
    ),
    s
  );
}
document.querySelectorAll(`[data-projector]`).forEach((e) => {
  n(e, {
    hold: 3,
    phone: `rest`,
    build(e, { q: t }) {
      let [n] = t(`.proj-frame`),
        [r] = t(`.proj-dim`),
        [i] = t(`.proj-card`),
        [a] = t(`.proj-row`),
        o = t(`.proj-row li`),
        [s] = t(`.proj-row > a`);
      e.set(a, { autoAlpha: 1 }, 0)
        .fromTo(
          n,
          { scaleX: 0.82, scaleY: 0.86 },
          { scaleX: 1, scaleY: 1, duration: 0.4, ease: `power2.inOut` },
          0
        )
        .fromTo(
          n.querySelector(`img`),
          { scale: 1.35 },
          { scale: 1, duration: 0.6, ease: `power2.out` },
          0
        )
        .fromTo(
          i,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.12, ease: `power2.out` },
          0.32
        )
        .to(i, { autoAlpha: 0, y: -30, duration: 0.1, ease: `power2.in` }, 0.62)
        .fromTo(r, { autoAlpha: 0 }, { autoAlpha: 0.86, duration: 0.15 }, 0.64)
        .set(o, { autoAlpha: 0, y: 80, rotateX: -25 }, 0)
        .to(
          o,
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.14,
            stagger: 0.03,
            ease: `power3.out`,
          },
          0.7
        )
        .fromTo(s, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.08 }, 0.88);
    },
  });
});
