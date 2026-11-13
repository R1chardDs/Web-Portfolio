/* Apply the saved theme before styles are painted. */
(() => {
  let saved;
  try {
    saved = localStorage.getItem("ra-theme");
  } catch {
    /* Storage is optional. */
  }
  document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
})();
