/* GROUP MOLECULES / BEFORE AFTER IMAGE
=================================================== */
function moveDivisor() {
    Array.from(document.querySelectorAll('.js__before-after')).forEach(element => {
        /* JS from http://thenewcode.com/819/A-Before-And-After-Image-Comparison-Slide-Control-in-HTML5 */
        after = element.querySelector('.js__after');
        slider = element.querySelector('.js__slider');

        after.style.width = element.querySelector('.js__slider').value + '%';
    });
}

window.addEventListener(
    'load',
    moveDivisor()
);