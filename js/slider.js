const productContainer = [
  ...document.querySelectorAll(".container__row-wrap-list"),
];
const btnPrev = [...document.querySelectorAll(".container__row-btn-prev")];
const btnNext = [...document.querySelectorAll(".container__row-btn-next")];

const card = productContainer[0].querySelector(".container__row-card");
let cardWidth = card.getBoundingClientRect().width;
productContainer.forEach((item, i) => {
  let containerDimentions = item.getBoundingClientRect();
  // let a = item.getBoundingClientRect();
  let containerWidth = containerDimentions.width;
  // let containerFixed = containerDimentions.width;
  let tiLe = Math.floor(containerWidth / cardWidth);

  window.addEventListener("resize", () => {
    item.scrollLeft = 0;
    containerDimentions = item.getBoundingClientRect();
    containerWidth = containerDimentions.width;
    cardWidth = card.getBoundingClientRect().width;
    tiLe = Math.floor(containerWidth / cardWidth);
    console.log(tiLe);
    console.log(containerWidth);  
    console.log(cardWidth);
  });

  btnPrev[i].addEventListener("click", () => {
    if (item.scrollLeft <= 0) {
      item.scrollLeft = containerWidth;
    } else {
      console.log(item.scrollLeft);

      item.scrollLeft -= Math.ceil(containerWidth / tiLe);
    }
  });

  btnNext[i].addEventListener("click", () => {
    console.log(item.scrollLeft);
    if (item.scrollLeft >= 1200) {
      // item.scrollLeft = 0;
    } else {
      item.scrollLeft += Math.ceil(containerWidth / tiLe);
    }
  });
});