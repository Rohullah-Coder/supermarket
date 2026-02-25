const categoriesBtn = document.querySelector(".categoriesBtn");
const categoriesContainer = document.querySelector(".categoriesContainer");
categoriesBtn.addEventListener("mouseenter", () => {
  categoriesContainer.classList.toggle("h-0");
  categoriesContainer.classList.toggle("hidden");
});

const cartBtn = document.querySelector(".cartBtn");
const cartContainer = document.querySelector(".miniCartContainer");
cartBtn.addEventListener("mouseenter", () => {
  cartContainer.classList.toggle("h-0");
  cartContainer.classList.toggle("hidden");
});
