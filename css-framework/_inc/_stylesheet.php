<?php
/* Notes...

    - Used to output stylesheets
    - Checks whether it's a dev environment to decide whether to serve `something.css` or `/prod/something.min.css`. This variable is set in `config.environment.php`
    - Includes cache flushing by checking for file modified date

    Example of use in a php file:
    <?php $filename = 'nameofstylesheet'; include '_inc/_stylesheet.php'; ?>

*/
if(($GLOBALS['use_developer_assets']) === true) {
    echo '<link rel="stylesheet" href="/css/' . $filename . '.css">';
} else {
    $CSSversion = filemtime($_SERVER['DOCUMENT_ROOT'].'/css/prod/' . $filename . '.min.css');
    echo '<link rel="stylesheet" href="/css/prod/' . $filename . '.min.' . $CSSversion . '.css" type="text/css">';
} ?>