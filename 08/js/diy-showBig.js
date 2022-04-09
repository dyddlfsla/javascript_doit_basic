var bigPic = document.getElementById("cup");
var smallPic = document.getElementsByClassName("small");

for (var i = 0; i < smallPic.length; i++) {
  smallPic[i].addEventListener("click", function () {
    bigPic.setAttribute("src", this.getAttribute("src"));
  })
}