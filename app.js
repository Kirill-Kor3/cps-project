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

showMore.addEventListener('click', () => {
    const isBrandsToggled = brandsSlider.classList.toggle('brands__visible');
    showMore.textContent = isBrandsToggled ? 'Скрыть' : 'Показать еще';
    imgRotate.classList.toggle('brands__img-rotate');
});