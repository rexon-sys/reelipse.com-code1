var e = `/_astro/bn.DKBvcEnz.json`,
  t = `/_astro/de.Cs1lEwCB.json`,
  n = `/_astro/es-MX.B-JXTruB.json`,
  r = `/_astro/es.Bh6v68pt.json`,
  i = `/_astro/fr-CA.COeOalDG.json`,
  a = `/_astro/fr.DpvXQilT.json`,
  o = `/_astro/gu.DRVfi5hr.json`,
  s = `/_astro/hi.ByWZI6mf.json`,
  c = `/_astro/it.DttB12g1.json`,
  l = `/_astro/kn.ETAxZcXY.json`,
  u = `/_astro/ml.DEWeiASW.json`,
  d = `/_astro/mr.Bs4wTmw9.json`,
  f = `/_astro/pa.Bq29XIZG.json`,
  p = `/_astro/pt.-lf0pGmo.json`,
  m = `/_astro/ta.DxrnVZpB.json`,
  h = `/_astro/te.B2xGla93.json`,
  g = [
    { code: `en`, name: `English (United States)`, dicts: [], locale: `en-IN` },
    {
      code: `fr-CA`,
      name: `Français (Canada)`,
      dicts: [`fr`, `fr-CA`],
      locale: `fr-CA`,
    },
    {
      code: `fr-FR`,
      name: `Français (France)`,
      dicts: [`fr`],
      locale: `fr-FR`,
    },
    {
      code: `de-DE`,
      name: `Deutsch (Deutschland)`,
      dicts: [`de`],
      locale: `de-DE`,
    },
    {
      code: `hi-IN`,
      name: `हिंदी (भारत)`,
      dicts: [`hi`],
      locale: `hi-IN`,
      indic: !0,
    },
    {
      code: `it-IT`,
      name: `Italiano (Italia)`,
      dicts: [`it`],
      locale: `it-IT`,
    },
    {
      code: `pt-BR`,
      name: `Português (Brasil)`,
      dicts: [`pt`],
      locale: `pt-BR`,
    },
    { code: `es-ES`, name: `Español (España)`, dicts: [`es`], locale: `es-ES` },
    {
      code: `es-MX`,
      name: `Español (México)`,
      dicts: [`es`, `es-MX`],
      locale: `es-MX`,
    },
    {
      code: `ta-IN`,
      name: `தமிழ் (இந்தியா)`,
      dicts: [`ta`],
      locale: `ta-IN`,
      indic: !0,
    },
    {
      code: `te-IN`,
      name: `తెలుగు (భారతదేశం)`,
      dicts: [`te`],
      locale: `te-IN`,
      indic: !0,
    },
    {
      code: `ml-IN`,
      name: `മലയാളം (ഇന്ത്യ)`,
      dicts: [`ml`],
      locale: `ml-IN`,
      indic: !0,
    },
    {
      code: `kn-IN`,
      name: `ಕನ್ನಡ (ಭಾರತ)`,
      dicts: [`kn`],
      locale: `kn-IN`,
      indic: !0,
    },
    {
      code: `bn-IN`,
      name: `বাংলা (ভারত)`,
      dicts: [`bn`],
      locale: `bn-IN`,
      indic: !0,
    },
    {
      code: `mr-IN`,
      name: `मराठी (भारत)`,
      dicts: [`mr`],
      locale: `mr-IN`,
      indic: !0,
    },
    {
      code: `gu-IN`,
      name: `ગુજરાતી (ભારત)`,
      dicts: [`gu`],
      locale: `gu-IN`,
      indic: !0,
    },
    {
      code: `pa-IN`,
      name: `ਪੰਜਾਬੀ (ਭਾਰਤ)`,
      dicts: [`pa`],
      locale: `pa-IN`,
      indic: !0,
    },
  ],
  _ = `rw:lang`,
  v = `rw:lang-dict`,
  y = Object.assign({
    "./dict/bn.json": e,
    "./dict/de.json": t,
    "./dict/es-MX.json": n,
    "./dict/es.json": r,
    "./dict/fr-CA.json": i,
    "./dict/fr.json": a,
    "./dict/gu.json": o,
    "./dict/hi.json": s,
    "./dict/it.json": c,
    "./dict/kn.json": l,
    "./dict/ml.json": u,
    "./dict/mr.json": d,
    "./dict/pa.json": f,
    "./dict/pt.json": p,
    "./dict/ta.json": m,
    "./dict/te.json": h,
  }),
  b = (e) => y[`./dict/${e}.json`],
  x = (e) => e.dicts.map(b).join(` `),
  S = (e) => g.find((t) => t.code === e && t.code !== `en`) ?? null;
function C() {
  try {
    return S(localStorage.getItem(_));
  } catch {
    return null;
  }
}
function w(e) {
  try {
    let t = JSON.parse(localStorage.getItem(v) ?? `null`);
    return t && t.code === e.code ? { dict: t.d, fresh: t.v === x(e) } : null;
  } catch {
    return null;
  }
}
async function T(e) {
  let t = await Promise.all(
      e.dicts.map(async (e) => {
        let t = await fetch(b(e));
        if (!t.ok) throw Error(`dictionary ${e}: ${t.status}`);
        return await t.json();
      })
    ),
    n = Object.assign({}, ...t);
  try {
    localStorage.setItem(v, JSON.stringify({ code: e.code, v: x(e), d: n }));
  } catch {}
  return n;
}
async function E(e) {
  let t = S(e);
  t && (await T(t));
  try {
    t
      ? localStorage.setItem(_, t.code)
      : (localStorage.removeItem(_), localStorage.removeItem(v));
  } catch {}
  location.reload();
}
export { T as i, E as n, C as r, w as t };
