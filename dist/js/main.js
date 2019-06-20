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

window.addEventListener('mousedown', e => {
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

/***************
  Contact Menu
****************/
const contactEl = document.querySelector('.nav__item--contact');
const contactInfoEl = document.querySelector('.nav__contact-box');

contactEl.addEventListener('click', (e) => {
  if (contactInfoEl.style.display === 'block') {
    contactInfoEl.style.display = 'none';
  } else {
    contactInfoEl.style.display = 'block';
  }
})


/*********
  Form
*********/
const prevBtnEl = document.querySelector('.form__prev');
const nextBtnEl = document.querySelector('.form__next');
const sectionEls = document.querySelectorAll('.form__section');
const sectionOneInputEls = document.querySelectorAll('.form__section--1 .form__text-input');
const sectionTwoInputEls = document.querySelectorAll('.form__section--2 .form__text-input');
const progressEl = document.querySelector('.form__progress');
const dotEls = document.querySelectorAll('.form__dot');
const submitEl = document.querySelector('.form__submit');
const confirmationEl = document.querySelector('.form__confirmation');
const confirmationCloseEl = document.querySelector('.form__confirmation-close');
const emailInputEl = document.querySelector('.form__email');
const errorEl = document.querySelector('.form__error');

let currentSection = 0;

nextBtnEl.addEventListener('click', _ => {
  if (currentSection === 0) {
    if (validateSection(sectionOneInputEls)) {
      currentSection++;
      showSection();
    }
  } else if (currentSection === 1) {
      if(validateSection(sectionTwoInputEls)) {
        currentSection++;
        showSection();
    }
  }
});

prevBtnEl.addEventListener('click', _ => {
  currentSection--;
  showSection();
});

emailInputEl.addEventListener('keyup', redBorder);

confirmationCloseEl.addEventListener('click', closeConfirmation);



function validateSection(section) {
  let numErrors = 0;

  section.forEach(input => {
    // If either the input is blank, or the email is invalid, show an error
    if (input.value === '' || !validateEmail()) {
      numErrors++;
      showError();
    }
  });

  return numErrors > 0 ? false : true;
}

function showSection() {
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

function validateEmail() {
  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return regEx.test(emailInputEl.value);
}

function redBorder() {
  if (!validateEmail()) {
    emailInputEl.style.border = '2px solid red';
  } else {
    emailInputEl.style.border = 'none';
  }
}

function showError() {
  errorEl.style.display = 'block';

  setTimeout(_ => {
    errorEl.style.display = 'none';
  }, 2500);
}

function closeConfirmation() {
  confirmationEl.style.display = 'none';
}