function newRegister() {
  var nameText = document.getElementById("userName");

  if (nameText.value != "") {
    var newUser = document.createElement("p");
    var newName = document.createTextNode(nameText.value);
    newUser.appendChild(newName);
    nameText.value = null;

    var userList = document.getElementById("nameList");
    userList.insertBefore(newUser, userList.childNodes[0] );

    var delBtn = document.createElement("span");
    var btnText = document.createTextNode("X");
    delBtn.appendChild(btnText);
    delBtn.setAttribute("class", "del");

    newUser.appendChild(delBtn);

    var delBtnArray = document.getElementsByClassName("del");
    for (var i = 0; i < delBtnArray.length; i++) {
      delBtnArray[i].addEventListener("click", function () {
        userList.removeChild(this.parentNode);
      })
    }
  }

}
