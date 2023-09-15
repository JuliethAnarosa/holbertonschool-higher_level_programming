document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento con id "actualizar_cabecera"
    var updateHeaderButton = document.getElementById("actualizar_cabecera");
  
    // Obtener el elemento de encabezado
    var header = document.querySelector("header");
  
    // Agregar un evento de clic al elemento "actualizar_cabecera"
    updateHeaderButton.addEventListener("click", function () {
      // Actualizar el texto del elemento de encabezado
      header.textContent = "¡¡¡Nuevo encabezado!!!";
    });
  });
  