let english = true; // english or swedish

let content = english ? {
    title: 'Hello World',
    content: 'This is a simple content'
} : {
    title: 'Hej Världen',
    content: 'Detta är ett enkelt innehåll'
}

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function updateCarousel() {
        const offset = -currentItem * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentItem = (currentItem > 0) ? currentItem - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentItem = (currentItem < items.length - 1) ? currentItem + 1 : 0;
        updateCarousel();
    });
});
