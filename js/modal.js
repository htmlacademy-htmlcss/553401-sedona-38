let modalSearch = document.querySelector('.modal-container');
let searchButton = document.querySelector('.search-btn');
let closeModalSearchBtn = document.querySelector('.modal-close-button');

searchButton.onclick = function(event) {
  event.preventDefault();
  modalSearch.classList.add('modal-container-opened');
};

closeModalSearchBtn.onclick = function(event) {
  event.preventDefault();
  modalSearch.classList.remove('modal-container-opened');
};
