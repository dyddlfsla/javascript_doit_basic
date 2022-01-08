var num1 = parseInt(prompt("첫 번째 수를 입력하세요."), 0);
var num2 = parseInt(prompt("두 번째 수를 입력하세요."), 0);

compare(num1, num2);

function compare(a, b) {
  if (a > b) {
    alert(`${a} 가 더 큰 숫자입니다.`);
  } else {
    alert(`${b} 가 더 큰 숫자입니다.`);
  }
}