var e = document.querySelector(`[data-ask-hint]`),
  t = [
    `Ask anything about any movie`,
    `Who directed Jawan?`,
    `Is Dune on Netflix?`,
    `90s Tamil thrillers`,
    `Movies like Interstellar`,
    `How long is Oppenheimer?`,
    `Feel-good films under 2 hours`,
    `Who played Joker in The Dark Knight?`,
    `Harry Potter watch order`,
    `I’m bored`,
  ];
if (e && !matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
  let n = 0;
  setInterval(() => {
    document.hidden ||
      ((n = (n + 1) % t.length),
      (e.animate(
        [
          { opacity: 1, transform: `none` },
          { opacity: 0, transform: `translateY(-6px)` },
        ],
        { duration: 180, easing: `ease-in` }
      ).onfinish = () => {
        (e.textContent = t[n]),
          e.animate(
            [
              { opacity: 0, transform: `translateY(6px)` },
              { opacity: 1, transform: `none` },
            ],
            { duration: 220, easing: `ease-out` }
          );
      }));
  }, 2800);
}
