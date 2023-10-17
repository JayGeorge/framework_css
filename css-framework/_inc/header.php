<a href="#main" class="skip-to-content u-screen-reader-text" title="Skip to content">
    Skip to content
</a>

<a href="#footer" class="skip-to-content u-screen-reader-text" title="Skip to footer navigation">
    Skip to footer navigation
</a>

<header class="c-site-header">
    <div class="c-site-header__site-logo">
        <div class="c-site-logo">
            <a href="/" aria-label="Go to the home page">
                <svg><title>Home page</title></svg>
            </a>
        </div>

        <!--*
        or
        

        <div class="c-site-header__site-logo">
            <div class="c-site-logo">
                <a href="/" aria-label="Go to the home page">
                    Site Title here
                </a>
    </div>
        </div>
        *-->
    </div>

    <button class="c-nav-mobile-button js__navMobileButton u-js-only">
        <?php
            /* Animate this when closed */
            // include 'img/nav.php'; <-- you can find this in my framework
        ?>
    </button>

    <nav aria-label="Main navigation" class="c-site-header__nav nav--centered o-nav-flex">
    <!-- <nav aria-label="Main navigation" class="c-site-header__nav nav--centered js__collapsedUntilNavOpened"> <-- use this instead for collapsed nav (most common, you only _don't_ want to use this if you only have a few items that show all the time e.g. jaygeorge.co.uk) *-->
        <ul>
            <?php /* 
                Here you can add the class .o-current-menu-item by the calling the header with a variable like this:
                $current_nav = 'catalogue';
                include '_inc/header.php';
            */ ?>
            <?php 
                $nav_name = 'About us'; include '_inc/nav-links.php';
                $nav_name = 'News'; $url= 'news/index'; include '_inc/nav-links.php';
                $nav_name = 'Contact'; unset($url); include '_inc/nav-links.php';
            ?>
        </ul>
    </nav>

</header>
<!--[if IE]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
<![endif]-->