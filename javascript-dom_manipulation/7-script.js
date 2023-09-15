document.addEventListener("DOMContentLoaded", function () {
    // Obtener la lista ul con id "list_movies"
    var listMovies = document.getElementById("list_movies");
  
    // URL de la API
    var apiUrl = "https://swapi-api.hbtn.io/api/films/?format=json";
  
    // Realizar una solicitud a la API utilizando Fetch
    fetch(apiUrl)
      .then(function (response) {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error("No se pudieron obtener las películas");
        }
        // Parsear la respuesta como JSON
        return response.json();
      })
      .then(function (data) {
        // Obtener la lista de películas desde los datos
        var movies = data.results;
  
        // Iterar a través de las películas y agregar los títulos a la lista
        movies.forEach(function (movie) {
          var listItem = document.createElement("li");
          listItem.textContent = movie.title;
          listMovies.appendChild(listItem);
        });
      })
      .catch(function (error) {
        // Manejar errores en caso de que la solicitud falle
        console.error("Error:", error);
      });
  });
  