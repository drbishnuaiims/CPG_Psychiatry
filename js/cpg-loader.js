/* =========================================================
   PSYCHIATRY CPG NOTES
   cpg-loader.js

   Purpose:
   Loads metadata for an individual CPG page from cpg-data.js.

   Required on each CPG page:
   <body data-cpg-id="schizophrenia">

   Required script order:
   <script src="../js/cpg-data.js"></script>
   <script src="../js/cpg-loader.js"></script>
========================================================= */

(function () {
    "use strict";

    /* =====================================================
       1. FIND CURRENT CPG PAGE
    ===================================================== */

    const page = document.querySelector("[data-cpg-id]");

    if (!page) {
        console.warn(
            "CPG Loader: No element with data-cpg-id was found."
        );
        return;
    }

    const cpgId = page.dataset.cpgId?.trim();

    if (!cpgId) {
        console.warn(
            "CPG Loader: data-cpg-id is empty."
        );
        return;
    }


    /* =====================================================
       2. CHECK CENTRAL DATABASE
    ===================================================== */

    if (
        typeof CPG_DATABASE === "undefined" ||
        !Array.isArray(CPG_DATABASE)
    ) {
        console.error(
            "CPG Loader: CPG_DATABASE is unavailable. " +
            "Make sure ../js/cpg-data.js is loaded before cpg-loader.js."
        );
        return;
    }


    /* =====================================================
       3. FIND MATCHING CPG
    ===================================================== */

    const cpg = CPG_DATABASE.find(
        item => item.id === cpgId
    );

    if (!cpg) {
        console.error(
            `CPG Loader: No database entry found for "${cpgId}".`
        );

        page.setAttribute("data-cpg-loaded", "error");
        return;
    }


    /* =====================================================
       4. HELPER FUNCTIONS
    ===================================================== */

    function setText(selector, value, fallback = "—") {
        const finalValue =
            value !== undefined &&
            value !== null &&
            String(value).trim() !== ""
                ? String(value)
                : fallback;

        document.querySelectorAll(selector).forEach(element => {
            element.textContent = finalValue;
        });
    }


    function setOptionalText(selector, value) {
        if (
            value === undefined ||
            value === null ||
            String(value).trim() === ""
        ) {
            return;
        }

        document.querySelectorAll(selector).forEach(element => {
            element.textContent = String(value);
        });
    }


    function getOrganization() {
        return (
            cpg.organization ||
            cpg.source ||
            cpg.guidelineSource ||
            ""
        );
    }


    function getDisorder() {
        return (
            cpg.disorder ||
            cpg.subcategory ||
            cpg.title ||
            ""
        );
    }


    function getLastUpdated() {
        return (
            cpg.updated ||
            cpg.lastUpdated ||
            cpg.last_updated ||
            ""
        );
    }


    function getKeywords() {
        if (Array.isArray(cpg.keywords)) {
            return cpg.keywords;
        }

        if (Array.isArray(cpg.tags)) {
            return cpg.tags;
        }

        return [];
    }


    /* =====================================================
       5. BROWSER / DOCUMENT METADATA
    ===================================================== */

    if (cpg.title) {
        document.title =
            `${cpg.title} | Psychiatry CPG Notes`;
    }


    const metaDescription =
        document.querySelector('meta[name="description"]');

    if (metaDescription && cpg.description) {
        metaDescription.setAttribute(
            "content",
            cpg.description
        );
    }


    /* =====================================================
       6. MAIN CPG HEADER
    ===================================================== */

    setText(
        "[data-cpg-title]",
        cpg.title
    );

    setText(
        "[data-cpg-description]",
        cpg.description
    );

    setText(
        "[data-cpg-category]",
        cpg.category
    );

    setText(
        "[data-cpg-subcategory]",
        cpg.subcategory
    );

    setText(
        "[data-cpg-disorder]",
        getDisorder()
    );

    setText(
        "[data-cpg-year]",
        cpg.year
    );

    setText(
        "[data-cpg-population]",
        cpg.population
    );


    /* =====================================================
       7. GUIDELINE SOURCE / ORGANIZATION
    ===================================================== */

    const organization = getOrganization();

    setText(
        "[data-cpg-organization]",
        organization
    );

    setText(
        "[data-cpg-source]",
        organization
    );


    /* =====================================================
       8. LAST UPDATED
    ===================================================== */

    setText(
        "[data-cpg-updated]",
        getLastUpdated()
    );


    /* =====================================================
       9. CLINICAL SUMMARY CARD
    ===================================================== */

    setText(
        "[data-cpg-summary-population]",
        cpg.population
    );

    setText(
        "[data-cpg-summary-source]",
        organization
    );

    setOptionalText(
        "[data-cpg-clinical-question]",
        cpg.clinicalQuestion
    );


    /* =====================================================
       10. BREADCRUMBS
    ===================================================== */

    setText(
        "[data-cpg-breadcrumb]",
        cpg.title
    );

    setText(
        "[data-cpg-category-breadcrumb]",
        cpg.category
    );


    /* =====================================================
       11. KEYWORDS / TAGS
    ===================================================== */

    const keywordContainers =
        document.querySelectorAll("[data-cpg-keywords]");

    const keywords = getKeywords();

    keywordContainers.forEach(container => {

        container.innerHTML = "";

        keywords.forEach(keyword => {

            const tag = document.createElement("span");

            tag.className = "cpg-keyword";
            tag.textContent = keyword;

            container.appendChild(tag);
        });

    });


    /* =====================================================
       12. OPTIONAL BACK-TO-LIBRARY LINKS
    ===================================================== */

    document
        .querySelectorAll("[data-cpg-back]")
        .forEach(link => {

            const query =
                encodeURIComponent(cpg.title || "");

            link.href =
                `../search.html?q=${query}`;

        });


    /* =====================================================
       13. OPTIONAL CANONICAL PAGE URL
    ===================================================== */

    document
        .querySelectorAll("[data-cpg-url]")
        .forEach(link => {

            if (cpg.url) {
                link.href = `../${cpg.url}`;
            }

        });


    /* =====================================================
       14. STORE CURRENT CPG FOR OTHER SCRIPTS
    ===================================================== */

    window.CURRENT_CPG = cpg;


    /* =====================================================
       15. MARK PAGE AS SUCCESSFULLY LOADED
    ===================================================== */

    page.setAttribute(
        "data-cpg-loaded",
        "true"
    );

    page.setAttribute(
        "data-cpg-title-value",
        cpg.title || ""
    );


    /* =====================================================
       16. ANNOUNCE THAT CPG DATA IS READY
    ===================================================== */

    document.dispatchEvent(
        new CustomEvent("cpg:loaded", {
            detail: cpg
        })
    );


    /* =====================================================
       17. DEVELOPMENT LOG
    ===================================================== */

    console.log(
        `CPG Loader: "${cpg.title}" loaded successfully.`
    );

})();