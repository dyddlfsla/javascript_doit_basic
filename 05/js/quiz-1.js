var num1 = parseInt(prompt("첫 번째 수를 입력하세요."), 0);
var num2 = parseInt(prompt("두 번째 수를 입력하세요."), 0);
var result = sumMulti(num1, num2);

document.write(`결과는 ${result} 입니다.`);

function sumMulti(a, b) {
  if (a === b) {
    return a * b;
  } else {
    return a + b;
  }
}