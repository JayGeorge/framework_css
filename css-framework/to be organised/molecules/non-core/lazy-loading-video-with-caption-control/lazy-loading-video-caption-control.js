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



/* GROUP PLUGINS / VIMEO / LAZY LOAD / CAPTION CONTROL
=================================================== */
function setClickResponseFunction(vidDiv) {
    var embedSrc;
        embedSrc = "https://player.vimeo.com/video/" + vidDiv.querySelector('.js__videoLazyLoad__video-container').dataset.embed + "?autoplay=1&muted=1&color=25c395&title=0&byline=0&portrait=0";

    vidDiv.addEventListener( "click", function() {
        if(vidDiv.classList.contains('js--videoLoaded')) {
            // If the video is already loaded then do nothing
        } else {
            var iframe = document.createElement( "iframe" );

            var placeholder_image_height = vidDiv.querySelector('img').height;
            var placeholder_image_width = vidDiv.querySelector('img').width;
            iframe.setAttribute('height', placeholder_image_height);
            iframe.setAttribute('width', placeholder_image_width);


            vidDiv.querySelector('.js__videoLazyLoad__placeholder').style.display = 'none';

            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", embedSrc );

            vidDiv.querySelector('.js__videoLazyLoad__video-container').classList.add('js__videoLazyLoad__video-container--js--loaded');
            vidDiv.querySelector('.js__videoLazyLoad__video-container').innerHTML = "";
            vidDiv.querySelector('.js__videoLazyLoad__video-container').appendChild( iframe );
            vidDiv.classList.add('js--videoLoaded');

            /* GROUP PLUGINS / VIMEO / CAPTION CONTROL { / PLAYER JS}
            =================================================== */
            /* NOTE: YOU NEED TO LOAD PLAYER.JS FIRST: <script src="https://player.vimeo.com/api/player.js"></script> */

            /*
              - Inspired by https://codepen.io/dinomight/pen/YWmzjP?editors=0010
            */
            // Below, commented out, is the old version using Froogaloop. Froogaloop has since been deprecated and superceded by Vimeo's Player.js
            // var player = window.$f(iframe);
            /* When the player is ready, add listeners for pause, finish, and playProgress */
            // player.addEvent('ready', function() {
            //     iframe.contentWindow.postMessage({
            //         method: "enableTextTrack",
            //         value: "en"
            //     }, "*");
            // });

            // Modified example taken from https://github.com/vimeo/player.js/

            /* NOTE: YOU NEED TO LOAD PLAYER.JS FIRST: <script src="https://player.vimeo.com/api/player.js"></script> */

            var player = new Vimeo.Player(iframe);

            player.on('play', function() {
                console.log('played the video!');
                player.enableTextTrack('en').then(function(track) {
                    // track.language = the iso code for the language
                    // track.kind = 'captions' or 'subtitles'
                    // track.label = the human-readable label
                }).catch(function(error) {
                    switch (error.name) {
                        case 'InvalidTrackLanguageError':
                            // no track was available with the specified language
                            break;

                        case 'InvalidTrackError':
                            // no track was available with the specified language and kind
                            break;

                        default:
                            // some other error occurred
                            break;
                    }
                });
            });
        }
    });
}

// I used to have a script here to load iframes straight away for iOS, since iOS does not start loading the videos—however, this script slowed down the page load so I removed it.

function loadLazyVideos() {
    var video = document.querySelectorAll( ".js__videoLazyLoad" );

    for (var i = 0; i < video.length; i++) {
        setClickResponseFunction(video[i]);
    }
}

loadLazyVideos();