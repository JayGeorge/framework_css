/* Notes...

    Author: Jay George
    Author URI: https://jaygeorge.co.uk

    ABOUT THIS JAVASCRIPT
    ===================================================
    The following is placed in the `head` file as an inline script to improve performance
    <script>
        // Tell the html ASAP (without JS) to prevent a flicker of DOM changes e.g. nav collapsed.
        document.querySelector('html').classList.remove('no-js');
        document.querySelector('html').classList.add('js');
    </script>

    - JS 'hooks' in the DOM are prefixed with `__` and written in camel case like this `js__thisIsAHook`
    - Classes added by JS are prefixed with `--` and written in camel case like this `js--thisHasBeenAddedByJS`

*/




/* GROUP FRAMEWORK / STATIC ONLY / HIGHLIGHT CURRENT NAV ITEM
=================================================== */
/* Need this locally in case we're running on NGINX instead of Apache */
// https://stackoverflow.com/questions/6964503/using-javascript-to-highlight-current-page-in-navbar
var url = window.location.href.split("/");
var nav_links = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
var i=0;
var current_page = url[url.length - 1];
for(i;i < nav_links.length; i++){
    var lb = nav_links[i].href.split("/");
    if(lb[lb.length-1] == current_page) {
        nav_links[i].className = "current-menu-item";
    }
}




/* GROUP FRAMEWORK / CLICK
=================================================== */
/* Notes...

*/
/* HTML Example...

*/
// Using data attributes

// ```js
// Array.from(document.querySelectorAll('[data-js="show-more-trigger"]') || []).forEach(element => {
//     element.onclick = function(){
//         document.querySelector('[data-js="show-more-target"]').toggleAttribute('data-js-yes');
//     }
// });
// ```

// Then CSS...
// ```css
// .js [data-js="show-more-target"][data-js-yes] {
//     display: block;
// }
// ```

// Array.from(document.querySelectorAll('.js__activateSomething') || []).forEach(element => {
//     element.onclick = function(){
//         // Or maybe this
//         document.querySelector('html').classList.toggle('js--somethingIsOpen');
//         // Or maybe this
//         element.classList.toggle('qa-test');
//     }
// });




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