/* Check selbycontractflooring.co.uk for more details */

/* GROUP ORGANISMS / KEYBOARD SHORTCUTS / SHOW ALL KEYBOARD SHORTCUTS WITH A MODAL / TRIGGER
=================================================== */
/* Notes...

    - The script below is all encompassing. If you're already using GROUP MOLECULES / (NON CORE) / MODAL / DEMO then check the below script doesn't clash with that
    - You'll then need the following group from my CSS framework - GROUP MOLECULES / (NON CORE) / MODAL / (CROSS POLLINATED)
    - You might want to additonally add my CSS Framework CSS for tables
        + Under the 'striped' heading you might want to add something like this
        .c-modal-box table > tbody > tr:nth-child(odd) > td,
        .c-modal-box table > tbody > tr:nth-child(odd) > th {
            background: var(--colour-black-off-1);
        }
    - Finally you'll need to add some HTML to your page like this (try just before you call the footer, so you can show different shortcuts on different pages):

    <div class="js__modal-box u-animated--fade-in-up u-animated-fast">
        <svg aria-labelledby="title-modal-cancel" role="img" class="js__modal-close c-modal-close c-jg-icon c-jg-icon--cross"><title id="title-modal-cancel">Cancel modal</title><use xlink:href="/svg-icons/symbol-defs.svg#c-jg-icon--cross"></use></svg>

        <h3>Keyboard shortcuts</h3>
        <div class="js__modal-box__inner-scroll">
            <table>
                <tr>
                    <td><strong>T</strong></td>
                    <td>Show table of contents</td>
                </tr>
            </table>
        </div>
    </div>

*/
/* [1] Test whether a certain element is present before enabling */
Array.from(document.querySelectorAll('#btn-search-overlay') || []).forEach(element => {
    window.onkeyup = function(e) {
        // shift + ?
        if (e.keyCode == 191) {
            if (document.querySelector('html').classList.contains('js--modal-active')) {
                // Hide 'Keyboard shortcuts' modal if it's already up
                document.querySelector('html').classList.remove('js--modal-active');
            } else {
                // Show 'Keyboard shortcuts' modal
                document.querySelector('html').classList.add('js--modal-active');
            }
        }
    };
});
/* GROUP ORGANISMS / KEYBOARD SHORTCUTS / SHOW ALL KEYBOARD SHORTCUTS WITH A MODAL / MODAL
=================================================== */
/* The below is based on GROUP MOLECULES / (NON CORE) / MODAL / DEMO */
// [1] Create the modal element, ready for the `.js__modal-box`
let jfg_modal = document.createElement('div');
jfg_modal.classList.add('js__modal');
document.querySelector('body').appendChild(jfg_modal);
// [2] Show the modal which creates a background. This is in Atoms / Keyboard shortcuts
// [3] Add close action
Array.from(document.querySelectorAll('.js__modal-close')).forEach(element => {
    element.addEventListener('click', function(e) {
        document.querySelector('html').classList.remove('js--modal-active');
    });
});
// [4] Give the Escape Key as an option to exit too */
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 27) {
        document.querySelector('html').classList.contains('js--modal-active');
            document.querySelector('html').classList.remove('js--modal-active');
    }
});
/* GROUP ORGANISMS / KEYBOARD SHORTCUTS / SHOW ALL KEYBOARD SHORTCUTS WITH A MODAL / EXTRA TRIGGERS
=================================================== */
Array.from(document.querySelectorAll('.js__show-keyboard-shortcuts')).forEach(element => {
    element.addEventListener('click', function(e) {
        document.querySelector('html').classList.add('js--modal-active');
    });
});