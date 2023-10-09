// NOTE - Move this to head.php as an inline script to improve performance
// <script>
/* Tell the html ASAP (without JS) to prevent a flicker of DOM changes e.g. nav collapsed. */
// document.querySelector('html').classList.remove('no-js');
// document.querySelector('html').classList.add('js');
// </script>


/* GROUP FIX SAFARI'S BACK-FORWARD CACHE
=================================================== */
/* Notes...

    - Source: https://gomakethings.com/fixing-safaris-back-button-browser-cache-issue-with-vanilla-js/

    If browser back button was used, flush cache
    This ensures that user will always see an accurate, up-to-date view based on their state
    https://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked

*/
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();



/* GROUP FRAMEWORK / NAV
=================================================== */
Array.from(document.querySelectorAll('.js__navMobileButton') || []).forEach(element => {
    element.onclick = function(){
        document.querySelector('html').classList.toggle('js--navIsOpen');
        document.querySelector('html').classList.add('js--navHasBeenOpened');
    }
});
/* GROUP FRAMEWORK / NAV / (OPTIONAL FOR "ALWAYS CLOSED" NAV) / RESET STATE ON ESCAPE
=================================================== */
// e.g. Give the Escape Key as an option to exit too
document.addEventListener('keydown', (event) => {
    if (!event.repeat && event.key === 'Escape') {
        document.querySelector('html').classList.contains('js--navIsOpen');
            document.querySelector('html').classList.remove('js--navIsOpen');
    }
});
/* GROUP FRAMEWORK / NAV / (OPTIONAL FOR "ALWAYS CLOSED" NAV) / RESET STATE ON CLICK
=================================================== */
// e.g. Give clicking outside as an option to exit too
// Based on https://gomakethings.com/detecting-clicks-outside-of-an-element-with-vanilla-javascript/
// Listen for all clicks on the document
document.addEventListener('click', function (event) {
    // If the click happened inside the the container, bail
    if (event.target.closest('.c-site-header__nav')) return;

    // Otherwise, run our code...
    document.querySelector('html').classList.contains('js--navIsOpen');
        document.querySelector('html').classList.remove('js--navIsOpen');

}, false);



/* GROUP COMPONENTS / FRAMEWORK / (NON CORE) / NAV / MULTI LEVEL
=================================================== */
Array.from(document.querySelectorAll('nav li a')).forEach(element => {
    // If it has children / there's another ul
    if(element.parentElement.querySelector('ul')) {
        element.setAttribute('aria-expanded', 'false');
        element.setAttribute('aria-pressed', 'false');
        element.setAttribute('aria-label', 'Toggle expanded menu');
        element.addEventListener('click', function(event) {
            // Prevent the click
            event.preventDefault();
            // add a class to the ul <-- HERE
            element.parentElement.querySelector('ul').classList.toggle('js--menuActive');
            if (element.getAttribute('aria-expanded') === 'false' ) {
                element.setAttribute('aria-expanded', 'true');
                element.setAttribute('aria-pressed', 'true');
            } else {
                element.setAttribute('aria-expanded', 'false');
                element.setAttribute('aria-pressed', 'false');
            }
        });
    };
});



/* GROUP UTILITIES / ANIMATION / IO FRAMEWORK (Authored by me)
=================================================== */
/* Simple Intersection Observer to for scroll-triggered animations. See my 'JavaScript.txt > IO Framework' in my wiki for more info, and animation examples in non-core.css in my CSS framework */
/* HTML Example...
    <div data-io>
    </div>
*/
/* CSS Control using data attributes...
    <div data-io data-io-delay="0.25">
    </div>

    [data-io-delay="0.25"] {
        animation-delay: 0.25s;
    }
*/
function jfg_intersectionObserver() {
    const options = {
        // When at least 25% is visible
        threshold: [0.25]
    }

    /* GROUP UTILITIES / ANIMATION / IO FRAMEWORK / DEFAULT
    =================================================== */
    /* Notes...
        [1] data-io is the default, where data-io-seen is only added once, and never removed once added
        [2] However, data-io-currently-in-view is always added/removed as an extra hook
    */
    const observe_target = document.querySelectorAll('[data-io]');
    var my_observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.setAttribute('data-io-seen', '');
                entry.target.setAttribute('data-io-currently-in-view', '');
            } else {
                entry.target.removeAttribute('data-io-currently-in-view');
            }
        });
    }, {
        options
    });
    observe_target.forEach(entry => {
        my_observer.observe(entry);
    });
    /* GROUP UTILITIES / ANIMATION / IO FRAMEWORK / MULTIPLE TIMES
    =================================================== */
    /* data-io-repeat can be used for multiple triggers, where it's removed once out of sight, and re-added once back on screen */
    const observe_target_multiple_times = document.querySelectorAll('[data-io-repeat]');
    var my_observer_multiple_times = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.setAttribute('data-io-seen', '');
                entry.target.setAttribute('data-io-currently-in-view', '');
            } else {
                entry.target.removeAttribute('data-io-seen');
                entry.target.removeAttribute('data-io-currently-in-view');
            }
        });
    }, {
        options
    });
    observe_target_multiple_times.forEach(entry => {
        my_observer_multiple_times.observe(entry);
    });
    /* GROUP UTILITIES / ANIMATION / IO FRAMEWORK / CONTROL PLYR STATE
    =================================================== */
    // Leaving this here for posterity but it doesn't work because it will pause every single video on the page rather than the current one

    /* Used to auto pause plyr instances when they're out of site, using intersection observer. Attach data-io-control-plyr to the same place you'd usually attach data-io-repeat to. It can be used for multiple triggers, where it's removed once out of sight, and re-added once back on screen */
    // window.addEventListener('load', (event) => {
    //     const observe_plyr_multiple_times = document.querySelectorAll('[data-io-control-plyr]');
    //     var my_observer_multiple_times = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.intersectionRatio > 0) {
    //                 entry.target.setAttribute('data-io-control-plyr-pause', '');
    //                 // Resume
    //                 Array.from(playersMutedCoverMobileAndLandscape || []).forEach(element => {
    //                     element.play();
    //                 });
    //             } else {
    //                 entry.target.removeAttribute('data-io-control-plyr-pause');
    //                 // Pause
    //                 Array.from(playersMutedCoverMobileAndLandscape || []).forEach(element => {
    //                     element.pause();
    //                 });
    //             }
    //         });
    //     }, {
    //         options
    //     });
    //     observe_plyr_multiple_times.forEach(entry => {
    //         my_observer_multiple_times.observe(entry);
    //     });
    // });
}

jfg_intersectionObserver();



/* GROUP
=================================================== */
/* Notes...

*/
/* HTML Example...

*/