let modalSearch = document.querySelector('.modal-container');
let searchButton = document.querySelector('.search-btn');
let closeModalSearchBtn = document.querySelector('.modal-close-button');

searchButton.addEventListener('click', function() {
  modalSearch.classList.add('modal-container-opened');
});

closeModalSearchBtn.addEventListener('click', function() {
  modalSearch.classList.remove('modal-container-opened');
});
