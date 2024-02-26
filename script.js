const buttonEl = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

buttonEl.addEventListener("click", function () {
  popup.classList.toggle("hidden");
});
