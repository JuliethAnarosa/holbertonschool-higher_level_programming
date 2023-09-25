$(document).ready(function() {
    // Make an AJAX GET request to the translation API
    $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
      // Extract the translation value from the response
      var translation = data.hello;
      
      // Select the <div> element with id "hello" and update its content
      $('#hello').text(translation);
    });
  });
  