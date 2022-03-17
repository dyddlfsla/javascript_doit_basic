var itemList = [];

var addBtn = document.querySelector("#add"); // add 인 요소를 가져와 addBtn 으로 저장
addBtn.addEventListener("click", addList); // addBtn 에 'click' 이벤트와 이벤트 핸들러를 지정

function addList() {
  var item = document.querySelector("#item").value; // 텍스트 필드 내용 가져오기
  if (item != null) {
    itemList.push(item);
    document.querySelector("#item").value = ""; // id = "item" 인 요소 값 지움
    document.querySelector("#item").focus(); // 텍스트 필드에 focus() 함수 적용
  }
  showList();
}

function showList() {
  var list = "<ul>"; // 목록을 시작하는 <ul> 태그 저장
  for (var i = 0; i < itemList.length; i++) {
    list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; //배열의 각 요소 반복하여 <li></li> 로 묶음
  }
  list += "</ul>"; // 목록을 끝내는 </ul> 태그 저장
  document.querySelector("#itemList").innerHTML = list; // list 변숫값 표시

  var remove = document.querySelectorAll(".close"); // 삭제 버튼을 배열 형태로 저장

  for (var i = 0; i < remove.length; i ++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id"); //this (누른 삭제 버튼)의 id 값 가져와 id 변수에 저장
  itemList.splice(id, 1); //itemList 배열에서 인덱스 값이 id 인 요소부터 1개를 삭제.
  showList(); // 변경된 itemList 를 다시 화면에 표시
}