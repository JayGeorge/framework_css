<head>
    <?php include('config.environment.php'); ?>

    <meta charset="utf-8">
    <title><?php echo $page_title; ?> &middot; Site Name &middot; Replace me</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->

    <?php $filename = 'core'; include '_inc/_stylesheet.php'; ?>

    <meta name="theme-color" content="#fafafa">
    <?php if(($GLOBALS['production']) !== true) {
        // Don't index unless we're in production
        echo '<meta name="robots" content="noindex, nofollow">';
    } ?>

    <?php /* GROUP WEB FONTS
    =================================================== */ ?>
    <?php /* Highest priority because render blocking. If we put the stylesheet at the very top we do not need to use preload. */ ?>
    <?php /* Typekit */ ?>
    <!-- <link rel="stylesheet" href="https://use.typekit.net/dsl0psv.css"> -->

    <!-- OR -->

    <?php /* Google Fonts */ ?>
    <!-- <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,700|Sue+Ellen+Francisco" rel="stylesheet"> -->

    <?php /* GROUP JAVASCRIPT
    =================================================== */ ?>
    <script>
        /* Tell the html ASAP (without JS) to prevent a flicker of DOM changes e.g. nav collapsed. */
        document.querySelector('html').classList.remove('no-js');
        document.querySelector('html').classList.add('js');
    </script>

    <?php /*
    - Place all async JS at the top of the head - https://csswizardry.com/2018/11/css-and-network-performance
    - All JS should use either async or defer so we can call it before CSS for best performance - https://twitter.com/csswizardry/status/1078374711044788224
    - For any other JS, load it inline using defer so we can keep 'modules' together. */ ?>
    <?php /*
        $filename = 'script'; include '_inc/_script.php';
    */ ?>
</head>