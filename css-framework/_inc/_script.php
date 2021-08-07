<?php
/* Notes...

    - Used to output deferred script files, as per https://csswizardry.com/2018/11/css-and-network-performance
    - Checks whether it's a dev environment to decide whether to serve `something.js` or `/prod/something.min.js`. This variable is set in `config.environment.php`
    - Includes cache flushing by checking for file modified date

    Example of use in a php file:
    <?php $filename = 'nameofscript'; include '_inc/_script.php'; ?>

*/
if(($GLOBALS['use_developer_assets']) === true) {
    echo '<script defer="" src="/js/' . $filename . '.js"></script>';
} else {
    $JSversion = filemtime($_SERVER['DOCUMENT_ROOT'].'/js/prod/' . $filename . '.min.js');
    echo '<script defer="" src="/js/prod/' . $filename . '.min.' . $JSversion . '.js"></script>';
} ?>