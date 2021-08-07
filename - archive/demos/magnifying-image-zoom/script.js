/* GROUP MOLECULES / (NON CORE) / ZOOMED IMAGE
=================================================== */
/* Notes...

    - Wrap a container around your image with a class called 'js__magnifying_glass_zoom_container'
    - Add an attribute of data-zoomed_image to the img
    - Add this script
    - Add the CSS found in the style.css file in this directory
    - To see a more advanced implementation see my selbycontractflooring repo

*/

/* HTML Example...

    <div class="js__magnifying_glass_zoom_container">
        <!-- Add your bigger image in the 'data-zoomed-image' attribute -->
        <img id="myimage" src="https://images.unsplash.com/photo-1535557930565-9fbb4997576d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=afe2ad12db6f9cc7c38d0d3bee30e7fa&auto=format&fit=crop&w=1234&q=80" width="600" height="900" data-zoomed_image="https://images.unsplash.com/photo-1535557930565-9fbb4997576d?ixlib=rb-0.3.5&s=103708bb55586febb2fc92a588d5705d&auto=format&fit=crop&w=3334&q=80">
    </div>

*/
// Source: https://www.w3schools.com/howto/howto_js_image_magnifier_glass.asp
function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);

    /* create magnifier glass */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "js__magnifying_glass_zoom_container__js-added--magnifying-glass");

    /* insert magnifier glass */
    img.parentElement.insertBefore(glass, img);

    /* set background properties for the magnifier glass */
    // glass.style.backgroundImage = "url('" + img.src + "')";
    // =JFG. Load zoomed image from the zoomed image dataset attribute instead
    glass.style.backgroundImage = "url('" + img.dataset.zoomed_image + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* execute a function when someone moves the magnifier glass over the image */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /* and also for touch screens */
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();

    /* get the cursor's x and y positions */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    /* prevent the magnifier glass from being positioned outside the image */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}

    /* set the position of the magnifier glass */
    glass.style.left = (x - w) + "px";
    // glass.style.top = (y - h) + "px";
    /* =JFG. Move magnifying glass above pointer for touch devices */
    glass.style.top = (y - (h * 2.2)) + "px";

    /* display what the magnifier glass "sees" */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;

        /* get the x and y positions of the image */
        a = img.getBoundingClientRect();

        /* calculate the cursor's x and y coordinates, relative to the image */
        x = e.pageX - a.left;
        y = e.pageY - a.top;

        /* consider any page scrolling */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}

Array.from(document.querySelectorAll('.js__magnifying_glass_zoom_container')).forEach(element => {
    // =JFG. Load image on click. If the element is a link, prevent it from going to the next page.
    element.addEventListener('click', function(e) {
        e.preventDefault();
        if (!this.classList.contains('js--magnifying_glass_active')) {
            this.classList.add('js--magnifying_glass_active');
            /* Initiate Magnify Function with the id of the image, and the strength of the magnifier glass: */
            magnify("myimage", 3);
        }
    });
});