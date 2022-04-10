var userId = document.getElementById("user-id");
userId.addEventListener("change", checkIdLength);

function checkIdLength() {
  if (userId.value.length < 4 || userId.value.length > 15) {
    alert("4 ~ 15 자리의 영문자를 입력해주세요.");
    userId.select();
  }
  //아이디 입력 필드에 영문과 숫자가 조합되어 입력되었는지를 확인하려면 자바스크립트의 정규 표현식을 이용해야 합니다.
  //select() 함수는 자바스크립트 안에 내장되어 있는 함수로 텍스트 필드에 입력된 내용을 선택하는 함수입니다.
}

var firstPw = document.querySelector("#user-pw1");
var secondPw = document.querySelector("#user-pw2");

firstPw.addEventListener("change", checkPwLength);
secondPw.addEventListener("change", isEqualPw);

function checkPwLength() {
  if (firstPw.value.length < 8) {
    alert("비밀번호는 8자리 이상이어야 합니다.");
    firstPw.value = "";
    firstPw.focus();
  }
}
/*
* select() 함수는 사용자가 기존에 입력한 값을 선택시키는 함수이고 focus() 함수는 해당 필드로 커서 입력을 이동시킵니다.
* */
function isEqualPw() {
  if (firstPw.value != secondPw.value) {
    alert("비밀번호가 동일하지 않습니다. 다시 확인해주세요.");
    secondPw.value = "";
    secondPw.focus();
  }
}


