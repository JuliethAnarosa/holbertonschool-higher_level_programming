document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM
    var languageCodeSelect = document.getElementById("language_code");
    var btnTranslate = document.getElementById("btn_translate");
    var helloDiv = document.getElementById("hello");
  
    // Función para realizar la traducción y actualizar el elemento HTML
    function translateHello() {
      // Obtener el valor seleccionado en el combo box
      var languageCode = languageCodeSelect.value;
  
      // Verificar si se seleccionó un idioma válido
      if (languageCode === "") {
        helloDiv.textContent = "Please choose an option";
        return;
      }
  
      // Construir la URL de la API con el código de idioma
      var apiUrl = "https://hellosalut.stefanbohacek.dev/?lang=" + languageCode;
  
      // Realizar una solicitud a la API utilizando Fetch
      fetch(apiUrl)
        .then(function (response) {
          // Verificar si la solicitud fue exitosa
          if (!response.ok) {
            throw new Error("Translation request failed");
          }
          // Parsear la respuesta como texto
          return response.text();
        })
        .then(function (data) {
          // Actualizar el elemento HTML con la traducción
          helloDiv.textContent = data;
        })
        .catch(function (error) {
          // Manejar errores en caso de que la solicitud falle
          console.error("Error:", error);
        });
    }
  
    // Agregar un evento de clic al botón "Translate"
    btnTranslate.addEventListener("click", translateHello);
  });
  