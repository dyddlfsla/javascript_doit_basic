function newRegister() {
  var newP = document.createElement("p");
  var userName = document.querySelector("#userName").value;
  var newText = document.createTextNode(userName);
  newP.appendChild(newText);
  var nameList = document.querySelector("#nameList");
  // nameList.appendChild(newP);  appendChild() 함수는 괄호 안에 있는 노드를 가장 마지막 노드로 추가한다.
  nameList.insertBefore(newP, nameList.childNodes[0]); // insertBefore 를 사용하여 괄호 안의 노드를 가장 첫번째 노드로 추가하게 한다.
  userName = "";

  var delBtn = document.createElement("span");
  var delText = document.createTextNode("X");
  var attr = document.createAttribute("class");
  attr.value = "del";
  delBtn.appendChild(delText);
  delBtn.setAttributeNode(attr);
  newP.appendChild(delBtn);

  var removeBtn = document.querySelectorAll(".del");

  for (var i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", function () {
      nameList.removeChild(this.parentNode);
    })
  }
}