/* GROUP OBJECTS / FLIP CARDS
=================================================== */
document.addEventListener('click', function (element) {
    var flipCardTarget = '.js__o-flip';

    // If the clicked element isn't descended from the target class, or if it is a link, bail
    if (!element.target.closest(flipCardTarget) || element.target.matches('a')) return;
    element.target.closest(flipCardTarget).classList.toggle('js--flipped');
}, false);