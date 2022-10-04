const books1 = [
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
    currentPrice: 10000,
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
    currentPrice: 20000,
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
    currentPrice: 30000,
    quantity: 100,
  },
  {
    id: 4,
    author: "Matthew Pollard, Derek Lewis",
    title: "Nghệ Thuật Bán Hàng Của Người Hướng Nội",
    srcImg: ["./Images/books/4.jpg"],
    price: 85200,
    currentPrice: 40000,
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
];

function renderProducts(arrProducts, element, nameCategory) {
  let htmls = "";
  arrProducts.forEach((item) => {
    htmls += `
    <div class="container__row-card" onclick="showItemDetail(${item.id})">
    <img src="${item.srcImg[0]}" alt="" />
    <div class="container__row-card-title">${item.title}</div>
    <div class="container__row-card-price">${item.currentPrice}</div>
  </div>
    `;
  });
  let container = `
    <div class="container__row-header">
          <span class="container__row-header-heading"> Sách Mới</span>
          <span onclick="showAllProducts('${nameCategory}')" class="container__row-header-seeMore" >Xem tất cả</span>
        </div>

        <button class="container__row-btn-prev" >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="container__row-btn-next" >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="container__row-wrap-list">${htmls}</div>
    `;
  element.innerHTML = container;
}
function showAllProducts(nameCategory) {
  const banner = document.querySelector(".banner");
  const toolbar = document.querySelector(".toolbar__search");
  const container = document.querySelector(".container-content");
  const pagination_element = document.getElementById("pagination");
  const productContainer = document.querySelector(".product__container");
  const btnBack = document.querySelector(".controler");
  banner.style.display = "none";
  productContainer.style.display = "none";
  container.style.display = "flex";
  toolbar.style.display = "flex";
  pagination.style.display = "flex";
  window.scrollTo(0, 0);
  let current_page = 1;
  let rows = 5;

  //   DisplayList(books1, item, currentPage);
  //   SetupPagination(books1, pagination, item);
  DisplayList(books1, rows, current_page);
  SetupPagination(books1, pagination_element, rows, current_page);

  btnBack.addEventListener("click", () => {
    banner.style.display = "block";
    productContainer.style.display = "block";
    container.style.display = "none";
    toolbar.style.display = "none";
    pagination.style.display = "none";
  });
}

const productContaier = document.querySelectorAll(".container__row");
renderProducts(books1, productContaier[0], "books1");
renderProducts(books1, productContaier[1]);
