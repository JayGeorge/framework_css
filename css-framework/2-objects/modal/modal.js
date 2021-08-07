/* GROUP FRAMEWORK / (NON CORE) / MODAL
=================================================== */
// [1] Create the modal element, ready for the `.js__modal-box`
const jfg_modal = document.createElement('div');
jfg_modal.classList.add('js__modal');
document.querySelector('body').appendChild(jfg_modal);
jfg_modal.insertAdjacentHTML('afterbegin', '<div class="js__modalBox"><button class="js__closeModal"><svg aria-labelledby="title-modal-cancel" role="img" class="modal-close" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m91.668 19.172l-10.844-10.832-30.828 30.82-30.824-30.82-10.84 10.836 30.824 30.824-30.824 30.824 10.84 10.836 30.824-30.82 30.828 30.82 10.844-10.836-30.828-30.824z"/></svg></button><div class="js__modalBox__inner-scroll">Content that needs to be scrollable</div></div>');

// [2] Show the modal which creates a background
// If you're using a button...
Array.from(document.querySelectorAll('.js__showModal')).forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('html').classList.add('js--modalActive');
        // Focus the modal close button.
        jfg_modal.querySelector('button').focus();
        // Leave a breadcrumb for getting back to the previous focus point
        element.classList.add('js__previousFocusPoint');
    });
});

// [2] Attach an event
function escape_modal() {
    if(document.querySelector('html').classList.contains('js--modalActive')) {
        document.querySelector('html').classList.remove('js--modalActive');
        // Get back to the previous focus point
        document.querySelector('.js__previousFocusPoint').focus();
        // Remove the breadcrumb
        document.querySelector('.js__previousFocusPoint').classList.remove('js__previousFocusPoint');
    }
}
// ...to the close icon
Array.from(document.querySelectorAll('.js__closeModal')).forEach(element => {
    element.addEventListener('click', function() {
        escape_modal();
    });
});
// ...or a keyboard shortcut to escape the modal
document.addEventListener('keydown', (event) => {
    if (!event.repeat && event.key === 'Escape') {
        escape_modal();
    }
});
// ...or clicking outside the modal
// If there is a click in the modal overlay area
Array.from(document.querySelectorAll('.js__modal')).forEach(element => {
    element.addEventListener('click', function(event) {
        // If the click happens inside the actual modal box (and not the background), then bail
        if (event.target.closest('.js__modalBox')) return;
            // Otherwise we must be outside the modal box so close the modal
            escape_modal();
    });
});