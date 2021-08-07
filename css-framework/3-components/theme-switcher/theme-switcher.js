/* Notes...

    - Used on https://portfolio-memorial.jaygeorge.co.uk

    1. Executed when a button is clicked
    2. Remembers theme choice through localstorage
    3. Theme is re-applied on every page load depending on localstorage variable saved

*/
/* HTML Example...

    <button class="js__button-switch-theme">

*/

/* GROUP FUNCTION SETUP
=================================================== */
function gender_male() {
    document.querySelector('main').innerHTML = document.querySelector('main').innerHTML
    .replace(/ trained her /g, ' trained him ')
    .replace(/ her /g, ' his ')
    .replace(/ Her /g, ' His ')
    .replace(/ woman/g, ' man')
    .replace(/ lady /g, ' man ')
    .replace(/mother/g, 'father')
    .replace(/ she /g, ' he ')
    .replace(/ She /g, ' He ');
}

function gender_female() {
    document.querySelector('main').innerHTML = document.querySelector('main').innerHTML
    .replace(/ trained him /g, ' trained her ')
    .replace(/ his /g, ' her ')
    .replace(/ His /g, ' Her ')
    .replace(/ man /g, ' lady ')
    .replace(/ father /g, ' mother ')
    .replace(/ he /g, ' she ')
    .replace(/ He /g, ' She ');
}

function set_theme(previous_theme_name, previous_theme_name_short, theme_name, theme_name_short, gender) {
    // document.getElementById('portrait_image').srcset = '/img/' + theme_name.toLowerCase() + '.jpg';
    let html_class = 'js-added--s-theme-' + theme_name.toLowerCase();

    /* [1] If a theme has already been applied ... */
    var check_if_initial_theme_has_been_applied = document.querySelector('html[class*="js-added--s-theme-"]');
    if (typeof(check_if_initial_theme_has_been_applied) != 'undefined' && check_if_initial_theme_has_been_applied != null){
        /* [2] Remove any existing classes - https://stackoverflow.com/questions/28608587/how-to-remove-a-class-that-starts-with */
        var el = document.querySelector('html[class*="js-added--s-theme-"]');
        el.classList.forEach(className => {
            if (className.startsWith('js-added--s-theme-')) {
                el.classList.remove(className);
            }
        });
    }
    /* [3] Add the new class */
    document.querySelector('html').classList.add(html_class);

    // Create a regex object so we can use a variable in a regex expression
    // https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
    let previous_theme_name_object = new RegExp(previous_theme_name,'g');
    let previous_theme_name_short_object = new RegExp(previous_theme_name_short,'g');

    document.querySelector('main').innerHTML = document.querySelector('main').innerHTML
    .replace(previous_theme_name_object, theme_name)
    .replace(previous_theme_name_short_object, theme_name_short)

    if(gender === 'male') {
        gender_male();
    }

    if(gender === 'female') {
        gender_female();
    }
}




/* GROUP REMEMBERING THEME
=================================================== */
if (localStorage.getItem('theme') === 'Jack') {
    set_theme('Charlotte', 'Charlie', 'Jack', 'Jak', 'male');
}

if (localStorage.getItem('theme') === 'Sophia') {
    set_theme('Charlotte', 'Charlie', 'Sophia', 'Sophie', 'female');
}

if (localStorage.getItem('theme') === 'Abhinav') {
    set_theme('Charlotte', 'Charlie', 'Abhinav', 'Abi', 'male');
}

if (localStorage.getItem('theme') === 'Charlotte') {
    set_theme('Charlotte', 'Charlie', 'Charlotte', 'Charlie', 'female');
}

/* If there is no theme set then set it to Charlotte, the default */
if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'Charlotte');
}




/* GROUP THEME SWITCHER BUTTON
=================================================== */
document.querySelector('.js__button-switch-theme').onclick = function(){
    switch(localStorage.getItem('theme')) {
        /* If the theme name is the default of Charlotte, then apply the Jack theme */
        case 'Charlotte':
            localStorage.setItem('theme', 'Jack');
            set_theme('Charlotte', 'Charlie', 'Jack', 'Jak', 'male');
            break;
        /* If the theme name is Jack, then apply the Sophia theme */
        case 'Jack':
            localStorage.setItem('theme', 'Sophia');
            set_theme('Jack', 'Jak', 'Sophia', 'Sophia', 'female');
            break;
        /* If the theme name is Sophia, then apply the Abhinav theme */
        case 'Sophia':
            localStorage.setItem('theme', 'Abhinav');
            set_theme('Sophia', 'Sophie', 'Abhinav', 'Abi', 'male');
            break;
        /* If the theme name is Abhinav, then loop back around to the Charlotte theme */
        case 'Abhinav':
            localStorage.setItem('theme', 'Charlotte');
            set_theme('Abhinav', 'Abi', 'Charlotte', 'Charlie', 'female');
    }
};
