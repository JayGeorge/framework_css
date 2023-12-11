/* eslint-disable */
// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options

const playersMutedCoverMobileAndLandscape = Array.from(document.querySelectorAll('.js__plyr-muted-cover')).map(p => new Plyr(p, {
    captions: { active: true },
    hideControls: true,
    autoplay: true,
    muted: true,
    loop: { active: true },
    controls: [
        // 'play-large', // The large play button in the center
        // 'restart', // Restart playback
        // 'rewind', // Rewind by the seek time (default 10 seconds)
        // 'play', // Play/pause playback
        // 'fast-forward', // Fast forward by the seek time (default 10 seconds)
        // 'progress', // The progress bar and scrubber for playback and buffering
        // 'current-time', // The current time of playback
        // 'duration', // The full duration of the media
        // 'mute', // Toggle mute
        // 'volume', // Volume control
        'captions', // Toggle captions
        // 'settings', // Settings menu
        'pip', // Picture-in-picture (currently Safari only)
        // 'airplay', // Airplay (currently Safari only)
        // 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
        // 'fullscreen', // Toggle fullscreen
    ],
    vimeo: { background: 1 },
}));

// Expose player so it can be used from the console
window.players = playersMutedCoverMobileAndLandscape;
// console.log(playersMutedCoverMobileAndLandscape);

// Use event bubbling to query if parent element contains .js__plyr-muted-cover-wrapper - https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
document.querySelector('body').addEventListener('ready', event => {
    if (event.target.parentElement == document.querySelector('.js__plyr-muted-cover-wrapper')) {
        const player = event.detail.plyr;
        player.muted = true;
        // [1] to enable multiple players to play at once we need to disable the Vimeo's autopause when using two video players, as per:
        // https://stackoverflow.com/questions/47321979/plyr-video-not-autoplaying-when-2-vimeo-videos-on-the-same-page
        // This is where I found the embed object
        // console.log(event.detail.plyr.embed);
        const plyr_instance = event.detail.plyr.embed;
        plyr_instance.setAutopause(false).then(function(autopause) {
            // autopause was turned off
        }).catch(function(error) {
            switch (error.name) {
                case 'UnsupportedError':
                    // Autopause is not supported with the current player or browser
                    break;
                default:
                    // some other error occurred
                    break;
            }
        });
        plyr_instance.setAutopause(false);
    }
});

// [2] We also need to ensure the videos are playing by waiting a couple of seconds and trying to play the videos again. It's very rare this happens, but it _does_ happen. So this is a failsafe.
window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        Array.from(playersMutedCoverMobileAndLandscape || []).forEach(element => {
            element.play();
        })
    }, 2000);
});

// [3] If we're on desktop then delete any mobile videos before we attempt to play any videos because Safari doesn't like 2 players existing.
if (window.matchMedia('(orientation: landscape)').matches) {
    const mobileVideo = document.querySelector('[data-js="mobile-video"]');

    // we're in LANDSCAPE mode
    mobileVideo.remove();
}

// [4] Some window state management in case the window is resized e.g. we want to make sure the other video loads up if it's been deleted
function reportWindowSize() {
    const mobileVideo = document.querySelector('[data-js="mobile-video"]');

    if (window.matchMedia('(orientation: landscape)').matches) {
        // we're in LANDSCAPE mode
        if(mobileVideo) {
            // If the mobile video is there then remove it
            mobileVideo.remove();
        }
    } else {
        // we're in PORTAIT mode
        if(!mobileVideo) {
            // If the mobile video has been removed and we resize the window then reload the page to reinstate the mobile video
            window.location.reload();
        }
    }
} 
window.onresize = reportWindowSize;

/* eslint-enable */