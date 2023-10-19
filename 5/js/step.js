const btnMath = document.querySelectorAll('.modal-btn-math');

if (btnMath) {
  btnMath.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('modal-btn-minus')) {
        btn.nextElementSibling.stepDown();
      }

      if (btn.classList.contains('modal-btn-plus')) {
        btn.previousElementSibling.stepUp();
      }
    });
  });
}
