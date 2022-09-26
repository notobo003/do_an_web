const books = [
  {
    id: 1,
    author: "",
    title:
      "Muốn Thành Công Nói Không Với Trì Hoãn – 21 Nguyên Tắc Vàng Đập Tan Sự Trì Hoãn",
    srcImg: [
      "./Images/books/1.jpg",
      "./Images/books/1_1.jpg",
      "./Images/books/1_2.jpg",
      "./Images/books/1_3.jpg",
    ],
    price: 85200,
    currentPrice: 50000,
    description: "",
    quantity: 100,
  },
  {
    id: 2,
    author: "",
    title: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải faf fasd(Tái Bản)",
    srcImg: [
      "./Images/books/2.jpg",
      "./Images/books/2.jpg",
      "./Images/books/3.jpg",
      "./Images/books/4.jpg",
    ],
    price: 85200,
    currentPrice: 50000,
    quantity: 100,
  },
  {
    id: 3,
    author: "Damon Zahariades",
    title:
      "Muốn Thành Công Nói Không Với Trì Hoãn – 21 Nguyên Tắc Vàng Đập Tan Sự Trì Hoãn",
    srcImg: [
      "./Images/books/3.jpg",
      "./Images/books/4.jpg",
      "./Images/books/4.jpg",
    ],
    price: 85200,
    currentPrice: 50000,
    quantity: 100,
  },
  {
    id: 4,
    author: "Matthew Pollard, Derek Lewis",
    title: "Nghệ Thuật Bán Hàng Của Người Hướng Nội",
    srcImg: ["./Images/books/4.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 5,
    author: "Stephen R. Covey",
    title:
      "7 Thói Quen Hiệu Quả (The 7 Habits Of Highly Effective People) (Tái Bản)",
    srcImg: ["./Images/books/5.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 6,
    author: "Trác Nhã",
    title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ ( Tái Bản )",
    srcImg: ["./Images/books/6.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 7,
    author: "Adam Khoo",
    title: "Tôi Tài Giỏi - Bạn Cũng Thế (Tái Bản 2020)",
    srcImg: ["./Images/books/7.jpg"],
    price: 85200,
    currentPrice: 50000,
    description: "",
  },
  {
    id: 8,
    author: "Gino Wickman, Mark C. Winters",
    title: "Người Có Tầm Nhìn, Kẻ Biết Hành Động",
    srcImg: ["./Images/books/8.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 9,
    author: "Nancy Duarte",
    title: "HBR Guide To – Trình Bày Thuyết Phục (Tái Bản 2018)",
    srcImg: ["./Images/books/9.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 10,
    author: "Prakash Iyer",
    title: "Thói Quen Của Kẻ Thắng (Tái Bản 2018)",
    srcImg: ["./Images/books/10.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 11,
    author: "Zoe McKey",
    title: "Tư Duy Phản Biện",
    srcImg: ["./Images/books/11.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 12,
    author: "Scott H.Young",
    title: "Rèn Luyện Kỹ Năng Phát Triển Bản Thân",
    srcImg: ["./Images/books/12.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 13,
    author: "nhieu tac gia",
    title: "Thao túng tâm lý",
    srcImg: ["./Images/books/13.jpg"],
    price: 85200,
    currentPrice: 50000,
    description: "",
  },
  {
    id: 14,
    author: "Carol S. Dweck",
    title: "Tâm Lý Học Thành Công",
    srcImg: ["./Images/books/14.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 15,
    author: "Eran Katz",
    title: "Trí Tuệ Do Thái (Tái Bản 2018)",
    srcImg: ["./Images/books/15.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
  {
    id: 16,
    author: "Tạ Quốc Kế",
    title: "Điềm Tĩnh Và Nóng Giận",
    srcImg: ["./Images/books/16.jpg", "./Images/books/1.jpg"],
    price: 85200,
    currentPrice: 50000,
  },
];

const container_content = document.querySelector(".container-content");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 5;

function DisplayList(items, rows_per_page, page) {
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  console.log(start, end);
  let paginatedItems = items.slice(start, end);
  renderData(paginatedItems);
}
/* ======================== */
function renderData(dataArr) {
  const container = document.querySelector(".container-content");
  let htmls = "";
  dataArr.forEach((item) => {
    htmls += `<div class="card element${item.id}" onclick="showItemDetail(${
      item.id
    })"  >
                <img class="card__img" src="${item.srcImg[0]}" />  
                <div class="card__title">${item.title}</div>
                <div class="card__item__currentPrice">${numbertoVND(
                  item.currentPrice
                )}</div>
            </div>
        `;
  });
  return (container.innerHTML = htmls);
}
function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    console.log(btn);
    wrapper.appendChild(btn);
  }
}
/* ======================== */
function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;

    DisplayList(items, rows, current_page);

    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

/* goi ham */
DisplayList(books, rows, current_page);

SetupPagination(books, pagination_element, rows);

//
function changeImg(srcImg) {
  let imgPath = document.querySelector(".modal-body-left .card__img");
  imgPath.setAttribute("src", srcImg);
}

function showItemDetail(id) {
  let itemData = books.forEach((item) => {
    if (item.id === id) {
      const e = document.querySelector(".element" + id);
      const modal_container = document.querySelector("#modal-container");

      let htmls = `
        <div id="modal">
          <div class="modal-header">
            <p class="btn-close">
              <i class="fa-solid fa-xmark"> </i>
            </p>
            </div>
            <div class="modal-body">
              <div class="modal-body-left">
              <img class="card__img" src="${item.srcImg[0]}" />  
              <div class="modal__img-list">
              </div>
            </div>

            <div class="modal-body-right">
            <div class="card__title">${item.title}</div>
              <p class="card__author">Tác giả: ${item.author}</p>
              <div>
                <div class="card__currentPrice">${numbertoVND(
                  item.currentPrice
                )}</div>
                <div class="card__price">${numbertoVND(item.price)}</div>
              </div>
              <p>Số Lượng</p>
              <div class="card__quantityInput">
              <button class="cart__btn__down"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="remove-icon"></button>
              <input type="text" class="cart__input__quantity" value="1">
              <button class="cart__btn__up"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="add-icon"></button>
              
              </div>
              <button class="btn-add-to-cart" onclick="getIdCart(${
                item.id
              })">Thêm vào giỏ hàng</button>
          </div>

          </div>
          </div>
          <div class="modal-overlay"></div>
        `;
      modal_container.innerHTML = htmls;
      const overlay = document.querySelector(".modal-overlay");
      const modal = document.querySelector("#modal");
      const body = document.querySelector("html");
      getSrcImg(item);
      overlay.classList.add("show");
      modal.classList.add("show");
      // body.classList.add("show");
      modal.style.top = 15 + pageYOffset + "px";
      window.addEventListener("scroll", () => {
        setTopModal();
      });
      function setTopModal() {
        modal.style.top = 20 + pageYOffset + "px";
      }

      var btn_close = document.querySelector(".btn-close");
      btn_close.addEventListener("click", () => {
        overlay.classList.remove("show");
        modal.classList.remove("show");
        // body.classList.remove("show");
      });

      overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
        modal.classList.remove("show");
        // body.classList.remove("show");
      });

      const btnDown = document.querySelector(".cart__btn__down");
      const inputQuantity = document.querySelector(".cart__input__quantity");
      const btnUp = document.querySelector(".cart__btn__up");
      console.log(btnDown, btnUp);
      var quantityCount = 1;
      btnDown.addEventListener("click", () => {
        inputQuantity.value--;
        quantityCount--;
        if (quantityCount <= 0) {
          quantityCount = 0;
          inputQuantity.value = 0;
        }
      });
      btnUp.addEventListener("click", () => {
        inputQuantity.value++;
        quantityCount++;
      });
    }
  });

  function getSrcImg(item) {
    // let imgCount = 0;
    const imgList = document.querySelector(".modal__img-list");
    let htmls = "";
    item.srcImg.forEach((img, index) => {
      // imgCount++;
      return (htmls += `
      <img class="card__img" src="${item.srcImg[index]}" onclick="changeImg('${item.srcImg[index]}')"/>  
      `);
    });
    imgList.innerHTML = htmls;
    // const imgThumpnalList = document.querySelector(
    //   ".modal__img-list .card__img"
    // );
    // let widthCardList = (1 / imgCount) * 100;
    // console.log(imgThumpnalList);
    // console.log(widthCardList);
    // imgThumpnalList.style.width = widthCardList + "%";
  }
}
function Banner(status) {
  const banner = document.querySelector(".banner");
  if (status === "disable") return banner.classList.add("disable");
  else {
    return banner.classList.remove("disable");
  }
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

const searchData = [];
const inputSearch = document.querySelector(".header__search__input");
inputSearch.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    btnSearchSubmit.click();
  }
});
const btnSearchSubmit = document.querySelector(".header__search__btn");
btnSearchSubmit.addEventListener("click", () => {
  const inputSearchValue = document.querySelector(
    ".header__search__input"
  ).value;
  console.log(inputSearchValue);
  let searchItems = books.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(inputSearchValue.toLocaleLowerCase());
  });
  console.log(searchItems);
  Banner("disable");
  if (searchItems.length === 0) {
    container_content.innerHTML = `
      <div class="search__no-result-found">
          <p>Xin lỗi 😔 không có kểt quả với:<h3>${inputSearchValue}</h3></p>
          
          <img class="search__no-result-found__img" src="./Images/no_result_found.png" alt="">
      </div>
    `;
    pagination_element.classList.add("disable");
  } else {
    pagination_element.classList.remove("disable");

    DisplayList(searchItems, rows, current_page);
    SetupPagination(searchItems, pagination_element, rows);
  }
});
