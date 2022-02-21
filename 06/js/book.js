function Book(title, author, volume, price) {
  this.title = title;
  this.author = author;
  this.volume = volume;
  this.price = price;
}

var book01 = new Book("웹 표준의 정석", "Ko", "608", "28000");
var book02 = new Book("유튜브 영상 만들기", "Kim", "368", "16000");
var book03 = new Book("점프 투 파이썬", "Park", "352", "18800");

var bookList = [book01, book02, book03];

document.write("<h1>책 제목으로 살펴보기</h1>");
for (var i = 0; i < bookList.length; i++) {
  document.write("<p>" + bookList[i].title + "</p>");
}

document.write("<h1>책 제목으로 살펴보기</h1>");
for (var i = 0; i < bookList.length; i++) {
  document.write("<p>" + bookList[i].price + "</p>");
}
