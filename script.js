const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchStatus = document.getElementById("searchStatus");
const cards = Array.from(document.querySelectorAll(".guideline-card"));
const noResults = document.getElementById("noResults");
const guidelineCount = document.getElementById("guidelineCount");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const backToTop = document.getElementById("backToTop");

function updateCount(visible) {
  guidelineCount.textContent = `${visible} guideline${visible === 1 ? "" : "s"}`;
}

function searchGuidelines() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach(card => {
    const searchableText = [
      card.dataset.title || "",
      card.dataset.tags || "",
      card.textContent || ""
    ].join(" ").toLowerCase();

    const match = !query || searchableText.includes(query);

    card.hidden = !match;
    if (match) visible++;
  });

  updateCount(visible);

  if (query) {
    clearSearch.style.display = "block";
    searchStatus.textContent =
      `${visible} result${visible === 1 ? "" : "s"} for “${query}”`;
  } else {
    clearSearch.style.display = "none";
    searchStatus.textContent = "";
  }

  noResults.hidden = visible !== 0;
}

searchInput.addEventListener("input", searchGuidelines);

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchGuidelines();
  searchInput.focus();
});

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("cpg-theme", theme);

  const dark = theme === "dark";
  themeIcon.textContent = dark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Switch to day mode" : "Switch to night mode"
  );
}

const savedTheme = localStorage.getItem("cpg-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (preferredDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  setTheme(current === "dark" ? "light" : "dark");
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 400);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updateCount(cards.length);
