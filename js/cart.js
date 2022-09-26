let userCart = [];

const itemsCart = document.querySelector(".list__cart");
const cartBtnClose = document.querySelector(".cart__btnClose");
const cartOverlay = document.querySelector(".cart__overlay");
const cart = document.querySelector(".cart");
const cartItems = document.querySelector(".cart__items");

cart.addEventListener("click", () => {
  itemsCart.classList.add("show");
  cartOverlay.classList.add("show");
});
cartBtnClose.addEventListener("click", () => {
  itemsCart.classList.remove("show");
  cartOverlay.classList.remove("show");
});
cartOverlay.addEventListener("click", () => {
  itemsCart.classList.remove("show");
  cartOverlay.classList.remove("show");
});

function getIdCart(id) {
  let cartItem = books.find((item) => {
    return item.id === id;
  });
  console.log(cartItem);
  let duplicateCheck = userCart.some((item) => {
    return item.id === cartItem.id;
  });
  if (userCart.length === 0 || duplicateCheck === false) {
    userCart.push(cartItem);
  }
  const cartCount = document.querySelector(".cart__counter");
  cartCount.innerHTML = userCart.length;
  const noCart = document.querySelector(".cart__noCart");

  if (userCart.length > 0) {
    noCart.classList.add("disable");
    noCart.classList.add("show");
    cartItems.classList.add("show");
  }
  renderCart(userCart);
  const modal = document.querySelector("#modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  modal.classList.remove("show");
  modalOverlay.classList.remove("show");
}

const cartItemList = document.querySelector(".cart__items");
function renderCart(userCart) {
  let moneyCount = 0;
  let htmls = "";
  userCart.forEach((item, index) => {
    moneyCount += item.currentPrice;
    htmls += `
      <div class="cart__item">
      <img class="cart__item__img" src="${item.srcImg[0]}" alt="" />
      <div class="cart__item__title">
      ${item.title}
      </div>
      <div class="cart__item__quantity">
        <button>
          <img
            class="cart__btn__down"
            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
            alt="remove-icon"
          />
        </button>
        <input type="text" class="cart__input" value="1" />
        <button>
          <img
            class="cart__btn__up"
            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
            alt="add-icon"
          />
        </button>
      </div>

      <div class="cart__item__price"> ${numbertoVND(item.currentPrice)}</div>
      <div class="cart__item__trash" onclick="deleteItem(${item.id})">
        <i class="fa-solid fa-delete-left"></i>
      </div>  
      </div>
 `;
//  itemsCart.style.top = 15 + pageYOffset + "px";
  });

  let cartFooter = `<div class="cart__footer">
  <div class="cart__total">
    <div class="cart__total__title">Tổng tiền:</div>
    <p>${numberWithCommas(numbertoVND(moneyCount))}</p>
  </div>

  <button class="cart__btnOrder">Đặt Hàng</button>`;
  cartItemList.innerHTML = htmls + cartFooter;
  const btnInput = document.querySelector(".cart__input");
  console.log(btnInput);
  // btnInput.value = quantityCount;
  const deleteItemsCart = document.querySelectorAll(".cart__item__trash");
  console.log(userCart);
}
function deleteItem(id) {
  userCart.forEach((item) => {
    if (item.id === id) {
      return userCart.splice(id, 1);
    }
  });
}

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let result = parts.join(",");
  return result;
}
function numbertoVND(x) {
  return numberWithCommas(x) + " đ";
}
