/* Light is the new default. Explicit choices persist in the v2 preference. */
(() => {
  let saved;
  try {
    saved = localStorage.getItem("ra-theme-v2");
  } catch {
    /* Storage is optional. */
  }
  document.documentElement.dataset.theme = saved === "dark" ? "dark" : "light";
})();
