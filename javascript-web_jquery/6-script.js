$(document).ready(function() {
    // Add a click event handler to the div with id "update_header"
    $("#update_header").click(function() {
      // Select the <header> element using jQuery and update its text
      $("header").text("New Header!!!");
    });
  });
  