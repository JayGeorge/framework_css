<?php

/* Template Name: Map */

/**
 *
 * @package WordPress
 * @subpackage Addy and Steve
 * @since Addy and Steve 1.0
 */

get_header(); ?>

<?php /*

<?php while ( have_posts() ) : the_post(); ?>

  <div class="entry-content">
    <h2><?php the_title(); ?></h2>

    <?php the_content(); ?>
  </div>

<?php endwhile; // end of the loop. ?>

*/ ?>
<div class="l-w-mx-1">
  <div class="l-w-l-0 u-center-horizontal">
    <div class="l-row">
      <div class="title-container animated animated--delayed js-req__animated--on-load animated--fade-in-up-big p-t-s-1 t--1">
        <div class="d-background-filigree-1 d-background-1--1">
          <div class="d-background-filigree-1 d-background-1--2">
            <h1 class="p-t-filigree p-b-title t-l c-2 u-center-horizontal"><?php the_title();?></h1>
          </div>
        </div>
      </div>
    </div><!-- .l-row -->
    <div class="content-wrapper m-b-l-2 animated animated--delayed animated--fade-in">
      <!-- GROUP GOOGLE MAPS
      =================================================== -->
      <div id="map-canvas"></div>
    </div>

    <script type="text/javascript">
      function initialize() {

          var myLatlng = new google.maps.LatLng(51.518887, -3.375095);

          var myOptions = {
              zoom: 10,
              center: myLatlng,
              disableDefaultUI: true,
              navigationControl: true,
              scrollwheel: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP,

              /* http://snazzymaps.com/style/80/cool-gray */
              styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
          }

          var map = new google.maps.Map(document.getElementById("map-canvas"),
              myOptions);

          /*   Custom marker */
          setMarkers(map, stdavidsmarkers);
      }

      /**
      * Data for the markers consisting of a name, a LatLng and a zIndex for
      * the order in which these markers should display on top of each
      * other.
      */
      /* Multiple icons source http://stackoverflow.com/questions/16266772/google-maps-multiple-custom-markers */
      var stdavidsmarkers = [
      ['St Davids Church', 51.518716, -3.374614, 4, '<?php bloginfo( 'template_url' ); ?>/img/icon-church.svg'],
      ['Fonmon Castle', 51.403639, -3.371134, 4, '<?php bloginfo( 'template_url' ); ?>/img/icon-castle.svg']
      ];

      function setMarkers(map,locations) {
      // Add markers to the map

      // !!!IMPORTANT!!!
      // Marker sizes are expressed as a Size of X,Y
      // where the origin of the image (0,0) is located
      // in the top left of the image.

      // Origins, anchor positions and coordinates of the marker
      // increase in the X direction to the right and in
      // the Y direction down.

      var image = new google.maps.MarkerImage("<?php bloginfo( 'template_url' ); ?>/img/icon-castle.png",
      // OR var image = new google.maps.MarkerImage(".../wp-content/themes/catalystjr/img/salon-bucklaw.png",
      // This marker is 55 pixels wide by 55 pixels tall.
      new google.maps.Size(110, 110),
      // The origin for this image (from the top left) is 0,0. =JFG. These numbers should ideally be the image dimensions.
      new google.maps.Point(0,0),
      // The anchor for this image is the base of the Icon. =JFG e.g. if the icon origin has a bottom arrow tip in the middle, these coordinates should be that point. Keep in mind this is measured from the top left of the icon.
      new google.maps.Point(0,55));

      // Shapes define the clickable region of the icon.
      // The type defines an HTML <area> element 'poly' which
      // traces out a polygon as a series of X,Y points. The final
      // coordinate closes the poly by connecting to the first coordinate.
      // =JFG. the easiest method to plot these out is by using xScope guides. Put extra spaces between coordinate pairs to improve readability.
      var shape = {
          coord: [1, 1, 1, 55, 55, 55, 55, 1],
          type: 'poly'
      };

      for (var i = 0; i < locations.length; i++) {
          var stdavidsmarker = locations[i];
          var myLatLng = new google.maps.LatLng(stdavidsmarker[1], stdavidsmarker[2]);
          var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              clickable: false,
              /* shadow: shadow, */
              icon: stdavidsmarkers[i][4],
              shape: shape,
              title: stdavidsmarker[0],
              zIndex: stdavidsmarker[3]
          });
      }
      }

      google.maps.event.addDomListener(window, 'load', initialize);
  </script>

    </div><!-- .l-w-mx -->
</div>

<?php get_footer(); ?>