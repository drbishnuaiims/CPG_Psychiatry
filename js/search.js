/*
  SIMPLE CPG SEARCH

  Add each new guideline here.
  This is intentionally manual and simple.

  Example:
  {
    title: "Bipolar Disorder",
    description: "Short description.",
    category: "Mood Disorders",
    year: "2026",
    url: "cpg/bipolar-disorder.html"
  }
*/

const CPG_ARTICLES = [
  {
    title: "Schizophrenia",
    description: "Clinical practice guideline notes on assessment, diagnosis and management of schizophrenia.",
    category: "Psychotic Disorders",
    year: "2026",
    url: "cpg/schizophrenia.html"
  }
  
];

const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const count = document.getElementById("resultsCount");
const form = document.getElementById("searchForm");

function renderResults(query = "") {
  const q = query.trim().toLowerCase();

  const matches = CPG_ARTICLES.filter(article => {
    const text = [
      article.title,
      article.description,
      article.category,
      article.year
    ].join(" ").toLowerCase();

    return !q || text.includes(q);
  });

  count.textContent =
    `${matches.length} result${matches.length === 1 ? "" : "s"}`;

  if (!matches.length) {
    results.innerHTML =
      `<div class="empty">No guideline found for “${escapeHtml(query)}”.</div>`;
    return;
  }

  results.innerHTML = matches.map(article => `
    <a class="result" href="${article.url}">
      <h2>${escapeHtml(article.title)}</h2>
      <p>${escapeHtml(article.description)}</p>
      <div class="result-meta">
        ${escapeHtml(article.category)} · ${escapeHtml(article.year)}
      </div>
    </a>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const params = new URLSearchParams(window.location.search);
const initialQuery = params.get("q") || "";

input.value = initialQuery;
renderResults(initialQuery);

function updateSearch() {
  const value = input.value;
  const url = new URL(window.location.href);

  if (value.trim()) {
    url.searchParams.set("q", value);
  } else {
    url.searchParams.delete("q");
  }

  history.replaceState({}, "", url);
  renderResults(value);
}

input.addEventListener("input", updateSearch);

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    updateSearch();
  });
}
