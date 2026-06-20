// No-FOUC pre-paint snippet. Inlined in the root layout <head> BEFORE the
// stylesheets so theme + a11y prefs + language/direction apply synchronously and
// the first paint is correct (no theme flash, no LTR->RTL jump).
//
// Storage keys (keep in lockstep with any client that writes them):
//   clinic:lang    "en" | "he"                  (default "en")
//   bm:theme       "auto" | "light" | "dark"    (default auto)
//   bm:contrast    "" | "more"
//   bm:text-scale  number as string, e.g. "1.15"
//
// The resolved language is exposed on window.__clinicLang so the React
// LangProvider can reconcile its state to it after hydration without a flash.

declare global {
  interface Window {
    __clinicLang?: "en" | "he";
  }
}

export const PREPAINT_SCRIPT = `(function () {
  try {
    var d = document.documentElement;

    var lang = localStorage.getItem("clinic:lang");
    if (lang !== "en" && lang !== "he") lang = "en";
    d.lang = lang;
    d.dir = lang === "he" ? "rtl" : "ltr";
    window.__clinicLang = lang;

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
  } catch (e) { /* storage blocked: fall through to en + light defaults */ }
})();`;
