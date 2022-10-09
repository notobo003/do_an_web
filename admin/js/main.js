// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
const customers = document.querySelector(".customers__btn");
const category = document.querySelector(".category__btn");
const orders = document.querySelector(".orders__btn");

orders.addEventListener("click", () => {
  handleShow("orders");
});
category.addEventListener("click", () => {
  handleShow("category");
});
customers.addEventListener("click", () => {
  handleShow("customers");
});
function handleShow(name) {
  const listTable = document.querySelectorAll(".center");
  listTable.forEach((item) => {
    item.classList.remove("show");
    if (item.classList.contains(name)) {
      item.classList.add("show");
    }
  });
}

const categoryTbody = document.querySelector(".category table tbody");
function render(arr, eTbody) {
  let htmls = "";
  arr.forEach((item) => {
    htmls += `
    <tr>
    <td>${item.id}</td>
    <td>
    <img src=".${item.srcImg[0]}" alt=""></td>
    <td>.${item.title}</td>
    <td>${item.description}</td>
    <td>${item.currentPrice}</td>
    <td>
        <div class="toolkit">
            <div class="edit">
                <i class="fa-solid fa-wrench"></i>
            </div>
            <div class="edit">
                <i class="fa-solid fa-trash"></i>
            </div>

        </div>
    </td>
</tr>
    `;
  });
  eTbody.innerHTML = htmls;
}
render(books, categoryTbody);
