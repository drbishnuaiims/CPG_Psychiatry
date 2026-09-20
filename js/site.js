(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const topButton = document.getElementById("backToTop");

  const savedTheme = localStorage.getItem("cpg-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.textContent = theme === "dark" ? "☀ Light" : "☾ Dark";
      toggle.setAttribute("aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  applyTheme(savedTheme || (systemDark ? "dark" : "light"));

  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("cpg-theme", next);
      applyTheme(next);
    });
  }

  function updateTopButton() {
    if (!topButton) return;
    topButton.classList.toggle("visible", window.scrollY > 400);
  }

  window.addEventListener("scroll", updateTopButton, { passive: true });
  updateTopButton();

  if (topButton) {
    topButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
