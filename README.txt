PSYCHIATRY CPG NOTES — SIMPLE STATIC SITE

1. Upload the contents of this folder to GitHub Pages, Netlify, Cloudflare Pages, etc.
2. Replace https://drbishnuaiims.github.io/cpg_psychiatry in:
   - index.html
   - each cpg/*.html
   - sitemap.xml
   - robots.txt
3. To add a new guideline:
   A. Create a new HTML file inside /cpg/, e.g. lithium-monitoring.html.
   B. Use any AI tool to convert your guideline PDF into a complete HTML article.
   C. Keep the same structure and link ../assets/article.css and ../assets/article.js.
   D. Add ONE object to data/guidelines.js with title/category/description/tags/url/readTime.
   E. Add the URL to sitemap.xml.
4. The homepage search searches title, category, description and tags.
5. Day/night preference is stored in localStorage.
6. Every CPG page has title, meta description, canonical URL, Open Graph metadata and Article JSON-LD.
7. Replace the demo/starter CPG text with source-faithful content before publishing.

Suggested AI prompt for each PDF:
"Convert this clinical practice guideline PDF into a single, self-contained SEO-ready HTML article. Preserve the source's recommendations accurately. Use the existing article.css/article.js design, semantic H1/H2/H3 structure, concise tables/callouts where useful, internal anchor navigation, source citation, and no invented recommendations. Return only the HTML body/page code."
