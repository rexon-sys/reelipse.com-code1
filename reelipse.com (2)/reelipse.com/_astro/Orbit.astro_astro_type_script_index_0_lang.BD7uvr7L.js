const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["_astro/orbit.BzbXITx4.js", "_astro/gsap.CvDoa17S.js"])
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper.DHhhL8Zf.js";
var t = document.querySelector(`[data-orbit]`);
t &&
  document.fonts.ready.then(() =>
    e(async () => {
      let { startOrbit: e } = await import(`./orbit.BzbXITx4.js`);
      return { startOrbit: e };
    }, __vite__mapDeps([0, 1]))
      .then(({ startOrbit: e }) => e(t))
      .catch((e) => console.warn(`Orbit unavailable`, e))
  );
