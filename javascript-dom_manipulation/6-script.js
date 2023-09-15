document.addEventListener("DOMContentLoaded", function () {
    // Obtener la etiqueta con el id "personaje"
    var personajeDiv = document.getElementById("personaje");
  
    // URL de la API
    var apiUrl = "https://swapi-api.hbtn.io/api/people/5/?format=json";
  
    // Realizar una solicitud a la API utilizando Fetch
    fetch(apiUrl)
      .then(function (response) {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error("No se pudo obtener el personaje");
        }
        // Parsear la respuesta como JSON
        return response.json();
      })
      .then(function (data) {
        // Obtener el nombre del personaje desde los datos
        var nombrePersonaje = data.name;
        
        // Mostrar el nombre del personaje en la etiqueta HTML
        personajeDiv.textContent = "Nombre del personaje: " + nombrePersonaje;
      })
      .catch(function (error) {
        // Manejar errores en caso de que la solicitud falle
        console.error("Error:", error);
      });
  });
  