document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de cabecera
    var header = document.querySelector("header");
  
    // Obtener el elemento con id "toggle_header"
    var toggleHeader = document.getElementById("toggle_header");
  
    // Agregar un evento de clic al elemento "toggle_header"
    toggleHeader.addEventListener("click", function () {
      // Verificar si la clase actual es "red" o "green"
      if (header.classList.contains("red")) {
        // Cambiar de "red" a "green"
        header.classList.remove("red");
        header.classList.add("green");
      } else {
        // Cambiar de "green" a "red"
        header.classList.remove("green");
        header.classList.add("red");
      }
    });
  });
  