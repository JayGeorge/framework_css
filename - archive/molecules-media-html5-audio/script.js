/* GROUP ATOMS / (NON CORE) / HTML5 AUDIO
=================================================== */
/* Notes...

    - Prevents multiple audio files from playing at once
    - Source: https://stackoverflow.com/questions/19790506/multiple-audio-html-auto-stop-other-when-current-is-playing-with-javascript

*/
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);