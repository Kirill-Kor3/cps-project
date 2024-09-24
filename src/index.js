import './scss/style.scss';
// import './img'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      centeredSlides: true,

    breakpoints: { 
        320: { 
            enabled: true, 
        }, 
        768: { 
            enabled: false, 
        } 
    },
});

const showMore = document.querySelector('.brands__more');
const brandsSlider = document.querySelector('.swiper');
const imgRotate = document.querySelector('.brands__img');

const moreEquipment = document.querySelector('.equipment__more');
const equipmentSlider = document.querySelector('.equipment__slider');
const equipmentRotate = document.querySelector('.equipment__img');

const moreText = document.querySelector('.basic-information__more');
const text = document.querySelector('.basic-information__container');
const textImg = document.querySelector('.basic-information__expand');


const menuBtnOpen = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuSmoke = document.querySelector('.menu-smoke');
const menuBtnClose = document.querySelector('.menu__btn-back');

const modalFeedbackOpen = document.querySelector('.contact__btn-message');
const modalFeedback = document.querySelector('.modal-feedback');
const modalSmoke = document.querySelector('.modal-feedback-smoke');
const modalFeedbackClose = document.querySelector('.modal-feedback__btn-back');

const modalCallOpen = document.querySelector('.contact__btn-phone');
const modalCall = document.querySelector('.modal-call');
const modalCallClose = document.querySelector('.modal-call__btn-back');

showMore.addEventListener('click', () => {
    const isBrandsToggled = brandsSlider.classList.toggle('brands__visible');
    showMore.textContent = isBrandsToggled ? 'Скрыть' : 'Показать еще';
    imgRotate.classList.toggle('brands__img-rotate');
});

moreEquipment.addEventListener('click', () => {
    const isEquipmentToggled = equipmentSlider.classList.toggle('brands__visible');
    moreEquipment.textContent = isEquipmentToggled ? 'Скрыть' : 'Показать еще';
    equipmentRotate.classList.toggle('brands__img-rotate');
});

moreText.addEventListener('click', () => {
    const isTextToggled = text.classList.toggle('text-visible');
    moreText.textContent = isTextToggled ? 'Скрыть' : 'Читать далее';
    textImg.classList.toggle('text-img--rotate');
});


menuBtnOpen.addEventListener('click', () => {
    menu.classList.toggle('menu__container-open');
    menuSmoke.classList.toggle('menu-smoke--open');
});

menuBtnClose.addEventListener('click', () => {
    menu.classList.remove('menu__container-open');
    menuSmoke.classList.remove('menu-smoke--open');
});

modalFeedbackOpen.addEventListener('click', () => {
    modalFeedback.classList.toggle('modal-feedback-open');
    modalSmoke.classList.toggle('modal-feedback-smoke--open');
});

modalFeedbackClose.addEventListener('click', () => {
    modalFeedback.classList.remove('modal-feedback-open');
    modalSmoke.classList.remove('modal-feedback-smoke--open');
    menu.classList.remove('menu__container-open');
    menuSmoke.classList.remove('menu-smoke--open');
});

modalCallOpen.addEventListener('click', () => {
    modalCall.classList.toggle('modal-call-open');
    modalSmoke.classList.toggle('modal-feedback-smoke--open');
});

modalCallClose.addEventListener('click', () => {
    modalCall.classList.remove('modal-call-open');
    modalSmoke.classList.remove('modal-feedback-smoke--open');
    menu.classList.remove('menu__container-open');
    menuSmoke.classList.remove('menu-smoke--open');
});

menuSmoke.addEventListener( 'click', () => {
        menu.classList.remove('menu__container-open');
        menuSmoke.classList.remove('menu-smoke--open');
})

modalSmoke.addEventListener ('click', () => {
    modalFeedback.classList.remove('modal-feedback-open');
    modalCall.classList.remove('modal-call-open');
    modalSmoke.classList.remove('modal-feedback-smoke--open');
    menu.classList.remove('menu__container-open');
    menuSmoke.classList.remove('menu-smoke--open');
});