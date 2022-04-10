var checkMark = document.getElementsByClassName("check");
var list = document.getElementsByTagName("li");

for (var i = 0; i < checkMark.length; i++) {
  checkMark[i].addEventListener("click", function () {
    this.parentNode.style.color = "#ccc";
  });
}