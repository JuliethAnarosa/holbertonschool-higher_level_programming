document.addEventListener("DOMContentLoaded", function () {
    // URL de la API
    var apiUrl = "https://hellosalut.stefanbohacek.dev/?lang=fr";
  
    // Realizar una solicitud a la API utilizando Fetch
    fetch(apiUrl)
      .then(function (response) {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error("No se pudo obtener la traducción de 'hola'");
        }
        // Parsear la respuesta como texto
        return response.text();
      })
      .then(function (data) {
        // Obtener el valor de "hola" desde los datos
        var holaValue = data;
        
        // Mostrar la traducción en el elemento HTML con id "hola"
        var holaElement = document.getElementById("hola");
        holaElement.textContent = holaValue;
      })
      .catch(function (error) {
        // Manejar errores en caso de que la solicitud falle
        console.error("Error:", error);
      });
  });
  