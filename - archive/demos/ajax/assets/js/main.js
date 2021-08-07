$('#load-content').on('click', function(e) {
    e.preventDefault();

    $.ajax({
        // Submits data to be processed to a specified resource. The POST method NEVER caches data.
        type: 'POST',
        // Relative path
        url: 'ajax/shortlist.php',

        data: {
            // Pass the server some data
          artists: JSON.stringify(['person 1', 'person 2', 'person 3'])
        },

        success: function(response) {
            // Add the response of the div to our page
          $('.ajax-content').append(response);
        }
    });
});
