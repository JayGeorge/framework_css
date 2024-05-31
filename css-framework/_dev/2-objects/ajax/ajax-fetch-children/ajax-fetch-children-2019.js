/* GROUP MOLECULES / (NON CORE) / FETCH WITH AJAX { / AJAX} / FETCH CHILDREN
=================================================== */
/* Notes...

    - Fetch something from another page on click, and append it to an element
    - Used on Acumen project to fetch more clients for the client list on the homepage
    - You _may_ want to noindex/nofollow the archive page used by perch if you _just_ want things fetched with AJAX. The consequence of this is that search engines may not find older articles—although it should find newer ones that are presented on the home/page that pulls in content via AJAX.

    Futher toggling open/shut the AJAX'd content
    --------------------------------------------
    - You'll need the `.js__u-js-hide` from my CSS framework
    - If you DON'T need to then futher 'toggle open/shut' the AJAX'd content, you can remove the 'else' part of the statement, along with the ARIA manipulation part of the script
    - This function has the extra 'children to fetch' argument (https://stackoverflow.com/questions/57074095/use-the-fetch-api-to-fetch-multiple-elements#57074287). These are optional. If you do just want to grab the container rather than its children, use the simpler FETCH WITH AJAX module from my framework
    This argument should a number e.g.
    data-ajax-children-to-fetch-start="4"
    data-ajax-children-to-fetch-start="8"

    - I've also added an 'extra html' argument, which you can use to append something like an 'archive' button once you've AJAX'd in extra content

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

/* Perch Example...

    Start with the page you want to call stuff into e.g. home.php
    1. Call a collection of perch_content_custom, passing a data variable of `ajax_button => 'yes'`

    e.g.
    <?php perch_collection('Projects', [
        'template'  => 'feature_grid_thumbnails.html',
        'count'     => 5,
        'data'      => [
            'ajax_button' => 'yes'
        ],
    ]); ?>

    2. In the template you've called (in this case `feature_grid_thumbnails.html`), in the `<perch:before>` part, add an ID to specify the AJAX fetch target, like this:
    <perch:before>
        <div id="js__fetch-with-ajax-on-click__clients-element-to-fetch" class="c-logo-flex c-logo-flex--neat-logos">
    </perch:before>

    3. In the `<perch:after>` part of the same template, add an AJAX button, like this:
    <perch:after>
        <!--* ajax_button is passed as a variable using `data` when calling 'Clients' from the homepage *-->
        <perch:if exists="ajax_button">
            <div id="js__fetch-with-ajax-on-click__clients-append-target" class="c-logo-flex__item">
                <button class="btn btn--expand btn--plus js__fetch-with-ajax-on-click" 
                data-ajax-page-to-fetch-from="clients" 
                data-ajax-element-to-fetch="#js__fetch-with-ajax-on-click__clients-element-to-fetch" 
                data-ajax-append-target="#js__fetch-with-ajax-on-click__clients-append-target" 
                data-ajax-children-to-fetch-start="14" 
                data-ajax-children-to-fetch-end="40" 
                aria-expanded="false" aria-pressed="false" aria-label="Toggle expanded menu">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path id="backwards" d="M46 14v40h40v-8H54V14h-8z" fill-rule="nonzero"></path><path id="forwards" d="M54 86V46H14v8h32v32h8z" fill-rule="nonzero"></path></svg>
                </button>
            </div>
        </perch:if>
    </perch:after>

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
        <div id="js__fetch-with-ajax-on-click__clients-append-target" class="c-logo-flex__item">
            <button class="btn btn--expand btn--plus js__fetch-with-ajax-on-click" 
            data-ajax-page-to-fetch-from="clients" 
            data-ajax-element-to-fetch="#js__fetch-with-ajax-on-click__clients-element-to-fetch" 
            data-ajax-append-target="#js__fetch-with-ajax-on-click__clients-append-target" 
            data-ajax-children-to-fetch-start="14" 
            data-ajax-children-to-fetch-end="40" 
            aria-expanded="false" aria-pressed="false" aria-label="Toggle expanded menu">
                <?php perch_layout('inline-svgs/plus'); ?>
            </button>
        </div>

    </div>

*/

function fetch_with_ajax(pageToFetchFrom, elementToFetch, target, childrenToFetchStart, childrenToFetchEnd, extraHtml) {
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
            // Uncomment the below if you want the button to then be moved _below_ the fetched content
            // document.querySelector(elementToFetch).appendChild(document.querySelector(append_target));
            
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
        if (extraHtml !== undefined) {
            document.querySelector(elementToFetch).insertAdjacentHTML('afterend', extraHtml);
        }

        // Enable the below if you're using a the lozad polyfill
        // lazy_loading_polyfill();
    });
}

Array.from(document.querySelectorAll('.js__fetch-with-ajax-on-click')).forEach(element => {
    element.addEventListener('click', function() {
        if (element.getAttribute('aria-expanded') === 'false' ) {
            element.setAttribute('aria-expanded', 'true');
            element.setAttribute('aria-pressed', 'true');
        } else {
            element.setAttribute('aria-expanded', 'false');
            element.setAttribute('aria-pressed', 'false');
        }

        // Only do an AJAX fetch if the content has NOT already been loaded
        if (!element.classList.contains('js__fetch-with-ajax-on-click--js--ajax-has-been-loaded')) {
            element.classList.add('js__fetch-with-ajax-on-click--js--ajax-has-been-loaded');
            fetch_with_ajax(
                element.dataset.ajaxPageToFetchFrom,
                element.dataset.ajaxElementToFetch,
                element.dataset.ajaxTarget,
                element.dataset.ajaxChildrenToFetchStart,
                element.dataset.ajaxChildrenToFetchEnd,
                element.dataset.ajaxExtraHtml
            );
        } else {
            // Otherwise let's do a toggle. Based on `Atoms / (Non Core) / Toggle Content`
            // Let's toggle all the children after target...
            Array.from(document.querySelectorAll(element.dataset.ajaxTarget + ' ~ *')).forEach(element => {
                element.classList.toggle('js__u-js-hide');
            });
        }
    });
});