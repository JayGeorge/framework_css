<?php include "../head.php"; ?>
<body>
    <main class="search-overlay-demo">
        <button id="btn-search-overlay" class="btn btn--search-overlay">
            <svg class="c-jg-icon c-jg-icon--search"><use xlink:href="#c-jg-icon--search"></use></svg>
        </button>
        <div class="c-search-overlay js__search-overlay">
            <button id="btn-search-overlay-close" class="btn btn--search-overlay-close" aria-label="Close search form">
                <svg class="c-jg-icon c-jg-icon--close"><use xlink:href="#c-jg-icon--close"></use></svg>
            </button>
            <div class="c-search-overlay__inner">
                <form class="c-search-overlay__form" action="https://tympanus.net/Development/SearchUIEffects/index.html">
                    <input class="c-search-overlay__input" name="search" type="search" placeholder="e.g. Andrew Lincoln" tabindex="-1">
                    <span class="c-search-overlay__info">
                        Hit enter to search or ESC to close
                    </span>
                </form>
                <div class="c-search-overlay__related">
                    <div class="c-search-overlay__related__col">
                        <h3>May We Suggest?</h3>
                        <p>#drone #funny #catgif #broken #lost #hilarious #good #red #blue #nono #why #yes #yesyes #aliens #green</p>
                    </div>
                    <div class="c-search-overlay__related__col">
                        <h3>Is It This?</h3>border: 3px dashed red!important;
                        <p>#good #red #hilarious #blue #nono #why #yes #yesyes #aliens #green #drone #funny #catgif #broken #lost</p>
                    </div>
                    <div class="c-search-overlay__related__col">
                        <h3>Needle, Where Art Thou?</h3>
                        <p>#broken #lost #good #red #funny #hilarious #catgif #blue #nono #why #yes #yesyes #aliens #green #drone</p>
                    </div>
                </div><!-- .c-search-overlay__related -->
            </div><!-- .c-search-overlay__inner -->
        </div>
    <!-- /search -->
    </main>

    <?php include "../footer.php"; ?>