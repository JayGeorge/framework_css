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




/* GROUP SCROLL TRIGGER WITH INTERSECTION OBSERVER
=================================================== */
/* Simple Intersection Observer to for scroll-triggered animations. See GROUP UTILTIES / FRAMEWORK / (NON CORE) / SCROLL TRIGGER WITH INTERSECTION OBSERVER for more info */
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
    const observe_target = document.querySelectorAll('[data-io]');

    const options = {
        // When at least 25% is visible
        threshold: [0.25]
    }

    var my_observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.setAttribute('data-io-seen', '');
            }
        });
    }, {
        options
    });

    observe_target.forEach(entry => {
        my_observer.observe(entry);
    });
}

jfg_intersectionObserver();