$(document).ready(function() {
    // Make an AJAX GET request to the SWAPI URL for films
    $.get('https://swapi-api.hbtn.io/api/films/?format=json', function(data) {
      // Extract the list of movies from the response data
      var movies = data.results;
      
      // Select the <ul> element with id "list_movies"
      var ulElement = $('#list_movies');
      
      // Iterate over the movies and add each title to the <ul>
      $.each(movies, function(index, movie) {
        var liElement = $('<li>').text(movie.title);
        ulElement.append(liElement);
      });
    });
  });
  