'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 1. If we use the bracket () to the function.
// 2. It immediately call the function as soon as javascript executes this line.
// 3. We want this function to call when the event is happen.
// btnCloseModal.addEventListener('click', closeModal());
// overlay.addEventListener('click', closeModal());

document.addEventListener('keydown', function (e) {
  console.log(e);
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
  }
});
