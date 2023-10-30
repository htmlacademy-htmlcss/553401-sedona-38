let viewLinks = document.querySelectorAll('.view-link');
let productList = document.querySelector('.product-list');

if (viewLinks && productList) {
  viewLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();

      viewLinks.forEach((nonActiveLink) => {
        nonActiveLink.classList.remove('view-link-active');
      });
      link.classList.add('view-link-active');

      let linkData = link.dataset.view;
      productList.dataset.view = linkData;
    });
  });
}
