var e = (e) =>
    e
      .toLowerCase()
      .normalize(`NFKD`)
      .replace(/[̀-ͯ]/g, ``)
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/(^-|-$)/g, ``),
  t = { "vote_count.gte": `300` },
  n = [
    {
      id: 28,
      name: `Action`,
      blurb: `Fights, chases and set pieces, from Mad Max to RRR.`,
    },
    {
      id: 12,
      name: `Adventure`,
      blurb: `Quests and journeys into the unknown.`,
    },
    {
      id: 16,
      name: `Animation`,
      blurb: `Hand-drawn, CG and boundary-breaking animated films for every age.`,
    },
    { id: 35, name: `Comedy`, blurb: `From slapstick to pitch-black satire.` },
    {
      id: 80,
      name: `Crime`,
      blurb: `Gangsters, detectives and the people in between.`,
    },
    { id: 99, name: `Documentary`, blurb: `Real stories, no actors required.` },
    {
      id: 18,
      name: `Drama`,
      blurb: `Character-driven stories that stay with you.`,
    },
    {
      id: 10751,
      name: `Family`,
      blurb: `Films the whole household can agree on.`,
    },
    { id: 14, name: `Fantasy`, blurb: `Myths, magic and impossible worlds.` },
    {
      id: 36,
      name: `History`,
      blurb: `Real eras and turning points, on screen.`,
    },
    {
      id: 27,
      name: `Horror`,
      blurb: `Dread, monsters and things that go bump.`,
    },
    {
      id: 10402,
      name: `Music`,
      blurb: `Stories driven by rhythm and obsession.`,
    },
    { id: 9648, name: `Mystery`, blurb: `Whodunits, puzzles and secrets.` },
    {
      id: 10749,
      name: `Romance`,
      blurb: `Love stories, happy or heartbreaking.`,
    },
    {
      id: 878,
      name: `Science Fiction`,
      blurb: `Futures, machines, space and big ideas.`,
    },
    {
      id: 53,
      name: `Thriller`,
      blurb: `Suspense that keeps you leaning forward.`,
    },
    {
      id: 10752,
      name: `War`,
      blurb: `Battlefields, and the people who survive them.`,
    },
    {
      id: 37,
      name: `Western`,
      blurb: `Dust, duels and the edge of the frontier.`,
    },
  ].map((t) => ({ ...t, slug: t.id === 878 ? `sci-fi` : e(t.name) }));
new Map(n.map((e) => [e.id, e])), new Map(n.map((e) => [e.slug, e]));
var r = [
  { code: `hi`, name: `Hindi` },
  { code: `ta`, name: `Tamil` },
  { code: `te`, name: `Telugu` },
  { code: `ml`, name: `Malayalam` },
  { code: `kn`, name: `Kannada` },
  { code: `bn`, name: `Bengali` },
  { code: `mr`, name: `Marathi` },
  { code: `en`, name: `English` },
  { code: `ko`, name: `Korean` },
  { code: `ja`, name: `Japanese` },
  { code: `zh`, name: `Chinese` },
  { code: `es`, name: `Spanish` },
  { code: `fr`, name: `French` },
  { code: `de`, name: `German` },
  { code: `it`, name: `Italian` },
].map((t) => ({ ...t, slug: e(t.name) }));
new Map(r.map((e) => [e.slug, e]));
var i = {
    duringCredits: 179431,
    afterCredits: 179430,
    trueStory: 9672,
    twist: 326438,
    timeTravel: 4379,
    dream: 346773,
  },
  a = {
    "mind-bending": {
      label: `Mind-bending`,
      blurb: `Puzzle plots, unreliable reality and endings you will argue about.`,
      hue: `#7c6cf0`,
      query: { with_keywords: `${i.twist}|${i.timeTravel}|${i.dream}` },
    },
    "edge-of-seat": {
      label: `Edge of your seat`,
      blurb: `Tension that doesn’t let go until the credits.`,
      hue: `#e0563b`,
      query: { with_genres: `53`, without_genres: `35` },
    },
    epic: {
      label: `Epic`,
      blurb: `Big screens, big stakes, big feelings.`,
      hue: `#d9a441`,
      query: { with_genres: `12`, "with_runtime.gte": `140` },
    },
    dark: {
      label: `Dark`,
      blurb: `Bleak, morally heavy and unforgettable.`,
      hue: `#8a8f99`,
      query: { with_genres: `80,18`, without_genres: `35,10751` },
    },
    "feel-good": {
      label: `Feel-good`,
      blurb: `You will leave lighter than you arrived.`,
      hue: `#f0b44c`,
      query: { with_genres: `35`, without_genres: `27,53,80` },
    },
    heartwarming: {
      label: `Heartwarming`,
      blurb: `Kindness, family and earned emotion.`,
      hue: `#ef8a6a`,
      query: { with_genres: `10751,18` },
    },
    tearjerker: {
      label: `Tearjerker`,
      blurb: `Keep the tissues close.`,
      hue: `#6aa6e0`,
      query: { with_genres: `18,10749`, without_genres: `35` },
    },
    funny: {
      label: `Funny`,
      blurb: `Laugh-out-loud, even when it gets dark.`,
      hue: `#f2d05a`,
      query: { with_genres: `35`, without_genres: `18` },
    },
    cozy: {
      label: `Cozy`,
      blurb: `Blanket, snacks, rewatchable comfort.`,
      hue: `#c98c5a`,
      query: { with_genres: `16,10751` },
    },
    haunting: {
      label: `Haunting`,
      blurb: `Images and ideas that follow you home.`,
      hue: `#5f8f8a`,
      query: { with_genres: `27,9648` },
    },
    inspiring: {
      label: `Inspiring`,
      blurb: `Underdogs, grit and reasons to keep going.`,
      hue: `#5cbf8a`,
      query: { with_keywords: String(i.trueStory), with_genres: `18` },
    },
    romantic: {
      label: `Romantic`,
      blurb: `Love stories, sweeping or bittersweet.`,
      hue: `#e46c8e`,
      query: { with_genres: `10749` },
    },
    "thought-provoking": {
      label: `Thought-provoking`,
      blurb: `Films that leave you with questions.`,
      hue: `#8fb3c9`,
      query: { with_genres: `878,18` },
    },
    adrenaline: {
      label: `Adrenaline`,
      blurb: `Chases, fights and pure momentum.`,
      hue: `#ff6a3d`,
      query: { with_genres: `28`, without_genres: `16` },
    },
  };
Object.keys(a);
var o = (e) => ({
    ...t,
    "vote_average.gte": `6.5`,
    sort_by: `popularity.desc`,
    ...a[e].query,
  }),
  s = {
    essential: {
      label: `Absolute Cinema`,
      short: `Drop everything and watch it.`,
      cheer: `Absolute cinema. Respect.`,
      tone: `var(--color-verdict-essential)`,
      rank: 4,
    },
    "go-for-it": {
      label: `Worth the Hype`,
      short: `Clear your evening for this.`,
      cheer: `Worth the hype. Noted.`,
      tone: `var(--color-verdict-go)`,
      rank: 3,
    },
    timepass: {
      label: `Popcorn Flick`,
      short: `Fun if you don’t overthink it.`,
      cheer: `Popcorn flick. Fair enough.`,
      tone: `var(--color-verdict-timepass)`,
      rank: 2,
    },
    skip: {
      label: `Snoozefest`,
      short: `Your time is worth more.`,
      cheer: `Snoozefest. Brutal, but honest.`,
      tone: `var(--color-verdict-skip)`,
      rank: 1,
    },
  },
  c = (e, t) =>
    t < 40
      ? null
      : e >= 7.9
      ? `essential`
      : e >= 7
      ? `go-for-it`
      : e >= 6
      ? `timepass`
      : `skip`,
  l = [
    {
      id: 10759,
      name: `Action & Adventure`,
      blurb: `Missions, heists and cliffhangers, episode after episode.`,
    },
    {
      id: 16,
      name: `Animation`,
      blurb: `Animated series for every age, from Arcane to anime.`,
    },
    { id: 35, name: `Comedy`, blurb: `Sitcoms and comedies worth a rewatch.` },
    {
      id: 80,
      name: `Crime`,
      blurb: `Cops, criminals and the cases that hook you.`,
    },
    {
      id: 99,
      name: `Documentary`,
      blurb: `Docuseries on real people, crimes and history.`,
    },
    {
      id: 18,
      name: `Drama`,
      blurb: `Character-driven series that stay with you.`,
    },
    {
      id: 10751,
      name: `Family`,
      blurb: `Shows the whole household can agree on.`,
    },
    { id: 10762, name: `Kids`, blurb: `Safe, fun series for younger viewers.` },
    {
      id: 9648,
      name: `Mystery`,
      blurb: `Whodunits and secrets that unravel across a season.`,
    },
    {
      id: 10764,
      name: `Reality`,
      blurb: `Competitions, dating shows and real lives on camera.`,
    },
    {
      id: 10765,
      name: `Sci-Fi & Fantasy`,
      blurb: `Dragons, spaceships and other worlds.`,
    },
    { id: 10766, name: `Soap`, blurb: `Long-running dramas full of twists.` },
    {
      id: 10767,
      name: `Talk`,
      blurb: `Talk shows, late-night and interviews.`,
    },
    {
      id: 10768,
      name: `War & Politics`,
      blurb: `Power, conflict and the people caught in it.`,
    },
    { id: 37, name: `Western`, blurb: `Frontier stories, told over seasons.` },
  ].map((t) => ({
    ...t,
    slug:
      t.id === 10765
        ? `sci-fi-fantasy`
        : t.id === 10759
        ? `action-adventure`
        : t.id === 10768
        ? `war-politics`
        : e(t.name),
  }));
new Map(l.map((e) => [e.id, e])), new Map(l.map((e) => [e.slug, e]));
function u(e, t) {
  try {
    let n = localStorage.getItem(e);
    return n ? JSON.parse(n) : t;
  } catch {
    return t;
  }
}
function d(e, t) {
  try {
    localStorage.setItem(e, JSON.stringify(t));
  } catch {}
}
var f = (t) => `/tv/${t.id}-${e(t.t) || `show`}`,
  p = (t) => (t.k === `tv` ? f(t) : `/movie/${t.id}-${e(t.t) || `movie`}`),
  m = (e) => (e.k === `tv` ? `tv${e.id}` : String(e.id)),
  h = (t) => `/movies-like/${t.id}-${e(t.t) || `movie`}`,
  g = (t) => `/person/${t.id}-${e(t.name) || `person`}`,
  _ = (e) => e.toLowerCase().normalize(`NFKD`).replace(/[̀-ͯ]/g, ``),
  v = (e) =>
    e.replace(
      /[&<>"']/g,
      (e) =>
        ({
          "&": `&amp;`,
          "<": `&lt;`,
          ">": `&gt;`,
          '"': `&quot;`,
          "'": `&#39;`,
        }[e])
    ),
  y = (e, t = `w342`) =>
    e && /^\/[\w.-]+$/.test(e) ? `https://image.tmdb.org/t/p/${t}${e}` : null,
  b = (e) => (/^(\/(?!\/)|https?:\/\/)/i.test(e) ? e : `#`),
  x = (e) => ({ ...e, o: ``, b: null }),
  S = {
    essential: `essential`,
    "go-for-it": `go`,
    timepass: `timepass`,
    skip: `skip`,
  };
function C(e) {
  let t = c(e.sc, e.vc);
  return t
    ? `<span class="whitespace-nowrap rounded-full px-2.5 py-0.5 text-[0.8125rem] font-semibold" style="color:var(--color-verdict-${
        S[t]
      });background:color-mix(in oklab, var(--color-verdict-${
        S[t]
      }) 16%, transparent)" title="TMDB score ${e.sc.toFixed(1)}/10">${
        s[t].label
      }</span>`
    : `<span class="whitespace-nowrap rounded-full bg-ink-3 px-2.5 py-0.5 text-[0.8125rem] font-semibold text-mute">${
        e.d && e.d > new Date().toISOString().slice(0, 10)
          ? `Coming Soon`
          : `New`
      }</span>`;
}
function w(e, t = !1) {
  let n = y(e.p);
  return `<div data-tilt class="relative aspect-[2/3] overflow-hidden rounded-[var(--radius-card)] bg-ink-3">${
    n
      ? `<img src="${n}" alt="${v(
          e.t
        )} poster" width="342" height="513" loading="${
          t ? `eager` : `lazy`
        }" decoding="async" class="h-full w-full object-cover">`
      : `<span class="absolute inset-0 flex flex-col justify-end p-[9%]"><span class="display text-xl" style="line-height:.92">${v(
          e.t
        )}</span><span class="mt-2 text-[0.8125rem] text-mute">${
          e.y ?? `TBA`
        }</span></span>`
  }</div>`;
}
var T = (e) => `<button type="button" data-watch-toggle="${m(
  e
)}" data-card="${v(
  JSON.stringify(x(e))
)}" aria-pressed="false" aria-label="Add ${v(e.t)} to watchlist"
    class="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-ink/85 text-paper opacity-100 shadow-lg ring-1 ring-white/15 transition hover:bg-amber hover:text-ink aria-pressed:bg-amber aria-pressed:text-ink md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100 md:aria-pressed:opacity-100">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z" /></svg></button>`;
function E(e, t) {
  return `<article class="group relative"><a href="${p(
    e
  )}" class="block" aria-label="${v(e.t)}${e.y ? ` (${e.y})` : ``}">
    ${w(e)}
    <h3 class="mt-3 truncate text-base font-medium transition-colors group-hover:text-amber-2" translate="no">${v(
      e.t
    )}</h3>
    <div class="mt-1 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
      <p class="num text-xs text-mute">${e.k === `tv` ? `TV · ` : ``}${
    e.y ?? `TBA`
  }${e.vc > 0 ? ` · ${e.sc.toFixed(1)}/10` : ``}</p>
      ${C(e)}
    </div>${
      t
        ? `<p class="mt-1.5 line-clamp-2 text-xs text-amber-2/90">${v(t)}</p>`
        : ``
    }</a>${T(e)}</article>`;
}
var D = { results: [], total: 0, pages: 0 },
  O = new Map();
function k(e) {
  return (
    O.has(e) ||
      O.set(
        e,
        fetch(e)
          .then((e) => (e.ok ? e.json() : D))
          .catch(() => (O.delete(e), D))
      ),
    O.get(e)
  );
}
var A = (e, t = 1) =>
    _(e.trim()).length < 2
      ? Promise.resolve({ ...D, enabled: !0 })
      : k(`/api/search?q=${encodeURIComponent(e.trim())}&page=${t}`),
  j = {
    mood: `<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>`,
    map: `<circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="6" r="1.8"/><circle cx="19" cy="7" r="1.8"/><circle cx="17" cy="19" r="1.8"/><path d="m6.5 7 3.8 3.4M17.4 8l-3.6 2.6M13.6 14l2.5 3.4"/>`,
    like: `<path d="M4 6h10v14H4zM10 3h10v14"/>`,
    pick: `<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01M15 15h.01M12 12h.01"/>`,
    blend: `<circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>`,
    party: `<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2.5 19a5.5 5.5 0 0 1 11 0M10.5 19a5.5 5.5 0 0 1 11 0"/>`,
    list: `<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>`,
    discover: `<path d="M4 6h16M7 12h10M10 18h4"/>`,
    tv: `<rect x="3" y="6" width="18" height="12" rx="2"/><path d="m9 2 3 4 3-4"/>`,
    ott: `<polygon points="9 7 18 12 9 17 9 7"/><rect x="3" y="3" width="18" height="18" rx="3"/>`,
    credits: `<path d="M4 4h16v16H4zM8 9h8M8 13h8M8 17h5"/>`,
    soon: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
  },
  M = (e, t = `h-11 w-11`) =>
    `<span class="flex ${t} shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${
      j[e] ?? j.discover
    }</svg></span>`;
function N(e) {
  return e.length
    ? `<p class="text-xs font-semibold uppercase tracking-wide text-amber-2">Keep exploring</p>
    <p class="mt-1 text-sm text-mute">Go deeper on what you asked:</p>
    <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">${e
      .map(
        (e) => `<li><a href="${v(
          b(e.href)
        )}" class="group flex h-full items-center gap-3 rounded-[var(--radius-card)] bg-ink-2 p-3.5 shadow-[var(--shadow-card)] transition-colors hover:bg-ink-3">
      ${M(
        e.icon
      )}<span class="min-w-0 flex-1"><span class="block font-medium text-paper">${v(
          e.label
        )}</span><span class="mt-0.5 block text-sm text-mute">${v(
          e.note
        )}</span></span>
      <span class="text-mute transition-transform group-hover:translate-x-1 group-hover:text-amber-2" aria-hidden="true">→</span></a></li>`
      )
      .join(``)}</ul>`
    : ``;
}
var P = (e, t = 1, n = !1) =>
  _(e.trim()).length < 2
    ? Promise.resolve({ ...D, enabled: !0 })
    : k(
        `/api/ask?q=${encodeURIComponent(e.trim())}&page=${t}${
          n ? `&ai=1` : ``
        }`
      );
function F(e, t = !1) {
  let n = e.film?.p ?? e.person?.photo ?? null,
    r = e.film ? p(e.film) : e.person ? g(e.person) : null,
    i =
      n && r
        ? `<a href="${r}" class="${
            t ? `w-20 md:w-24` : `w-14`
          } shrink-0 self-start overflow-hidden rounded-md bg-ink-3" tabindex="-1" aria-hidden="true"><img src="${y(
            n,
            `w185`
          )}" alt="" width="96" height="144" loading="lazy" class="block aspect-[2/3] w-full object-cover"></a>`
        : ``,
    a = (e.text ?? ``)
      .split(
        `
`
      )
      .filter(Boolean);
  return `<div class="flex gap-4 rounded-[var(--radius-card)] bg-amber/10 p-4 ring-1 ring-amber/25 ${
    t ? `md:p-6` : ``
  }">${i}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-semibold uppercase tracking-wide text-amber-2">Answer</p>
      <p class="mt-1 ${
        t ? `text-xl md:text-2xl` : `text-base`
      } font-medium leading-snug text-paper">${v(e.title)}</p>
      ${a
        .map(
          (e, n) =>
            `<p class="mt-1.5 text-sm text-paper/75 ${
              n === a.length - 1 && !t ? `line-clamp-3` : ``
            }">${v(e)}</p>`
        )
        .join(``)}
      ${
        e.links.length
          ? `<div class="mt-3 flex flex-wrap gap-2">${e.links
              .map(
                (e) =>
                  `<a href="${v(b(e.href))}" class="chip text-xs"${
                    /^https?:/.test(e.href)
                      ? ` target="_blank" rel="noopener"`
                      : ``
                  }>${v(e.label)}</a>`
              )
              .join(``)}</div>`
          : ``
      }
    </div></div>`;
}
var I = (e, t = 1) =>
  k(`/api/discover?${new URLSearchParams({ ...e, page: String(t) })}`);
function L(e) {
  let t = new Map([e.center, ...e.ring1].map((e) => [e.id, e.t]));
  return `<section aria-labelledby="ring1-h"><h2 id="ring1-h" class="display text-4xl md:text-5xl">Closest to ${v(
    e.center.t
  )}</h2>
    <div class="poster-grid mt-8">${e.ring1
      .map((e) => E(e, e.why))
      .join(``)}</div></section>
    ${
      e.ring2.length
        ? `<section class="mt-20" aria-labelledby="ring2-h"><h2 id="ring2-h" class="display text-4xl md:text-5xl">One step further</h2>
    <div class="poster-grid mt-8">${e.ring2
      .map((e) =>
        E(
          e,
          `Via ${e.from
            .map((e) => t.get(e))
            .filter(Boolean)
            .slice(0, 2)
            .join(` and `)}`
        )
      )
      .join(``)}</div></section>`
        : ``
    }`;
}
var R = (t) => `/movie-map/${t.id}-${e(t.t) || `movie`}`,
  z = (e) => `
  <div class="group w-28 shrink-0 min-[400px]:w-40 lg:w-full">${w(e, !0)}</div>
  <div class="min-w-0">
    <p class="text-sm text-mute">In the middle</p>
    <h2 class="display mt-1 text-4xl">${v(e.t)}</h2>
    <div class="mt-3 flex flex-wrap items-center gap-3"><span class="num text-mute">${
      e.y ?? `TBA`
    }${e.vc > 0 ? ` · ${e.sc.toFixed(1)}/10` : ``}</span>${C(e)}</div>
    <p class="mt-4 line-clamp-4 text-paper/85">${v(e.o)}</p>
    <div class="mt-6 flex flex-wrap gap-2">
      <a href="${p(e)}" class="btn btn-primary">Open Film</a>
      <a href="${h(e)}" class="btn btn-ghost">Movies Like This</a>
    </div>
  </div>`;
export {
  T as C,
  c as D,
  o as E,
  f as S,
  i as T,
  w as _,
  m as a,
  A as b,
  N as c,
  x as d,
  z as f,
  g,
  p as h,
  E as i,
  M as l,
  R as m,
  P as n,
  I as o,
  L as p,
  C as r,
  v as s,
  F as t,
  h as u,
  u as v,
  d as w,
  y as x,
  b as y,
};
