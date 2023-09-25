$(document).ready(function() {
    // Add a click event handler to the div with id "toggle_header"
    $("#toggle_header").click(function() {
      // Select the <header> element using jQuery
      var header = $("header");
  
      // Toggle the "red" and "green" classes on the <header> element
      if (header.hasClass("red")) {
        header.removeClass("red").addClass("green");
      } else {
        header.removeClass("green").addClass("red");
      }
    });
  });
  