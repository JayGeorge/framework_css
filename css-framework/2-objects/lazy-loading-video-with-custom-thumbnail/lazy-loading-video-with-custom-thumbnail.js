/* GROUP OBJECTS / (NON CORE) / SCROLL FOCUS ON CLICK
=================================================== */
/* Notes...

    - e.g. use this to focus a video when a user clicks it.

*/
Array.from(document.querySelectorAll('.js__focus-on-click')).forEach(element => {
    element.addEventListener('click', function() {
        /* Doesn't work for Firefox 'video' element, which hijacks the click event */
        this.scrollIntoView();
    });
});




/* GROUP OBJECTS / VIDEO / LAZY LOAD
=================================================== */
/* Notes

    - The function is called by default as this module is conditionally loaded but alternatively you can call the function to activate it on a page i.e. <script>loadLazyVideos();</script>
    N.B. the function will need to be called _after_ the script

*/

function setClickResponseFunction(vidDiv) {
    var embedSrc;
    if (vidDiv.dataset.vidhost === 'vimeo') {
        embedSrc = 'https://player.vimeo.com/video/' + vidDiv.dataset.embed + '?autoplay=1';
        // Some example options below
        // https://help.vimeo.com/hc/en-us/articles/360001494447-Using-Player-Parameters
        // embedSrc = 'https://player.vimeo.com/video/' + vidDiv.dataset.embed + '?autoplay=1&muted=1&color=25c395&title=0&byline=0&portrait=0';
    } else {
        embedSrc = 'https://www.youtube.com/embed/' + vidDiv.dataset.embed + '?rel=0&showinfo=0&autoplay=1';
    } 
    
    vidDiv.addEventListener('click', function() {
        var iframe = document.createElement('iframe');

        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', "");
        iframe.setAttribute("src", embedSrc);

        this.innerHTML = "";
        this.appendChild(iframe);
        this.classList.add('js--videoLoaded');
    });
}

function loadLazyVideos() {
    var video = document.querySelectorAll('.js__videoLazyLoad');

    for (var i = 0; i < video.length; i++) {
        // Instead we're setting the the thumbnail with Perch so that we can crop it differently i.e. the same as the hero Image crop. The loaded video will be native video crop though.
        // setVideoThumbnail(video[i]);
        setClickResponseFunction(video[i]);
    }
}

loadLazyVideos();