var num1 = parseInt(prompt("첫 번째 수를 입력하세요.", 0));
var num2 = parseInt(prompt("두 번째 수를 입력하세요.", 0));

var result = add(num1, num2);
document.write(`<p> 결과는 ${result} 입니다. </p>`);

function add(a, b) {
  var sum = a + b;
  return sum;
}