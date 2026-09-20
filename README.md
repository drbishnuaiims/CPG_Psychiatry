# Psychiatry CPG Notes

Simple GitHub Pages website for a searchable collection of psychiatry clinical practice guidelines.

## How to add a new CPG

1. Ask your AI tool to create a complete HTML page from the guideline PDF.
2. Save the file directly in this repository, for example:
   `schizophrenia-cpg.html`
3. Push/commit it to GitHub.
4. The homepage automatically discovers the new `.html` file and shows it as a card.
5. No changes to `index.html` are required.

## Important

The homepage currently treats every HTML file except:
- index.html
- 404.html
- about.html
- contact.html

as a CPG/resource page.

Change the GitHub username/repository/branch at the top of `index.html` if needed.

## SEO

- `index.html` has title, description, canonical and Open Graph metadata.
- `robots.txt` allows crawling.
- `sitemap.xml` is included.
- `.github/workflows/update-sitemap.yml` automatically regenerates the sitemap whenever a new HTML page is pushed.

The CPG pages themselves should also contain a unique `<title>`, meta description, canonical URL, and useful headings.
