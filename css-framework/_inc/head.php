<head>
    <?php include('config.environment.php'); ?>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php /* GROUP TITLE
    =================================================== */ ?>
    <title><?php echo $page_title; ?> &middot; Site Name &middot; Replace me</title>

    <?php /* GROUP WEB FONTS
        ===================================================
        Source: https://stackoverflow.com/questions/60411231/preload-typekit-font-css
        https://use.typekit.net & https://p.typekit.net is the font file origin (Lighthouse required both links from Adobe)
        It may not have the same origin as the CSS file (https://use.typekit.net/pgd3inh.css)
    */ ?>
    <link rel="preconnect" href="https://use.typekit.net" crossorigin>
    <link rel="preconnect" href="https://p.typekit.net" crossorigin>
    <link rel="stylesheet" href="https://use.typekit.net/wyy0pka.css"/>

    <!-- OR -->

    <?php /* Google Fonts */ ?>
    <!-- <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,700|Sue+Ellen+Francisco" rel="stylesheet"> -->

    <?php /* GROUP CSS
    =================================================== */ ?>
    <?php $filename = 'style'; include '_inc/_stylesheet.php'; ?>

    <?php /* GROUP JAVASCRIPT
    =================================================== */ ?>
    <?php /* 
        - Place all JS at the top of the head - https://csswizardry.com/2018/11/css-and-network-performance
        - All JS should use either async or defer for best performance - https://twitter.com/csswizardry/status/1078374711044788224
    */ ?>
    <script>
        <?php /* Highlight the current page in the nav */ ?>
        document.addEventListener('DOMContentLoaded', (event) => {
            const navLinks = document.querySelectorAll('[data-js-highlight-current-nav] a');
            console.log(navLinks);
            const currentPage = window.location.pathname;

            navLinks.forEach((link) => {
                if (link.pathname === currentPage) {
                    console.log(link.pathname);
                    link.setAttribute('data-js-current-page', '');
                }
            });
        });
    </script>
    <?php /* GROUP JAVASCRIPT / FRAMEWORKS USING DEFER
    =================================================== */ ?>
    <?php /* <script defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js"></script> */ ?>
    <?php /* GROUP JAVASCRIPT / CUSTOM SCRIPTS USING DEFER
    =================================================== */ ?>
    <?php // $filename = 'script'; include '_inc/_script.php'; ?>
    <?php /* GROUP JAVASCRIPT / THIRD PARTY ANALYTICS USING DEFER
    =================================================== */ ?>
    <?php if(($GLOBALS['production']) == true) { ?>
        <?php /* <script src="https://cdn.usefathom.com/script.js" data-site="CVUUZVZT" defer></script> */ ?>
    <?php } ?>


    <?php /* GROUP Everything else ('SEO' meta tags, icons, Open Graph, etc.)
    =================================================== */ ?>
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