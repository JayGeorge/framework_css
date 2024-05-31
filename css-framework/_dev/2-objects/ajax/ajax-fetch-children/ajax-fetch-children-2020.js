/* GROUP MOLECULES / (NON CORE) / FETCH WITH AJAX { / AJAX} / FETCH CHILDREN
=================================================== */
/* Notes...

    - 2020-09-28 Simplified this, removing some arguments from previous 2019 version. You may still need the 2019 version though
    - Haven't tested the particular example code here

    - Fetch something from another page on click, and append it to an element
    - You _may_ want to noindex/nofollow the archive page used by perch if you _just_ want things fetched with AJAX. The consequence of this is that search engines may not find older articles—although it should find newer ones that are presented on the home/page that pulls in content via AJAX.

    Futher toggling open/shut the AJAX'd content
    --------------------------------------------
    - This function has the extra 'children to fetch' argument (https://stackoverflow.com/questions/57074095/use-the-fetch-api-to-fetch-multiple-elements#57074287). These are optional. If you do just want to grab the container rather than its children, use the simpler FETCH WITH AJAX module from my framework
    This argument should a number e.g.
    data-ajax-children-to-fetch-start="4"
    data-ajax-children-to-fetch-start="8"

*/
/* CSS Example...

    GROUP MOLECULES / (NON CORE) / FETCH WITH AJAX { / AJAX} / ANIMATIONS / TRANSITIONS
    ===================================================
    .js__fetch-with-ajax-on-click svg {
        transition: all 0.2s cubic-bezier(0.55, 0.06, 0.68, 0.19) 0s;
    }

    .js__fetch-with-ajax-on-click[aria-expanded="true"] svg {
        transform: rotate(45deg);
        color: var(--color-black-off);
    }

*/

/* HTML Example...

    Div which AJAX'd content needs to be appended to
    ------------------------------------------------
    <div id="js__fetch-with-ajax-on-click__clients-element-to-fetch" class="c-logo-flex c-logo-flex--neat-logos">

        <div class="c-logo-flex__item">
            img
        </div>
        <div class="c-logo-flex__item">
            img
        </div>
        <div class="c-logo-flex__item">
            etc.
        </div>

        Button to trigger the AJAX load
        -------------------------------
        <div id="target" class="c-logo-flex__item">
            <button class="btn btn--expand btn--plus js__fetchWithAjaxOnClick" 
            data-ajax-page-to-fetch-from="clients" 
            data-ajax-element-to-fetch="#some-element" 
            data-ajax-append-target="#some-element" 
            data-ajax-children-to-fetch-start="14" 
            data-ajax-children-to-fetch-end="40" 
            aria-expanded="false" aria-pressed="false" aria-label="Toggle expanded menu">
                Press me
            </button>
        </div>

    </div>

*/

function fetch_with_ajax(pageToFetchFrom, elementToFetch, childrenToFetchStart, childrenToFetchEnd) {
    fetch(pageToFetchFrom)
    .then(response => response.text())
    .then(text => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(text, "text/html");
        const section = htmlDocument.documentElement.querySelector(elementToFetch);
        Array.from(section.children) // turn node list into array
        .slice(
            childrenToFetchStart,
            childrenToFetchEnd
        ) // get only defined number of children
        .forEach(child => {
            document.querySelector(elementToFetch).appendChild(child);

            // To detect Safari or iOS
            // https://www.denisbouquet.com/javascript-targeting-safari-only/
            var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
            var is_safari = navigator.userAgent.indexOf("Safari") > -1;
            if ((is_chrome)&&(is_safari)) { is_safari = false; }

            if ((navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                // Safari bug - srcset of AJAX'd images will not load unless we Reparse the images. https://stackoverflow.com/questions/45487105/ajax-loaded-images-in-safari-not-respecting-srcset (see the accepted answer)
                /* eslint-disable */
                child.outerHTML = child.outerHTML;
                /* eslint-enable */
            }
        });
    });
}

Array.from(document.querySelectorAll('.js__fetchWithAjaxOnClick')).forEach(element => {
    element.addEventListener('click', function() {
        if (element.getAttribute('aria-expanded') === 'false' ) {
            element.setAttribute('aria-expanded', 'true');
            element.setAttribute('aria-pressed', 'true');
        } else {
            element.setAttribute('aria-expanded', 'false');
            element.setAttribute('aria-pressed', 'false');
        }

        fetch_with_ajax(
            element.dataset.ajaxPageToFetchFrom,
            element.dataset.ajaxElementToFetch,
            element.dataset.ajaxChildrenToFetchStart,
            element.dataset.ajaxChildrenToFetchEnd
        );
    });
});