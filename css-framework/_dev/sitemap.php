<!doctype html>
<html class="no-js" lang="en">

<?php 
    // "Include from root" so that we can use includes subfolders
    // Based on https://css-tricks.com/php-include-from-root, first comment
    set_include_path(implode( PATH_SEPARATOR, array(
        $_SERVER['DOCUMENT_ROOT'],
        get_include_path()
    )));
?>
<?php
    // then you just echo $some_variable_to_pass_into_the_include inside the include
    include '_inc/head.php';
    $site_logo_extra = 'site-logo--pull';
    $title_text = 'Talk <span class="site-logo__alt">Beauty</span>';
    $current_nav = 'home';
    include '_inc/header.php';
?>

<body>
    <!--[if IE]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]-->

    <?php /* Need tabindex="-1" to lock the tab focus here when using Skip to Content */?>
    <main tabindex="-1" id="main">
        <?php $filename = 'sitemap'; include '_inc/_stylesheet.php'; ?>
        <ul class="c-sitemap">
            <li>
                <a href="home.php">Home</a>
            </li>
            <li>
                <a href="about/index.php">About</a>
            </li>
            <li>
                <a href="shop/index.php">Shop</a>
                <ul>
                    <li>
                        <a href="shop/single/amly.php">Amly</a>
                    </li>
                    <li>
                        <a href="shop/single/de-mamiel.php">De Mamiel</a>
                    </li>
                    <li>
                        <a href="shop/single/evolve.php">Evolve</a>
                    </li>
                    <li>
                        <a href="shop/single/kure-bazaar.php">Kure Bazaar</a>
                    </li>
                </ul>
            </li>
            <li>
                <span>Talk</span>
                <ul>
                    <li>
                        <a href="talk/skin-coverage.php">Skin Coverage</a>
                    </li>
                </ul>
            </li>
            <li>
                <span>Videos</span>
                <ul>
                    <li>
                        <a href="talk/dry-skin.php">Dry Skin</a>
                    </li>
                    <li>
                        <a href="talk/fixing-dry-skin.php">Fixing Dry Skin</a>
                    </li>
                    <li>
                        <a href="talk/sensitive-skin.php">Sensitive Skin</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="learn.php">Learn</a>
            </li>
        </ul>
    </main>

    <?php include '_inc/footer.php'; ?>
</body>

</html>
