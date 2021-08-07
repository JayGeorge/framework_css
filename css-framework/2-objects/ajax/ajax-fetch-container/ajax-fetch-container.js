/* GROUP FRAMEWORK / (NON CORE) / FETCH WITH AJAX { / AJAX} / FETCH CONTAINER
=================================================== */
/* Notes...

    NB this fetches a whole container. It is simple.

    - Fetch something from another page on click, and append it to an element
    - Used on Acumen project to fetch more clients for the client list on the homepage

    Futher toggling open/shut the AJAX'd content
    --------------------------------------------
    - You'll need the `.js__u-js-hide` from my CSS framework
    - If you DON'T need to then futher 'toggle open/shut' the AJAX'd content, you can remove the 'else' part of the statement, along with the ARIA manipulation part of the script

*/
/* CSS Example...

    GROUP FRAMEWORK / (NON CORE) / FETCH WITH AJAX { / AJAX} / ANIMATIONS / TRANSITIONS
    ===================================================
    .js__fetchWithAjaxOnClick svg {
        transition: all 0.2s cubic-bezier(0.55, 0.06, 0.68, 0.19) 0s;
    }

    .js__fetchWithAjaxOnClick[aria-expanded="true"] svg {
        transform: rotate(45deg);
        color: var(--colour-black-off);
    }

*/
/* HTML Example...

    Div which AJAX'd content needs to be appended to
    ------------------------------------------------
    <div class="js__fetchWithAjaxOnClick" 
        data-ajax-page-to-fetch-from="clients"
        data-ajax-element-to-fetch="#js__fetchWithAjaxOnClick__clients-fetch-target"
        data-ajax-target="#js__fetchWithAjaxOnClick__clients-append-target
    ">

    Button to trigger the AJAX load
    -------------------------------
    <button class="btn js__fetchWithAjaxOnClick" 
        data-ajax-page-to-fetch-from="clients"
        data-ajax-element-to-fetch="#js__fetchWithAjaxOnClick__clients-fetch-target"
        data-ajax-target="#js__fetchWithAjaxOnClick__clients-append-target"
        aria-expanded="false" aria-pressed="false" aria-label="Toggle expanded menu">
            svg
    </button>

*/
function fetch_with_ajax(page_to_fetch_from, element_to_fetch, target) {
    fetch(page_to_fetch_from)
    .then(response => response.text())
    .then(text => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(text, "text/html");
        const section = htmlDocument.documentElement.querySelector(element_to_fetch);
        // https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
        document.querySelector(target).parentNode.insertBefore(section, target.nextSibling);
        // OR...
        // document.querySelector(target).appendChild(section);
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

        // Only do an AJAX fetch if the content has NOT already been loaded
        if (!element.classList.contains('js__fetchWithAjaxOnClick--js--ajax-has-been-loaded')) {
            element.classList.add('js__fetchWithAjaxOnClick--js--ajax-has-been-loaded');
            fetch_with_ajax(element.dataset.ajaxPageToFetchFrom, element.dataset.ajaxElementToFetch, element.dataset.ajaxTarget);
        } else {
            // Otherwise let's do a toggle. Based on `Atoms / (Non Core) / Toggle Content`
            document.querySelector(element.dataset.ajaxElementToFetch).classList.toggle('js__u-js-hide');
        }
    });
});