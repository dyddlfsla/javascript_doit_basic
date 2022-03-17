var inventory = new Array();

var addItemBtn = document.querySelector("#add");
addItemBtn.addEventListener("click", addItem);

function addItem() {
  var input = document.querySelector("#item");

  if (input.value != null) {
    inventory.push(input.value);
    input.value = "";
    input.focus();
  }
  showInventory();
}

function showInventory() {
  var list = "<ul>";
  for (var i = 0; i < inventory.length; i++) {
    list += "<li>" + inventory[i] + "<span class='close' id=" + i + ">X</span></li>";
  }
  list += "</ul>";
  document.querySelector("#itemList").innerHTML = list;
  var deleteBtn = document.querySelectorAll(".close");
  for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", removeItem);
  }

}
function removeItem() {
  inventory.splice(this.getAttribute("id"), 1);
  showInventory();
}