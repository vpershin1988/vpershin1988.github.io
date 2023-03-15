const modalOpenButton = document.querySelector(".button-search");
const modalContainer = document.querySelector(".modal-container");
const modalCloseButton = document.querySelector(".modal-close-button");

function openModal() {
  if (modalContainer.classList.contains("modal-container-close")) {
    modalContainer.classList.remove("modal-container-close");
  }
}

function closeModal() {
  modalContainer.classList.add("modal-container-close");
}


modalOpenButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
