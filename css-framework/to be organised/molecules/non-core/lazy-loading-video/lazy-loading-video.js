/* GROUP ATOMS / (NON CORE) / FOCUS ON CLICK
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




/* GROUP MOLECULES / VIDEO / LAZY LOAD
=================================================== */
/* Notes

    - The function is called by default but alternatively you can call the function to activate it on a page i.e. <script>loadLazyVideos();</script>
    N.B. the function will need to be called _after_ the script

*/

function setVideoThumbnail(vidDiv) {
    if (vidDiv.dataset.vidhost === "vimeo") {
        var x = new XMLHttpRequest();
        // Note 2019-08-23: this is the old Vimeo API. Need to update it to get higher thumbnail resolutions. Something like https://developer.vimeo.com/api/upload/thumbnails
        x.open("GET", "https://vimeo.com/api/v2/video/" + vidDiv.dataset.embed +".xml", true);
        x.onreadystatechange = function () {
            if (x.readyState == 4 && x.status == 200)
            {
                var doc = x.responseXML;
                source = doc.getElementsByTagName("thumbnail_large")[0].innerHTML;
                var image = new Image();
                image.src = source;
                image.style.top = "0%";
                image.addEventListener( "load", function() {
                        vidDiv.appendChild( image );
                });
            }
        };
        x.send(null);
    } else {
        var source = "https://img.youtube.com/vi/"+ vidDiv.dataset.embed +"/sddefault.jpg"; 

        var image = new Image();
        image.src = source;
        image.alt = "Video thumbnail";
        image.addEventListener( "load", function() {
                vidDiv.appendChild( image );
        });
    }
}

function setClickResponseFunction(vidDiv) {
    var embedSrc;
    if (vidDiv.dataset.vidhost === "vimeo") {
            embedSrc = "https://player.vimeo.com/video/" + vidDiv.dataset.embed + "?autoplay=1";
            // Some example options below
            // https://help.vimeo.com/hc/en-us/articles/360001494447-Using-Player-Parameters
            // embedSrc = 'https://player.vimeo.com/video/' + vidDiv.dataset.embed + '?muted=1&color=25c395&title=0&byline=0&portrait=0&autoplay=1';
    } else {
            embedSrc = "https://www.youtube.com/embed/" + vidDiv.dataset.embed + "?rel=0&showinfo=0&autoplay=1";
    } 
    
    vidDiv.addEventListener( "click", function() {
            var iframe = document.createElement( "iframe" );

            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", embedSrc );

            this.innerHTML = "";
            this.appendChild( iframe );
    });
}

function loadLazyVideos() {
    var video = document.querySelectorAll( ".js__videoLazyLoad" );

    for (var i = 0; i < video.length; i++) {
        setVideoThumbnail(video[i]);
        setClickResponseFunction(video[i]);
    }
}

// This should be invoked inside a script tag inside Perch's file, so that we can conditionally invoke the function.
loadLazyVideos();