var now = new Date(); // 오늘 날짜 정보를 저장
var firstDay = new Date("2018-02-01"); // 처음 만난 날에 대한 날짜 정보를 저장

var passedTime = (now.getTime() - firstDay.getTime()); // 처음 만난 날과 현재 사이에 흐른 시간을 getTime()의 밀리초로 계산
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 계산되어 나온 흐른 시간을 '일'로 변환한다.

document.querySelector("#accent").innerText = `${passedDay} 일`;

function calcDate(days) {
  var anniversary = new Date(firstDay.getTime() + days * (1000 * 60 * 60 * 24));
  var anniversaryYear = anniversary.getFullYear();
  var anniversaryMonth = anniversary.getMonth() + 1;
  var anniversaryDate = anniversary.getDate();

  document.querySelector(
      "#date" + days).innerText = `${anniversaryYear} 년 ${anniversaryMonth} 월 ${anniversaryDate} 일입니다.`;
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);