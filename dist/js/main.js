/*********
  Modal
*********/
const modalEl = document.querySelector('.modal');
const modalTriggerEls = document.querySelectorAll('.modal-trigger');
const modalCloseEl = document.querySelector('.modal__close');

modalTriggerEls.forEach(elem => {
  elem.addEventListener('click', openModal);
})

modalCloseEl.addEventListener('click', closeModal);

window.addEventListener('click', e => {
  if (e.target === modalEl) {
    closeModal();
  }
})

function openModal() {
  modalEl.style.display = 'block';
}

function closeModal() {
  modalEl.style.display = 'none';
}


/*********
  Form
*********/
const prevBtnEl = document.querySelector('.form__prev');
const nextBtnEl = document.querySelector('.form__next');
const sectionEls = document.querySelectorAll('.form__section');
const dotEls = document.querySelectorAll('.form__dot')
const submitEl = document.querySelector('.form__submit')

