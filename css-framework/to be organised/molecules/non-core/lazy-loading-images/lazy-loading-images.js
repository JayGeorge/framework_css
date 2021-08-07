/* GROUP MOLECULES / (NON CORE) / IMAGE / LAZY LOAD / {/ LOZAD}
=================================================== */
/* Notes...

    - Test whether lazy loading is supported natively. If so, add src parameters to images
        + If lazy loading is not supported then dynamically import the lozad library
    - One thing to note is that we can't take advantage of cache breaking here because we're not checking the file modified time,
      but we'll let that go since lozad is unlikely to change
    - Source: https://web.dev/native-lazy-loading

*/

/* HTML Example...

    (basically lozad markup)

    Picture element
    ---------------
    <picture class="o-dark-panel js__lozad" data-alt="">
        <source media="(min-width: 1950px)" srcset="image-large-w3840h1402.png 3840w, image-large-w1920h701.png 1920w" sizes="100vw">
        <source media="(min-width: 768px)" srcset="image-panoramic-w2520h1008.png 2520w, image-panoramic-w1536h614.png 1536w" sizes="100vw">
        <source srcset="image-w600h342@2x.png 1200w, image-w414h236@2x.png 828w, image-w375h214@2x.png 750w, image-w320h183.png 640w" sizes="100vw">
    </picture>
    <noscript> <-- the script will copy the contents of this fallback
        <picture class="o-dark-panel">
            <source media="(min-width: 1950px)" srcset="image-large-w3840h1402.png 3840w, image-large-w1920h701.png 1920w" sizes="100vw">
            <source media="(min-width: 768px)"srcset="image-panoramic-w2520h1008.png 2520w, image-panoramic-w1536h614.png 1536w" sizes="100vw">
            <img src="image-panoramic-w1536h614.png" srcset="image-w600h342@2x.png 1200w, image-w414h236@2x.png 828w, image-w375h214@2x.png 750w, image-w320h183.png 640w" sizes="100vw" alt="">
        </picture>
    </noscript>

    srcset
    ------
    (the below is just lozad markup. The script will rename the data attributes to real attributes)

    **Remember to add the data-src and data-scrset attributes**

    <img class="js__lozad" data-src="image-w375h211@2x.png" data-srcset="image-w320h180@2x.png 640w, image-w375h211@2x.png 750w, image-w414h233@2x.png 828w, image-w500h282@2x.png 1000w, image-w768h433@2x.png 1536w, image-w1024h577@2x.png 2048w" sizes="(min-width: 1024px) 50vw, 100vw" alt="" src="image-w375h211@2x.png" srcset="image-w320h180@2x.png 640w, image-w375h211@2x.png 750w, image-w414h233@2x.png 828w, image-w500h282@2x.png 1000w, image-w768h433@2x.png 1536w, image-w1024h577@2x.png 2048w">
*/

function scriptExists(url) {
    return document.querySelectorAll(`script[src="${url}"]`).length > 0;
}

function lazy_loading_polyfill() {
    // Test whether lazy loading is supported natively
    if ('loading' in HTMLImageElement.prototype) {
        // If so, add src and srcset parameters to images
        const images = document.querySelectorAll('img.js__lozad');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.srcset = img.dataset.srcset;
        });

        // Do something slightly different for picture elements
        const pictures = document.querySelectorAll('picture.js__lozad');
        pictures.forEach(picture => {
            // Provided we're using a noscript fallback as the next element, as we should, we can grab the inner text from noscript and replace the picture element with it
            if(picture.nextElementSibling.matches('noscript')) {
                // [1] Get the contents of noscript
                const picture_from_noscript = picture.nextElementSibling.innerHTML;
                // [2] Create a node
                const new_picture_element = document.createElement('picture');
                // [3] Add contents of noscript to newly created node
                new_picture_element.innerHTML = picture_from_noscript;

                // replaceWith will not work in IE11 but doesn't matter, since it's highly likely it will work with browsers that support lazy loading
                picture.replaceWith(new_picture_element);

                // Let's unwrap the original picture element so we don't have it twice
                new_picture_element.outerHTML = new_picture_element.innerHTML;
            }
        });
    } else {
        // Get the lozad library ready
        const lozad_script = document.createElement('script');
        // Perch example...
        // const lozad_script_src = '/perch/addons/feathers/default/js/prod/lozad.min.js';
        // CSS framework demo...
        const lozad_script_src = 'lozad.min.js';
        lozad_script.src = lozad_script_src;

        if(!scriptExists(lozad_script_src)) {
            // If the lozad library does not exist then load it
            document.body.appendChild(lozad_script);
        }
    }
}

// Load the polyfill straight away
lazy_loading_polyfill();