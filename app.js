'use strict';
//selecting and saving necessary elements
const container = document.querySelector('.container');
const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const btnSedans = document.querySelector('.btn-sedans');
const btnSuvs = document.querySelector('.btn-suvs');
const btnLuxury = document.querySelector('.btn-luxury');
const btnCloseModal = document.querySelector('.close-modal')
const sedans = document.querySelector('.sedans');
const suvs = document.querySelector('.suvs');
const luxury = document.querySelector('.luxury');

//hiding the modal window
modal.classList.add('hide-modal');

//show-modal event
const showModal = function () {
    modal.classList.remove('hide-modal');
    container.style.opacity = '0.20';
}

//hide-modal event
const hideModal = function () {
    modal.classList.add('hide-modal');
    container.style.opacity = '1';
}

//applying the show-modal event to each button
btnSedans.addEventListener('click', function () {
    showModal();
})

btnCloseModal.addEventListener('click', function () {
  hideModal()
})

btnSuvs.addEventListener('click', function () {
    showModal();
})

btnLuxury.addEventListener('click', function () {
    showModal();
})