//select modal-btn, modal-overlay and close btn
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// listen for click events on modal btn and close btn

modalBtn.addEventListener("click", function () {
  //   console.log(modalOverlay.classList);
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
