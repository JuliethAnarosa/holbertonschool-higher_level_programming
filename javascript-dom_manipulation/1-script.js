document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento con id "red_header"
    var redHeader = document.getElementById("red_header");
  
    // Agregar un evento de clic al elemento
    redHeader.addEventListener("click", function () {
      // Seleccionar el elemento de cabecera por su etiqueta
      var header = document.querySelector("header");
  
      // Actualizar el color del texto a rojo (#FF0000)
      header.style.color = "#FF0000";
    });
  
    // Hacer que el elemento "red_header" sea clickeable
    redHeader.style.cursor = "pointer";
  });
  