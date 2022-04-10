var checkStatus = document.querySelector("#shippingInfo");

checkStatus.addEventListener("click", function () {
  //<input type="checkbox"> 로 만들어진 체크박스 요소는 그 안에 checked 라는 속성을 가지고 있는데
  // 해당 체크박스가 체크되어 있다면 true 를, 아니면 false 를 반환합니다.
  if (checkStatus.checked) {
    document.ship.shippingName.value = document.order.billingName.value;
    document.ship.shippingTel.value = document.order.billingTel.value;
    document.ship.shippingAddr.value = document.order.billingAddr.value;
  } else { //체크되어 있지 않다면 해당 필드 초기화
    document.ship.shippingName.value = "";
    document.ship.shippingTel.value = "";
    document.ship.shippingAddr.value = "";
  }
})