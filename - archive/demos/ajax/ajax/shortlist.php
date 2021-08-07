<?php

// If the AJAX request has a variable of 'artists'...
if ( isset( $_REQUEST['artists'] ) ) {
    header( "Content-type:application/json" ); // theoretically not needed as jQuery handles the specifics

    // Decode the AJAX the JSON 'data' request
    $artists = json_decode( $_REQUEST[ 'artists' ] );
    // Returns the sequence of elements from the array.
    $artists = array_slice( $artists, 2 );
    // R-encode the AJAX 'data' request as JSON
    echo json_encode( $artists );
}

die();

?>
