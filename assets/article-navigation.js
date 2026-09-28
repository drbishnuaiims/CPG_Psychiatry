(() => {
  const homeUrl = new URL("../index.html", window.location.href).href;
  const button = document.createElement("a");

  button.className = "article-home-button";
  button.href = homeUrl;
  button.setAttribute("aria-label", "Back to the guideline library");
  button.title = "Back to library";
  button.innerHTML = '<span aria-hidden="true">←</span>';

  const style = document.createElement("style");
  style.textContent = `
    .article-home-button {
      position: fixed;
      z-index: 1000;
      right: 20px;
      bottom: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      border: 1px solid #aeb4bb;
      border-radius: 50%;
      background: #6b7280;
      color: #fff !important;
      box-shadow: 0 8px 24px rgba(0,0,0,.25);
      font: 700 25px/1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      letter-spacing: .01em;
      text-decoration: none !important;
      transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
    }
    .article-home-button:hover,
    .article-home-button:focus-visible {
      background: #4b5563;
      color: #fff !important;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(0,0,0,.3);
    }
    .article-home-button:focus-visible { outline: 3px solid #f5c451; outline-offset: 3px; }
    .article-home-button span[aria-hidden="true"] { line-height: 1; transform: translateY(-1px); }
    @media (max-width: 560px) {
      .article-home-button { right: 14px; bottom: 14px; width: 44px; height: 44px; }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(button);
})();
