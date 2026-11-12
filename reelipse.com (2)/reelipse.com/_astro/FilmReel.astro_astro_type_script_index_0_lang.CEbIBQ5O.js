var e = (e) => String(e).padStart(2, `0`),
  t = (e) => (e ? new Date(`${e}T00:00:00`).getTime() : NaN),
  n = (e) => {
    let n = t(e);
    if (Number.isNaN(n)) return `Date TBA`;
    let r = Math.ceil((n - Date.now()) / 864e5);
    return r <= 0 ? `Out today` : r === 1 ? `Tomorrow` : `In ${r} days`;
  };
document.querySelectorAll(`[data-premiere]`).forEach((r) => {
  let i = r.querySelector(`.pr-view`),
    a = r.querySelector(`.pr-strip`),
    o = [...r.querySelectorAll(`.pr-ticket`)],
    s = [...r.querySelectorAll(`[data-bg]`)],
    c = r.querySelector(`[data-clock]`),
    l = r.querySelector(`[data-f-link]`),
    u = r.querySelector(`[data-f-title]`),
    d = r.querySelector(`[data-f-date]`),
    f = r.querySelector(`[data-count]`),
    p = r.querySelector(`[data-fill]`),
    m = Object.fromEntries(
      [...r.querySelectorAll(`[data-u]`)].map((e) => [e.dataset.u, e])
    );
  if (!o.length || !c) return;
  o.forEach((e) => {
    let t = e.querySelector(`[data-left]`);
    t && (t.textContent = n(e.dataset.d));
  });
  let h = 0,
    g = t(o[0].dataset.d),
    _ = () => {
      let t = Number.isNaN(g) ? 0 : Math.max(0, g - Date.now()),
        n = {
          d: Math.floor(t / 864e5),
          h: Math.floor(t / 36e5) % 24,
          m: Math.floor(t / 6e4) % 60,
          s: Math.floor(t / 1e3) % 60,
        };
      for (let [t, r] of Object.entries(n)) {
        let n = m[t];
        n &&
          n.textContent !== e(r) &&
          ((n.textContent = e(r)),
          n.classList.remove(`is-tick`),
          n.offsetWidth,
          n.classList.add(`is-tick`));
      }
    },
    v = (e) => {
      let t = s.find((t) => t.dataset.bg === String(e));
      t?.dataset.src && ((t.src = t.dataset.src), delete t.dataset.src);
    },
    y = (n) => {
      if (n === h) return;
      h = n;
      let r = o[n];
      o.forEach((e, t) => e.classList.toggle(`is-active`, t === n)),
        v(n),
        v(n + 1),
        s.forEach((e) =>
          e.classList.toggle(`is-on`, e.dataset.bg === String(n))
        ),
        u && (u.textContent = r.dataset.t),
        l &&
          ((l.href = r.dataset.href),
          l.classList.remove(`is-swap`),
          l.offsetWidth,
          l.classList.add(`is-swap`)),
        d && (d.textContent = r.querySelector(`.pr-stub p`)?.textContent ?? ``),
        c.setAttribute(`aria-label`, `Countdown to ${r.dataset.t}`),
        f && (f.textContent = e(n + 1)),
        p?.style.setProperty(`--p`, String((n + 1) / o.length)),
        (g = t(r.dataset.d)),
        _();
    };
  v(1), _();
  let b = 0;
  new IntersectionObserver(([e]) => {
    clearInterval(b),
      e.isIntersecting && (_(), (b = window.setInterval(_, 1e3)));
  }).observe(r);
  let x = r.querySelector(`[data-step="-1"]`),
    S = r.querySelector(`[data-step="1"]`),
    C = () => {
      x && (x.disabled = h === 0), S && (S.disabled = h === o.length - 1);
    },
    w = 0,
    T = (e) => {
      (e = Math.max(0, Math.min(o.length - 1, e))),
        y(e),
        C(),
        clearTimeout(w),
        (w = window.setTimeout(() => {
          w = 0;
        }, 700)),
        i.scrollTo({ left: o[e].offsetLeft - a.offsetLeft });
    };
  x?.addEventListener(`click`, () => T(h - 1)),
    S?.addEventListener(`click`, () => T(h + 1));
  let E = 0;
  i.addEventListener(
    `scroll`,
    () => {
      w ||
        E ||
        (E = requestAnimationFrame(() => {
          E = 0;
          let e = i.scrollLeft,
            t = o.length - 1;
          if (e < i.scrollWidth - i.clientWidth - 4) {
            let n = e + a.offsetLeft;
            t = o.reduce(
              (e, t, r) =>
                Math.abs(t.offsetLeft - n) < Math.abs(o[e].offsetLeft - n)
                  ? r
                  : e,
              0
            );
          }
          y(t), C();
        }));
    },
    { passive: !0 }
  ),
    o.forEach((e, t) => {
      e.addEventListener(`pointerenter`, (e) => {
        e.pointerType === `mouse` && (y(t), C());
      }),
        e.addEventListener(`focusin`, () => {
          y(t), C();
        });
    });
});
