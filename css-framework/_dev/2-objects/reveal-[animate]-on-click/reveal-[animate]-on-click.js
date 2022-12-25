/*! Notes...

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




/* GROUP FRAMEWORK / CLICK
=================================================== */
/* Notes...

*/
/* HTML Example...

*/
// Array.from(document.querySelectorAll('.js__activateSomething') || []).forEach(element => {
//     element.onclick = function(){
//         // Maybe this
//         document.querySelector('html').classList.toggle('js--somethingIsOpen');
//         // Or maybe this
//         element.classList.toggle('qa-test');
//     }
// });




/* GROUP FRAMEWORK / NAV
=================================================== */
Array.from(document.querySelectorAll('.js__navMobileButton') || []).forEach(element => {
    element.onclick = function(){
        /* Temporarily add a class to prevent the animation from cutting out too early, as the z-index switches */
        if(document.querySelector('html').classList.contains('js--navIsOpen')) {
            document.querySelector('.c-site-header__nav').classList.add('js--wait-before-removing-z-index');
            /* Timeout should be same as transition time */
            setTimeout(function() {
                document.querySelector('.c-site-header__nav').classList.remove('js--wait-before-removing-z-index');
            }, 300);
        }
        /* -- */
        document.querySelector('html').classList.toggle('js--navIsOpen');
        /* This can be used to prevent animations from firing off before the nav is clicked e.g. a slide-down animation e.g. */
        // .js:not(.js--navHasBeenOpened) /* nav*/.js__collapsedUntilNavOpened { display: none!important; }
        document.querySelector('html').classList.add('js--navHasBeenOpened');
    }
});  
/* GROUP FRAMEWORK / NAV / (OPTIONAL FOR "ALWAYS CLOSED" NAV) / RESET STATE
=================================================== */
/* e.g. Give the Escape Key as an option to exit too */
document.addEventListener('keydown', (event) => {
    if (!event.repeat && event.key === 'Escape') {
        document.querySelector('html').classList.contains('js--navIsOpen');
            document.querySelector('html').classList.remove('js--navIsOpen');
    }
});




/* GROUP OBSERVE MULTIPLE TARGETS
=================================================== */
/* Notes...

    Use this if you want a binary 'it's on/off' screen

*/
const observe_site_logo = document.querySelectorAll('.site-logo');

var observer_site_logo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        /* Ratio
            0 = trigger when element is element is visible
            1 = trigger when entire element is on the page
        */
        if (entry.intersectionRatio > 0) {
            // console.log('in the view');
            document.querySelector('.c-site-header').classList.remove('c-site-header--js--compact');
        } else {
            // console.log('out of view');
            document.querySelector('.c-site-header').classList.add('c-site-header--js--compact');
        }
    });
});

observe_site_logo.forEach(entry => {
    observer_site_logo.observe(entry);
});




/* GROUP UTILITIES / FRAMEWORK / INVERT ELEMENT / EXTRA
=================================================== */
/* Notes...

    Use this if you want a binary 'it's on/off' screen

*/
const observe_target_photo_hero = document.querySelectorAll('.js__doNotInvert');

var observer_photo_hero = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        /* Ratio
            0 = trigger when element is element is visible
            1 = trigger when entire element is on the page
        */
        if (entry.intersectionRatio > 0) {
            // console.log('in the view');
            document.querySelector('html').classList.add('js--doNotInvert');
        } else {
            // console.log('out of view');
            document.querySelector('html').classList.remove('js--doNotInvert');
        }
    });
});

observe_target_photo_hero.forEach(entry => {
    observer_photo_hero.observe(entry);
});




/* GROUP REMOVE AOS
=================================================== */
/* Notes...

    Used to get rid of tranisitons on the slider nav that make the production names floaty and 'chug' when moving through the slides

*/
setTimeout(function() {
    document.querySelector('html').classList.add('js--removeAOS');
}, 2000);




/* GROUP OBJECTS / JAVASCRIPT / REVEAL ON CLICK {ANIMATE ON CLICK}
=================================================== */
/* Notes...

    [1] Add `.js__animateInOnClick-expandedContent` to the container that will be hidden. We will add a "Read more" link before this with JavaScript
    [2] Add `.js__animateInOnClick-ContainerToBeAnimated` around the parent container <-- this is the target to add a class to once an element has been clicked. We will then use this to change the layout of the element


    [3].js__animateInOnClick <-- this is the element that is clicked, added by JS so that if JS is disabled this is not showing unexpectedly

    .js-added--hasBeenAnimated <-- this class is added to `.js__animateInOnClick-ContainerToBeAnimated` once the element is clicked

    For an expanded version of this see my Agdon House JavaScript.

*/
/* HTML Example...

    <div class="js__animateInOnClick-ContainerToBeAnimated"> <-- `js-added--hasBeenAnimated` is added once the read more link has been clicked
        <p class="js__animateInOnClick"> <-- this chunk of HTML is added by JS
            <span data-aos="fade-in" data-aos-once="true">
                Read More
            </span>
        </p>


        <div class="js__animateInOnClick-expandedContent">
            Content to be hidden
        </div>
    </div>

*/
/* CSS (using screen-reader-text class properties)

    .js .js__animateInOnClick-ContainerToBeAnimated:not(.js-added--hasBeenAnimated) .js__animateInOnClick-expandedContent {
        clip: rect(1px, 1px, 1px, 1px);

        position: absolute!important;
        overflow: hidden;
        width: 1px;
        height: 1px;
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
    .js-added--hasBeenAnimated .js__animateInOnClick {
        animation-name: fade-out;
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-duration: 0.5s;
        animation-fill-mode: both;
    }

*/
/* Some ground work to add a 'Read More' element before the expandable content */
Array.from(document.querySelectorAll('.js__animateInOnClick-expandedContent')).forEach(element => {
    element.insertAdjacentHTML('beforebegin', '<p class="js__animateInOnClick u-js-only"><span data-aos="fade-in" data-aos-once="true">Read More</span></p>');
});
/* Attach a click event to the 'Read More' element we've just added */
Array.from(document.querySelectorAll('.js__animateInOnClick')).forEach(element => {
    element.addEventListener('click', function() {
        this.closest('.js__animateInOnClick-ContainerToBeAnimated').classList.add('js-added--hasBeenAnimated');
    });
});-