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
const dotEls = document.querySelectorAll('.form__dot');
const submitEl = document.querySelector('.form__submit');

let currentSection = 0;

nextBtnEl.addEventListener('click', _ => {
  currentSection++;
  displaySection();
});

prevBtnEl.addEventListener('click', _ => {
  currentSection--;
  displaySection();
});

function displaySection() {
  sectionEls.forEach((section, index) => {
    if (index === currentSection) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  })

  showButtons();
  showDots();
}

function showButtons() {
  if (currentSection === 0) {
    prevBtnEl.style.display = 'none';
    nextBtnEl.style.display = 'block';
    submitEl.style.display = 'none';
  }
  if (currentSection === 1) {
    prevBtnEl.style.display = 'block';
    nextBtnEl.style.display = 'block';
    submitEl.style.display = 'none';
  }
  if (currentSection === 2) {
    nextBtnEl.style.display = 'block';
    nextBtnEl.style.display = 'none';
    submitEl.style.display = 'block';
  }
}

function showDots() {
  dotEls.forEach((dot, index) => {
    if (index === currentSection) {
      dot.style.height = '1.75rem';
      dot.style.width = '1.75rem';
      dot.style.backgroundColor = '#3ECF8E';
    } else {
      dot.style.height = '1.25rem';
      dot.style.width = '1.25rem';
      dot.style.backgroundColor = '#97ECC6';
    }
  })
}