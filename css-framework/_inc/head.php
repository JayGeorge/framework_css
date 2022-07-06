<head>
    <?php include('config.environment.php'); ?>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php /* GROUP TITLE
    =================================================== */ ?>
    <title><?php echo $page_title; ?> &middot; Site Name &middot; Replace me</title>

    <?php /* GROUP JAVASCRIPT FRAMEWORKS
    =================================================== */ ?>
    <?php /* GROUP CUSTOM JAVASCRIPT
    ===================================================
        - Place all JS at the top of the head - https://csswizardry.com/2018/11/css-and-network-performance
        - All JS should use either async or defer so we can call it before CSS for best performance - https://twitter.com/csswizardry/status/1078374711044788224
        - script tags that link to external sources should be here too as well since they are synchronous and render-blocking
        - For any other JS, load it inline using defer so we can keep 'modules' together.
    */ ?>
    <script>
        /* Tell the html ASAP (without JS) to prevent a flicker of DOM changes e.g. nav collapsed. */
        document.querySelector('html').classList.remove('no-js');
        // document.querySelector('html').classList.add('js');
        document.querySelector('html').setAttribute('data-js-enabled', '');
        window.addEventListener('load', function(){
            document.querySelector('html').setAttribute('data-js', 'document-loaded');
        });
    </script>
    <?php
        // $filename = 'script'; include '_inc/_script.php';
    ?>

    <?php /* GROUP WEB FONTS
    =================================================== */ ?>
    <?php /* Highest priority because render blocking. An additional preload improves the Lighthouse score. */ ?>
    <?php /* Typekit */ ?>
    <!-- <link rel="preload" href="https://use.typekit.net/orn0fry.css" as="font" crossorigin> -->
    <!-- <link rel="stylesheet" href="https://use.typekit.net/orn0fry.css"> -->

    <!-- OR -->

    <?php /* Google Fonts */ ?>
    <!-- <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,700|Sue+Ellen+Francisco" rel="stylesheet"> -->

    <?php /* GROUP CSS
    =================================================== */ ?>
    <?php $filename = 'core'; include '_inc/_stylesheet.php'; ?>

    <meta name="description" content="">
    <?php if(($GLOBALS['production']) !== true) {
        // Don't index unless we're in production
        echo '<meta name="robots" content="noindex, nofollow">';
    } ?>

    <?php /* GROUP FAVICONS
    =================================================== */ ?>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=ng92BNYyPs">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=ng92BNYyPs">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=ng92BNYyPs">
    <link rel="manifest" href="/favicons/site.webmanifest?v=ng92BNYyPs">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=ng92BNYyPs" color="#000000">
    <link rel="shortcut icon" href="/favicons/favicon.ico?v=ng92BNYyPs">
    <meta name="apple-mobile-web-app-title" content="Jay George Web Design">
    <meta name="application-name" content="Jay George Web Design">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-config" content="/favicons/browserconfig.xml?v=ng92BNYyPs">
    <meta name="theme-color" content="#000000">
</head>