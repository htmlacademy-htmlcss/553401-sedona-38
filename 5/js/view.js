let viewLinks = document.querySelectorAll('.view-link');
let productList = document.querySelector('.product-list');

for (let viewLink of viewLinks) {
  viewLink.onclick = function(event) {
    event.preventDefault();

    viewLinks.forEach(function(element) {
      element.classList.remove('view-link-active');
    });
    viewLink.classList.add('view-link-active');
    if (viewLink.classList.contains('view-link-preview')) {
      productList.classList.add('product-list-preview');
      productList.classList.remove('product-list-table');
    } else if (viewLink.classList.contains('view-link-table')) {
      productList.classList.add('product-list-table');
      productList.classList.remove('product-list-preview');
    } else {
      productList.classList.remove('product-list-preview');
      productList.classList.remove('product-list-table');
    }
  }
};
