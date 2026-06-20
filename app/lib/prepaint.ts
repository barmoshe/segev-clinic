// No-FOUC pre-paint snippet (verbatim behavior from the house web-starter
// prepaint.html). Inlined in the root layout <head> BEFORE the stylesheets so
// theme + a11y prefs apply synchronously and the first paint is correct.
//
// Storage keys (keep in lockstep with any client that writes them):
//   bm:theme       "auto" | "light" | "dark"   (default auto)
//   bm:contrast    "" | "more"
//   bm:text-scale  number as string, e.g. "1.15"

export const PREPAINT_SCRIPT = `(function () {
  try {
    var d = document.documentElement;
    var theme = localStorage.getItem("bm:theme") || "auto";
    var dark = theme === "dark" ||
      (theme === "auto" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    d.classList.toggle("dark", dark);

    var contrast = localStorage.getItem("bm:contrast");
    if (contrast) d.dataset.contrast = contrast;

    var scale = parseFloat(localStorage.getItem("bm:text-scale"));
    if (scale && scale > 0) d.style.setProperty("--text-scale", String(scale));
  } catch (e) { /* storage blocked: fall through to light defaults */ }
})();`;
