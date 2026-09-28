(() => {
  const homeUrl = new URL("../index.html", window.location.href).href;
  const button = document.createElement("a");

  button.className = "article-home-button";
  button.href = homeUrl;
  button.setAttribute("aria-label", "Return to the guideline library home page");
  button.innerHTML = '<span aria-hidden="true">⌂</span><span>Home</span>';

  const style = document.createElement("style");
  style.textContent = `
    .article-home-button {
      position: fixed;
      z-index: 1000;
      right: 20px;
      bottom: 20px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 44px;
      padding: 0 15px;
      border: 1px solid rgba(255,255,255,.26);
      border-radius: 999px;
      background: #155e52;
      color: #fff !important;
      box-shadow: 0 8px 24px rgba(0,0,0,.25);
      font: 700 14px/1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      letter-spacing: .01em;
      text-decoration: none !important;
      transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
    }
    .article-home-button:hover,
    .article-home-button:focus-visible {
      background: #0f4a40;
      color: #fff !important;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(0,0,0,.3);
    }
    .article-home-button:focus-visible { outline: 3px solid #f5c451; outline-offset: 3px; }
    .article-home-button span[aria-hidden="true"] { font-size: 18px; line-height: 1; }
    @media (max-width: 560px) {
      .article-home-button { right: 14px; bottom: 14px; min-height: 42px; padding: 0 13px; }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(button);
})();
