$(document).ready(function() {
    // Add a click event handler to the div with id "red_header"
    $("#red_header").click(function() {
      // Select the <header> element using jQuery
      var header = $("header");
  
      // Add the class "red" to the <header> element
      header.addClass("red");
    });
  });
  