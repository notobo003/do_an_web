const containerTable = document.querySelector(".order__container");
const table = containerTable.querySelector("table");
const btnClose = document.querySelector(".order__container-btn-close");
const orderOverlay = document.querySelector(".order__overlay");
const order = document.querySelector(".header__login-order");
order.addEventListener("click", () => {
  orderOverlay.classList.toggle("show");
  containerTable.classList.toggle("show");
});
btnClose.addEventListener("click", () => {
  order.click();
});
orderOverlay.addEventListener("click", () => {
  order.click();
});
