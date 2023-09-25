$(document).ready(function() {
    // Add a click event handler to the div with id "red_header"
    $("#red_header").click(function() {
      // Select the <header> element using jQuery
      var header = $("header");
  
      // Update the text color to red (#FF0000)
      header.css("color", "#FF0000");
    });
  });
  