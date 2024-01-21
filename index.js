const burgerBtn = document.querySelector(".header-buttons__burger");
const closeBtn = document.querySelector(".popup-close__icon");
const popup = document.querySelector(".header__popup");

burgerBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
