document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento con id "red_header"
    var redHeader = document.getElementById("red_header");
  
    // Agregar un evento de clic al elemento
    redHeader.addEventListener("click", function () {
      // Seleccionar el elemento de cabecera por su etiqueta
      var header = document.querySelector("header");
  
      // Agregar la clase "red" al elemento de cabecera
      header.classList.add("red");
    });
  });
  