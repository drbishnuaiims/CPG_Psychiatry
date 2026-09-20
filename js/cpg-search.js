/*
=========================================================
PSYCHIATRY CPG NOTES
Search & Rendering Engine

Depends on:

    cpg-data.js

=========================================================
*/


/* =========================================================
   UTILITY
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}



/* =========================================================
   HIGHLIGHT SEARCH TERM
========================================================= */

function highlightText(
    text,
    query
) {

    if (!query) {

        return escapeHTML(text);

    }


    const escaped =
        escapeHTML(text);


    const escapedQuery =
        query
            .replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );


    return escaped.replace(

        new RegExp(
            `(${escapedQuery})`,
            "gi"
        ),

        "<mark>$1</mark>"

    );

}



/* =========================================================
   CREATE CPG CARD
========================================================= */

function createCPGCard(
    cpg,
    query = ""
) {

    return `

        <a
            href="${escapeHTML(cpg.url)}"
            class="cpg-card"
            data-cpg-id="${escapeHTML(cpg.id)}"
        >

            <div class="cpg-card-top">

                <span class="cpg-category">

                    ${escapeHTML(
                        cpg.category
                    )}

                </span>

                <span class="cpg-year">

                    ${escapeHTML(
                        cpg.year
                    )}

                </span>

            </div>


            <h3 class="cpg-card-title">

                ${highlightText(
                    cpg.title,
                    query
                )}

            </h3>


            <p class="cpg-card-description">

                ${highlightText(
                    cpg.description,
                    query
                )}

            </p>


            <div class="cpg-card-bottom">

                <span>

                    ${escapeHTML(
                        cpg.population
                    )}

                </span>


                <span class="cpg-card-arrow">

                    →

                </span>

            </div>

        </a>

    `;

}



/* =========================================================
   RENDER CPG COLLECTION
========================================================= */

function renderCPGs(
    cpgs,
    container,
    query = ""
) {

    if (!container) {

        return;

    }


    if (!cpgs.length) {

        container.innerHTML = `

            <div class="cpg-empty-state">

                <div class="empty-icon">
                    ×
                </div>

                <h3>
                    No guidelines found
                </h3>

                <p>
                    Try another disorder,
                    symptom, treatment or
                    clinical keyword.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        cpgs
            .map(
                cpg =>
                    createCPGCard(
                        cpg,
                        query
                    )
            )
            .join("");

}



/* =========================================================
   INITIALIZE HOMEPAGE
========================================================= */

function initializeCPGHomepage() {

    const container =
        document.getElementById(
            "cpgLibrary"
        );


    if (!container) {

        return;

    }


    const featured =
        getFeaturedCPGs();


    renderCPGs(
        featured,
        container
    );

}



/* =========================================================
   INITIALIZE SEARCH PAGE
========================================================= */

function initializeCPGSearchPage() {

    const container =
        document.getElementById(
            "searchResults"
        );


    const input =
        document.getElementById(
            "cpgSearchInput"
        );


    const resultCount =
        document.getElementById(
            "resultCount"
        );


    if (
        !container ||
        !input
    ) {

        return;

    }


    /*
    ---------------------------------------------------------
    READ QUERY FROM URL
    ---------------------------------------------------------
    */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const initialQuery =
        params.get("q") || "";


    input.value =
        initialQuery;


    /*
    ---------------------------------------------------------
    RUN SEARCH
    ---------------------------------------------------------
    */

    function performSearch(
        query
    ) {

        const results =
            searchCPGs(query);


        renderCPGs(
            results,
            container,
            query
        );


        if (resultCount) {

            resultCount.textContent =
                `${results.length} guideline${
                    results.length === 1
                        ? ""
                        : "s"
                } found`;

        }


        /*
        Keep URL synchronized
        */

        const newURL =
            new URL(
                window.location
            );


        if (query) {

            newURL.searchParams.set(
                "q",
                query
            );

        } else {

            newURL.searchParams.delete(
                "q"
            );

        }


        history.replaceState(
            {},
            "",
            newURL
        );

    }


    /*
    ---------------------------------------------------------
    INPUT EVENT
    ---------------------------------------------------------
    */

    input.addEventListener(
        "input",
        () => {

            performSearch(
                input.value
            );

        }
    );


    /*
    ---------------------------------------------------------
    INITIAL SEARCH
    ---------------------------------------------------------
    */

    performSearch(
        initialQuery
    );

}



/* =========================================================
   HOMEPAGE SEARCH BAR
========================================================= */

function initializeHomepageSearch() {

    const input =
        document.getElementById(
            "homepageSearchInput"
        );


    const form =
        document.getElementById(
            "homepageSearchForm"
        );


    if (
        !input ||
        !form
    ) {

        return;

    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const query =
                input.value.trim();


            if (!query) {

                window.location.href =
                    "search.html";

                return;

            }


            window.location.href =
                `search.html?q=${encodeURIComponent(
                    query
                )}`;

        }
    );

}



/* =========================================================
   GLOBAL INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeCPGHomepage();

        initializeCPGSearchPage();

        initializeHomepageSearch();

    }
);