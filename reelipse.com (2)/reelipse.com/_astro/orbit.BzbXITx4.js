import { t as e } from "./gsap.CvDoa17S.js";
var t = Math.PI * 2,
  n = 0.13,
  r = `242,169,59`;
function i(i) {
  let a = matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    o = matchMedia(`(hover: hover) and (pointer: fine)`).matches,
    s = i.querySelector(`[data-orbit-core]`),
    c = i.querySelector(`[data-orbit-sky]`),
    l = c.getContext(`2d`),
    u = [...i.querySelectorAll(`[data-orbit-glow]`)],
    d = i.querySelector(`[data-orbit-hint]`),
    f = i.querySelector(`[data-orbit-pause]`),
    p = {
      kind: `main`,
      cards: [],
      n: 0,
      phase: 0,
      rx: 1,
      ry: 1,
      tilt: -0.1,
      dir: 1,
      sMin: 0.5,
      sMax: 1.12,
      dim: 0.78,
      yaw: 24,
    },
    m = {
      kind: `far`,
      cards: [],
      n: 0,
      phase: 0.4,
      rx: 0.74,
      ry: 1.28,
      tilt: 0.3,
      dir: -1,
      sMin: 0.3,
      sMax: 0.48,
      dim: 0.55,
      yaw: 0,
    };
  i.querySelectorAll(`.o-card`).forEach((e) => {
    let t = e.dataset.ring === `far` ? m : p;
    t.cards.push({
      el: e,
      ring: t,
      i: t.cards.length,
      poster: e.dataset.poster,
      tilt: e.querySelector(`.o-tilt`),
      shade: e.querySelector(`.o-shade`),
      spawn: +!!a,
      lift: 0,
      rx: 0,
      ry: 0,
      trx: 0,
      try: 0,
      depth: 0,
      z: ``,
      op: ``,
      shadeOp: ``,
    });
  });
  let h = [...m.cards, ...p.cards];
  if (!p.cards.length) return;
  let g = 0,
    _ = 0,
    v = 0,
    y = { w: 0, h: 0, cx: 0, cy: 0, rx: 0, ry: 0, top: 0, dpr: 1, tight: !1 },
    b = [];
  function x() {
    let e = i.getBoundingClientRect(),
      n = s.getBoundingClientRect();
    (y.w = e.width),
      (y.h = e.height),
      (y.top = e.top + scrollY),
      (y.cx = y.w / 2),
      (y.cy = (n.top + n.bottom) / 2 - e.top);
    let r = p.cards[0].el.offsetWidth * 1.5,
      a = n.height / 2 + (r * p.sMax) / 2 + 12,
      o = Math.min(y.cy - (r * p.sMin) / 2 - 8, y.h - y.cy - r * p.sMax * 0.12);
    (y.tight = a > o),
      (y.ry = y.tight ? Math.min(o, y.h * 0.42) : o * 0.97),
      (y.rx =
        y.w < 640
          ? y.w * 0.62
          : y.w < 1024
          ? y.w * 0.5
          : Math.min(y.w * 0.44, 840)),
      i.classList.toggle(`is-tight`, y.tight),
      (p.n = Math.min(p.cards.length, y.w < 640 ? 12 : y.w < 1024 ? 15 : 18)),
      (m.n = g ? 0 : Math.min(m.cards.length, y.w < 640 ? 8 : 14));
    for (let e of [p, m])
      e.cards.forEach((t) => (t.el.style.display = t.i < e.n ? `` : `none`));
    y.dpr = Math.min(devicePixelRatio || 1, 1.25);
    let l = Math.round(y.w * y.dpr),
      u = Math.round(y.h * y.dpr);
    c.width !== l && (c.width = l), c.height !== u && (c.height = u);
    let d = (y.w < 640 ? 140 : 280) / (g > 1 ? 2 : 1);
    b.length !== d &&
      (b = Array.from({ length: d }, (e, n) => ({
        r:
          n % 5 == 0
            ? 0.2 + Math.random() * 2.2
            : 0.55 + Math.random() ** 1.6 * 1.3,
        a: Math.random() * t,
        z: 0.25 + Math.random() * 0.75,
        tw: Math.random() * t,
      }))),
      z();
  }
  let S = a ? 0 : n,
    C = a ? 0 : 2.4,
    w = null,
    T = null,
    E = !1,
    D = { x: 0, y: 0, tx: 0, ty: 0 },
    O = { on: !1, x: 0, t: 0, moved: 0, sign: -1, used: !1 },
    k = 0,
    A = 0,
    j = ``;
  function M(e, t = !1) {
    let n = `https://image.tmdb.org/t/p/w92${e.poster}`;
    if (n === j) return;
    j = n;
    let r = new Image();
    (r.decoding = `async`),
      (r.onload = () => {
        if (j !== n) return;
        let e = u[k ^ 1],
          i = u[k],
          a = e.getContext(`2d`);
        (a.filter = `blur(2px) saturate(1.5)`),
          a.clearRect(0, 0, e.width, e.height),
          a.drawImage(r, -4, -4, e.width + 8, e.height + 8),
          (e.style.opacity = t ? `0.5` : `0.3`),
          (i.style.opacity = `0`),
          (k ^= 1);
      }),
      (r.src = n);
  }
  function N(e) {
    e !== w &&
      (w?.el.classList.remove(`is-hot`),
      (w = e),
      e && (e.el.classList.add(`is-hot`), M(e, !0)),
      z());
  }
  for (let e of p.cards)
    o
      ? (e.el.addEventListener(`pointerenter`, () => !O.on && N(e)),
        e.el.addEventListener(`pointerleave`, () => {
          w === e && N(null), (e.trx = e.try = 0);
        }),
        e.el.addEventListener(`pointermove`, (t) => {
          let n = e.tilt.getBoundingClientRect(),
            r = (t.clientX - n.left) / n.width,
            i = (t.clientY - n.top) / n.height;
          (e.try = (r - 0.5) * 26),
            (e.trx = -(i - 0.5) * 26),
            e.tilt.style.setProperty(`--gx`, `${(r * 100).toFixed(1)}%`),
            e.tilt.style.setProperty(`--gy`, `${(i * 100).toFixed(1)}%`),
            z();
        }))
      : (e.el.addEventListener(`pointerdown`, () => N(e)),
        e.el.addEventListener(`contextmenu`, (e) => e.preventDefault()));
  i.addEventListener(`pointerdown`, (e) => {
    if (
      e.button !== 0 ||
      e.target.closest(
        `[data-orbit-core] a, [data-orbit-core] button, [data-orbit-core] input, [data-orbit-ui]`
      )
    )
      return;
    let t = i.getBoundingClientRect();
    Object.assign(O, {
      on: !0,
      x: e.clientX,
      t: performance.now(),
      moved: 0,
      used: !1,
      sign: e.clientY - t.top > y.cy ? -1 : 1,
    }),
      (C *= 0.2),
      z();
  }),
    addEventListener(
      `pointermove`,
      (e) => {
        if (!O.on) return;
        let t = performance.now(),
          n = e.clientX - O.x,
          r = Math.max(1, t - O.t) / 1e3;
        (O.x = e.clientX), (O.t = t), (O.moved += Math.abs(n));
        let a = (O.sign * n) / (y.rx * 0.85);
        (p.phase += a),
          (m.phase -= a * 0.4),
          (C = C * 0.6 - (a / r) * 0.4),
          O.moved > 6 &&
            !O.used &&
            ((O.used = !0),
            i.classList.add(`is-grabbing`),
            N(null),
            d?.classList.add(`is-gone`)),
          z();
      },
      { passive: !0 }
    );
  let P = () => {
    O.on &&
      ((O.on = !1),
      i.classList.remove(`is-grabbing`),
      (C = e.utils.clamp(-7, 7, C)),
      o || setTimeout(() => !O.on && N(null), 700),
      z());
  };
  addEventListener(`pointerup`, P),
    addEventListener(`pointercancel`, () => {
      P(), o || N(null);
    }),
    i.addEventListener(
      `click`,
      (e) => {
        O.used &&= (e.preventDefault(), e.stopPropagation(), !1);
      },
      !0
    ),
    o
      ? (i.addEventListener(
          `pointermove`,
          (e) => {
            let t = i.getBoundingClientRect();
            (D.tx = ((e.clientX - t.left) / t.width - 0.5) * 2),
              (D.ty = ((e.clientY - t.top) / t.height - 0.5) * 2),
              z();
          },
          { passive: !0 }
        ),
        i.addEventListener(`pointerleave`, () => {
          (D.tx = D.ty = 0), z();
        }))
      : !a &&
        typeof DeviceOrientationEvent?.requestPermission != `function` &&
        addEventListener(`deviceorientation`, (t) => {
          t.gamma != null &&
            t.beta != null &&
            ((D.tx = e.utils.clamp(-1, 1, t.gamma / 30)),
            (D.ty = e.utils.clamp(-1, 1, (t.beta - 50) / 40)),
            z());
        }),
    f?.addEventListener(`click`, () => {
      (E = !E),
        f.setAttribute(`aria-pressed`, String(E)),
        (f.textContent = E ? `Play Motion` : `Pause Motion`),
        z();
    });
  let F = 0,
    I = 0,
    L = !0,
    R = 0;
  function z() {
    !F &&
      L &&
      !document.hidden &&
      ((I = performance.now()), (F = requestAnimationFrame(V)));
  }
  new IntersectionObserver(([e]) => {
    (L = e.isIntersecting), z();
  }).observe(i),
    document.addEventListener(`visibilitychange`, z),
    addEventListener(`scroll`, z, { passive: !0 });
  let B = (e, t) => 1 - Math.exp(-e * t);
  function V(r) {
    F = 0;
    let i = r - I,
      o = Math.min(0.05, i / 1e3);
    I = r;
    let s = a || E;
    s || (R += o),
      !s &&
        !O.on &&
        ++v > 60 &&
        i < 250 &&
        ((_ = _ * 0.95 + (i > 22 ? 0.05 : 0)),
        _ > 0.6 && g < 2 && (g++, (_ = 0), (v = 0), x())),
      (S += ((s ? 0 : w ? n * 0.05 : n) - S) * B(3, o)),
      O.on || (C *= Math.exp(-o * 1.4)),
      (p.phase -= (S + (O.on ? 0 : C)) * o),
      (m.phase += (S * 0.6 + (O.on ? 0 : C * 0.4)) * o),
      (D.x += (D.tx - D.x) * B(4, o)),
      (D.y += (D.ty - D.y) * B(4, o));
    let c = e.utils.clamp(0, 1, (scrollY - y.top) / Math.max(1, y.h)),
      l = 1 + c * 0.8,
      u = y.cy - c * y.h * 0.2 + D.y * 10,
      d = 1 - c * 0.85,
      f =
        !s ||
        O.on ||
        Math.abs(C) > 0.002 ||
        Math.abs(D.tx - D.x) > 0.002 ||
        Math.abs(D.ty - D.y) > 0.002 ||
        Math.abs(S) > 5e-4,
      h = -2,
      b = null;
    for (let e of [m, p]) {
      let n = e.tilt + D.x * (e.kind === `main` ? 0.07 : -0.05),
        r = Math.cos(n),
        i = Math.sin(n),
        a = y.rx * e.rx * l,
        s = y.ry * e.ry * (1 + c * 0.25) * (1 + D.y * 0.06);
      for (let c of e.cards) {
        if (c.i >= e.n) continue;
        let l = c.spawn,
          p = e.phase + (c.i / e.n) * t + (1 - l) * 2.4 * e.dir,
          m = Math.sin(p),
          g = Math.cos(p),
          _ = a * g * l,
          v = s * m * l,
          x = y.cx + _ * r - v * i,
          S = u + _ * i + v * r,
          C = (m + 1) / 2;
        c.depth = C;
        let T = +(e.kind === `main` && c === w);
        (c.lift += (T - c.lift) * B(9, o)),
          Math.abs(T - c.lift) > 0.002 && (f = !0);
        let E = e.sMin + (e.sMax - e.sMin) * C;
        (E += (Math.max(E, 1) * 1.22 - E) * c.lift), (E *= 0.35 + 0.65 * l);
        let D = -g * e.yaw * (1 - c.lift);
        c.el.style.transform = `perspective(1400px) translate3d(${x.toFixed(
          1
        )}px,${S.toFixed(1)}px,0) translate(-50%,-50%) scale(${E.toFixed(
          3
        )}) rotateY(${D.toFixed(1)}deg) rotateZ(${(
          n *
          20 *
          (1 - c.lift)
        ).toFixed(2)}deg)`;
        let O = String(
          c.lift > 0.02
            ? 500
            : e.kind === `far`
            ? 1 + Math.round(C * 5)
            : 10 + Math.round(C * 60)
        );
        O !== c.z && (c.el.style.zIndex = c.z = O);
        let k = Math.min(1, l * 1.6) * d,
          A = k > 0.995 ? `` : k.toFixed(2);
        A !== c.op && (c.el.style.opacity = c.op = A);
        let j = w && c !== w ? 0.4 : 0,
          M = Math.min(
            0.92,
            (e.dim * (1 - C) ** 1.2 + j) * (1 - c.lift)
          ).toFixed(2);
        if (
          (M !== c.shadeOp && (c.shade.style.opacity = c.shadeOp = M),
          e.kind === `main`)
        ) {
          let e = c === w ? c.trx : 0,
            t = c === w ? c.try : 0;
          (c.rx += (e - c.rx) * B(10, o)),
            (c.ry += (t - c.ry) * B(10, o)),
            (c.lift > 0.001 ||
              Math.abs(c.rx) > 0.05 ||
              Math.abs(c.ry) > 0.05) &&
              ((c.tilt.style.transform = `rotateX(${c.rx.toFixed(
                2
              )}deg) rotateY(${c.ry.toFixed(2)}deg)`),
              (f = !0)),
            m > h && ((h = m), (b = c));
        }
      }
    }
    b !== T && (T = b),
      !w && T && r - A > 900 && ((A = r), M(T)),
      H(u, l, c),
      f &&
        L &&
        !document.hidden &&
        !F &&
        ((I = r), (F = requestAnimationFrame(V)));
  }
  function H(n, i, a) {
    let { dpr: o } = y;
    l.setTransform(o, 0, 0, o, 0, 0), l.clearRect(0, 0, y.w, y.h);
    let s = p.tilt + D.x * 0.07,
      c = Math.cos(s),
      u = Math.sin(s),
      d = y.rx * i,
      f = y.ry * (1 + a * 0.25) * (1 + D.y * 0.06),
      m = (e, t) => {
        let r = d * t * Math.cos(e),
          i = f * t * Math.sin(e);
        return [
          y.cx + r * c - i * u - D.x * 14 * t,
          n + r * u + i * c - D.y * 8 * t,
        ];
      },
      h = p.phase,
      _ = e.utils.clamp(-0.5, 0.5, C * 0.05);
    l.lineCap = `round`;
    let v = Math.abs(_) > 0.02,
      x = `rgb(${r})`,
      S = ``;
    for (let e of b) {
      let t = e.a + h * (0.35 / e.r) * e.z,
        [n, r] = m(t, e.r);
      if (n < -10 || n > y.w + 10 || r < -10 || r > y.h + 10) continue;
      let i =
          e.z *
          (0.45 + 0.55 * Math.sin(R * (1 + e.z * 2) + e.tw) ** 2) *
          (1 - a * 0.6),
        o = e.r < 1.3 && (Math.sin(t) + 1) / 2 > 0.6 && e.z > 0.8,
        s = o ? x : `rgb(236,235,231)`;
      if (
        (s !== S && (l.fillStyle = l.strokeStyle = S = s),
        (l.globalAlpha = o ? i : i * 0.85),
        v)
      ) {
        let [i, a] = m(t + _ / e.r, e.r);
        (l.lineWidth = e.z * 1.4),
          l.beginPath(),
          l.moveTo(n, r),
          l.lineTo(i, a),
          l.stroke();
      } else {
        let t = e.z * 2;
        l.fillRect(n - t / 2, r - t / 2, t, t);
      }
    }
    (l.globalAlpha = 1),
      (l.lineWidth = 1),
      (l.strokeStyle = `rgba(236,235,231,0.07)`),
      l.beginPath(),
      l.ellipse(y.cx - D.x * 14, n - D.y * 8, d, f, s, Math.PI, t),
      l.stroke();
    let w = l.createLinearGradient(y.cx - d, 0, y.cx + d, 0);
    w.addColorStop(0, `rgba(${r},0.04)`),
      w.addColorStop(0.5, `rgba(${r},0.35)`),
      w.addColorStop(1, `rgba(${r},0.04)`),
      (l.strokeStyle = w),
      l.beginPath(),
      l.ellipse(y.cx - D.x * 14, n - D.y * 8, d, f, s, 0, Math.PI),
      l.stroke(),
      l.setLineDash([2, 10]),
      (l.strokeStyle = `rgba(236,235,231,0.06)`),
      l.beginPath(),
      l.ellipse(y.cx - D.x * 20, n - D.y * 12, d * 1.18, f * 1.18, s, 0, t),
      l.stroke(),
      l.setLineDash([]);
    for (let e = 0; e < (g > 1 ? 0 : 3); e++) {
      let n = p.phase * 3 - R * 0.25 + (t / 3) * e;
      for (let e = 0; e < 18; e++) {
        let i = n + e * 0.018,
          [o, s] = m(i, 1),
          c = (Math.sin(i) + 1) / 2,
          u = (1 - e / 18) ** 2 * (0.25 + 0.75 * c) * (1 - a);
        (l.fillStyle = `rgba(${e ? r : `255,240,210`},${u})`),
          l.beginPath(),
          l.arc(o, s, (e ? 1.6 : 2.4) * (1 - e / 22) * (0.7 + c * 0.5), 0, t),
          l.fill();
      }
    }
  }
  new ResizeObserver(x).observe(i),
    new ResizeObserver(x).observe(s),
    x(),
    i.classList.add(`is-live`),
    a ||
      e.to(h, {
        spawn: 1,
        duration: 2.4,
        ease: `expo.out`,
        delay: 0.2,
        stagger: { each: 0.03, from: `random` },
        onUpdate: z,
      }),
    d && setTimeout(() => d.classList.add(`is-gone`), 14e3);
}
export { i as startOrbit };
