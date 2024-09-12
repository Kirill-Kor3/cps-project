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

const menuBtnOpen = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuSmoke = document.querySelector('.menu-smoke');
const menuBtnClose = document.querySelector('.menu__btn-back');

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

menuBtnOpen.addEventListener('click', () => {
    menu.classList.toggle('menu__container-open');
    menuSmoke.classList.toggle('menu-smoke--open');
});

menuBtnClose.addEventListener('click', () => {
    menu.classList.remove('menu__container-open');
    menuSmoke.classList.remove('menu-smoke--open');
});
