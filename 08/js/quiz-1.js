var p = document.getElementById("myText");
p.addEventListener("click", changeCss);

function changeCss() {
  p.style.fontSize = "20px";
  p.style.color = "blue";
  p.style.backgroundColor = "#ccc";
}