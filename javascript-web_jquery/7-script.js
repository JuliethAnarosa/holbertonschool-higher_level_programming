$(document).ready(function() {
    // Make an AJAX GET request to the SWAPI URL
    $.get('https://swapi-api.hbtn.io/api/people/5/?format=json', function(data) {
      // Extract the character name from the response data
      var characterName = data.name;
      
      // Update the text content of the div with id "character" with the character name
      $('#character').text(characterName);
    });
  });
  