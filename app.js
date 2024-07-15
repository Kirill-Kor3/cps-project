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
const slides = document.querySelectorAll('.brands__slide');
const totalSlides = slides.length;
let items = getInitialItems();
let isExpanded = false;

function getInitialItems() {
    return window.innerWidth > 1039 ? 8 : 6;
}

function updateVisibleItems() {
    const array = Array.from(document.querySelector('.brands__slider-wrapper').children);
    const visItems = array.slice(0, items);
    const hidItems = array.slice(items);

    visItems.forEach(el => {
        el.classList.add('brands__visible');
    });
    hidItems.forEach(el => {
        el.classList.remove('brands__visible');
    });
}

showMore.addEventListener('click', () => {
    if (!isExpanded) {
        // Показать больше карточек
        items = Math.min(items + 5, totalSlides);
        showMore.textContent = 'Скрыть';
        showMore.style.background = '#F8F8F8 url(../img/icon.svg) no-repeat left center';
    } else {
        // Скрыть карточки
        items = getInitialItems();
        showMore.textContent = 'Показать все';
        showMore.style.background = '#F8F8F8 url(../img/expand.svg) no-repeat left center';
    }
    
    updateVisibleItems();
    isExpanded = !isExpanded;
});

// Обновить видимость карточек при изменении размера окна
window.addEventListener('resize', () => {
    if (!isExpanded) {
        items = getInitialItems();
        updateVisibleItems();
    }
});

// Инициализация видимости карточек при загрузке страницы
updateVisibleItems();
