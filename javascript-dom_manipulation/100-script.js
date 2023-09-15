document.addEventListener("DOMContentLoaded", function () {
    // Obtener la lista ul con clase "my_list"
    var my_list = document.querySelector(".my_list");
  
    // Obtener los elementos con id "add_item", "remove_item" y "clear_list"
    var add_item = document.getElementById("add_item");
    var remove_item = document.getElementById("remove_item");
    var clear_list = document.getElementById("clear_list");
  
    // Función para agregar un nuevo elemento <li> a la lista
    function addItem() {
      var newItem = document.createElement("li");
      newItem.textContent = "Item";
      my_list.appendChild(newItem);
    }
  
    // Función para eliminar el último elemento <li> de la lista
    function removeItem() {
      var items = my_list.getElementsByTagName("li");
      if (items.length > 0) {
        my_list.removeChild(items[items.length - 1]);
      }
    }
  
    // Función para borrar todos los elementos <li> de la lista
    function clearList() {
      my_list.innerHTML = "";
    }
  
    // Agregar eventos de clic a los elementos para realizar las acciones correspondientes
    add_item.addEventListener("click", addItem);
    remove_item.addEventListener("click", removeItem);
    clear_list.addEventListener("click", clearList);
  });
  