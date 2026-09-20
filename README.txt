# Psychiatry CPG Notes — Simple Static Website

## Structure

index.html
styles.css
script.js
robots.txt
sitemap.xml
cpg/
  example-guideline.html

## Add a new guideline

1. Copy `cpg/example-guideline.html`.
2. Rename it, e.g. `schizophrenia.html`.
3. Ask your AI tool to convert the guideline PDF into a complete HTML article.
4. Paste the generated article into the new HTML file.
5. Change the title, description, canonical URL, source and year.
6. Add one compact card to `index.html`.
7. Add the new URL to `sitemap.xml`.

## Important

Replace every occurrence of:

https://drbishnuaiims.github.io/CPG_Psychiatry/

with your actual website domain.

The search is intentionally simple: it searches the guideline cards already present on `index.html`. No database or backend is required.

The day/night preference is saved in the browser.

For Google Search Console, submit:

https://drbishnuaiims.github.io/CPG_Psychiatry/sitemap.xml
