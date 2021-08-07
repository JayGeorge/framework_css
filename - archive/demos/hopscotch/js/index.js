var scroll_duration = 250;

var width = window.innerWidth, height = window.innerHeight;

if (width >= 767) {
    // Slower for larger screens
    var scroll_duration = 500;
}

// Define the tour!
var tour =     {
    id: "welcome_tour",
    scrollDuration: scroll_duration,
    showPrevButton: true,
    // Switch out the 'close' PNG in favour of of an SVG, every time a step 'shows'
    onShow: function() {
        document.querySelector('.hopscotch-close').innerHTML = '<svg class="c-jg-icon c-jg-icon--cross"><use xlink:href="/svg-icons/symbol-defs.svg#c-jg-icon--cross"></use></svg>';
    },
    steps: [
        {
            target: "js__hopscotch-tour--start-tour",
            placement: "top",
            title: "<svg class='c-jg-icon c-jg-icon--play'><use xlink:href='#c-jg-icon--play'></use></svg> Videos!",
            content: "All recipes are video recipes, making it really easy to follow along—and don't worry, the text is there too, if you need it.",
            xOffset: "center",
            yOffset: -20,
            arrowOffset: "center",
            padding: 20,
        },
        {
            target: "js__hopscotch-tour--recipe",
            placement: "top",
            title: "<svg class='c-jg-icon c-jg-icon--fingers-scroll-right'><use xlink:href='#c-jg-icon--fingers-scroll-right'></use></svg> Give it a try",
            content: "Swipe through the recipe to see the next steps. Each step is a short video.",
            xOffset: "center",
            arrowOffset: "center",
            padding: 20,
        },
        {
            target: "js__hopscotch-tour--shopping-list",
            placement: "top",
            title: "<svg class='c-jg-icon c-jg-icon--register'><use xlink:href='#c-jg-icon--register'></use></svg> Keep track of ingredients",
            content: "Ingredients from the recipes are automatically added to your basket.",
            xOffset: "center",
            arrowOffset: "center",
            padding: 20,
        },
        {
            target: "js__hopscotch-tour--shopping-list-example",
            placement: "top",
            title: "Here's an example!",
            content: "This is what the beginning of your shopping list would look like if you started with the recipe example above.",
            xOffset: "center",
            arrowOffset: "center",
            padding: 20,
        },
        {
            target: "js__hopscotch-tour--shopping-list-example-actions",
            placement: "top",
            title: "Use your shopping list however you like",
            content: "You can email someone a shopping list, print it out, or shop online",
            xOffset: "center",
            arrowOffset: "center",
            padding: 20,
        },
        {
            target: "js__hopscotch-tour--shop-online",
            placement: "top",
            title: "<svg class='c-jg-icon c-jg-icon--truck'><use xlink:href='#c-jg-icon--truck'></use></svg> Order online",
            content: "Vee integrates with your favourite supermarkets so you can order online easily",
            xOffset: "center",
            arrowOffset: "center",
            padding: 20,
        }
    ]
};

document.getElementById("js__hopscotch-close-tour").onclick = function(){
    document.querySelector('.hopscotch-bubble--dummy-start').remove();
};

document.getElementById("js__hopscotch-start-tour").onclick = function(){
    document.querySelector('.hopscotch-bubble--dummy-start').remove();
    // Start the tour!
    hopscotch.startTour(tour);
};