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



/* GROUP
=================================================== */
/* Notes...

*/
/* HTML Example...

*/