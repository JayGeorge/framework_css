/*! Notes...

    Author: Jay George
    Author URI: https://jaygeorge.co.uk

    ABOUT THIS JAVASCRIPT
    ===================================================
    - JS 'hooks' in the DOM are prefixed with `__` and written in camel case like this `js__thisIsAHook`
    - Classes added by JS are prefixed with `--` and written in camel case like this `js--thisHasBeenAddedByJS`

*/




/* GROUP FRAMEWORK / CLICK
=================================================== */
// Array.from(document.querySelectorAll('.js__activateSomething') || []).forEach(element => {
//     element.onclick = function(){
//         // Maybe this
//         document.querySelector('html').classList.toggle('js--somethingIsOpen');
//         // Or maybe this
//         element.classList.toggle('qa-test');
//     }
// });