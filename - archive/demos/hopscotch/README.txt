We don't want to use PNGs for background images e.g. 'close' image

Therefore you want to add the following overrides in your `style.css`

/* stylelint-disable selector-no-qualifying-type, selector-max-specificity */
/* GROUP ORGANISMS / PLUGINS / HOPSCOTCH (TOUR) / LAYOUT
=================================================== */
div.hopscotch-bubble .hopscotch-bubble-number {
    width: 0;
    padding: 0;
}

div.hopscotch-bubble .hopscotch-bubble-content {
    margin-left: 0;
}
/* GROUP ORGANISMS / PLUGINS / HOPSCOTCH (TOUR) / SPACING
=================================================== */
.hopscotch-bubble .hopscotch-title {
    padding-block-end: var(--spacing-s-x-x);
}
/* GROUP ORGANISMS / PLUGINS / HOPSCOTCH (TOUR) / DECORATION / CLOSE
=================================================== */
div.hopscotch-bubble .hopscotch-bubble-close {
    padding-inline-end: var(--spacing-s);
    /* Cancel */
    background: none;
    text-indent: initial;
}

.hopscotch-bubble-close {
    margin-top: 5px;
    margin-right: 5px;
}

.hopscotch-bubble-close .c-jg-icon {
    color: var(--colour-grey-reading);
}

.hopscotch-bubble .hopscotch-title {
    font-family: var(--font-family-main);
    font-style: var(--font-family-main-style-1);
}
/* GROUP ORGANISMS / PLUGINS / HOPSCOTCH (TOUR) / DECORATION / BUTTONS
=================================================== */
div.hopscotch-bubble .hopscotch-nav-button.next {
    font-size: 14px;
    background-color: white;
    background-image: linear-gradient(to bottom, white 0%,white 100%);
    color: black;
    border-color: rgba(0,0,0,0.1);
    font-family: var(--font-family-main);
    text-shadow: none;
}

div.hopscotch-bubble .hopscotch-nav-button {
    height: initial;
    padding: 5px 16px;
}

div.hopscotch-bubble .hopscotch-content {
    font-family: var(--font-family-main);
}
/* GROUP ORGANISMS / PLUGINS / HOPSCOTCH (TOUR) / DECORATION
=================================================== */
div.hopscotch-bubble {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius-l);
    box-shadow: 0 20px 9px -8px rgba(0, 0, 0, 0.09);
}

div.hopscotch-bubble .hopscotch-bubble-arrow-container.up .hopscotch-bubble-arrow-border {
    border-bottom-color: rgba(0, 0, 0, 0.15);
}

div.hopscotch-bubble .hopscotch-bubble-arrow-container.up .hopscotch-bubble-arrow,
div.hopscotch-bubble .hopscotch-bubble-arrow-container.up .hopscotch-bubble-arrow-border {
    border-width: 11px;
}

div.hopscotch-bubble .hopscotch-bubble-arrow-container.down .hopscotch-bubble-arrow-border {
    border-color: transparent;
}

div.hopscotch-bubble .hopscotch-bubble-arrow-container.up {
    top: -12px;
}
/* GROUP ORGANISMS / PLUGINS / HOPSCOTCH (TOUR) / ACCESSIBILITY / HOVER
=================================================== */
div.hopscotch-bubble .hopscotch-nav-button.next:hover {
    background-image: linear-gradient(to bottom, var(--colour-green) 0%,var(--colour-green) 100%);
    color: white;
    border-color: var(--colour-green);
    box-shadow: none;
}
/* GROUP ORGANISMS / PLUGINS / HOPSCOTCH (TOUR) / ACCESSIBILITY / FOCUS
=================================================== */
div.hopscotch-bubble {
    background: rgba(255,255,255,0.95);
}
.hopscotch-bubble .hopscotch-close:focus {
    outline: none;
}

.hopscotch-bubble .c-jg-icon {
    /* Compensate for border */
    position: relative;
    top: -5px;
    left: -5px;
    /* -- */
    border: 5px solid transparent;
}

.hopscotch-bubble .hopscotch-nav-button.next:focus {
    outline: none;
    border-color: black;
}

.hopscotch-bubble .hopscotch-close:focus .c-jg-icon {
    background: var(--colour-fail);
    color: white;
    border-color: var(--colour-fail);
    border-radius: 50%;
}
/* stylelint-enable */

---

Add the following enhancements to your `script.js`

/* GROUP PLUGINS / HOPSCOTCH (TOUR)
=================================================== */
// Define the tour!
var tour =     {
    id: "welcome_tour",
    // Switch out the 'close' PNG in favour of of an SVG, every time a step 'shows'
    onShow: function() {
        document.querySelector('.hopscotch-close').innerHTML = '<svg class="c-jg-icon c-jg-icon--cross"><use xlink:href="#c-jg-icon--cross"></use></svg>';
    },
    steps: [
        {
            target: "shawn-header",
            placement: "top",
            title: "This is the title!",
            content: "Look at this beautiful title!",
            xOffset: "center",
            arrowOffset: "center",
            padding: 20,
        },
        {
            target: "shawn-paragraph-content",
            placement: "bottom",
            title: "This is the paragraph content",
            content: "Read the paragraph content and stuff.",
            xOffset: "center",
            arrowOffset: "center",
            padding: 20,
        }
    ]
};

// Start the tour!
hopscotch.startTour(tour);