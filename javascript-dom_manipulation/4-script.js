document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento con id "add_item"
    var addItemButton = document.getElementById("add_item");
  
    // Obtener la lista con clase "mi_lista"
    var miLista = document.querySelector(".mi_lista");
  
    // Agregar un evento de clic al elemento "add_item"
    addItemButton.addEventListener("click", function () {
      // Crear un nuevo elemento <li>
      var newItem = document.createElement("li");
      
      // Establecer el contenido del nuevo elemento
      newItem.textContent = "Item";
      
      // Añadir el nuevo elemento a la lista
      miLista.appendChild(newItem);
    });
  });
  