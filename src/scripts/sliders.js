// Слайдер с в табах с окнами
$(document).ready(function() {
    $('.section-5_slider').owlCarousel({
        margin:0,
        nav:true,
        navText:false,
        autoplay:true,
        loop: true,
        itemElement:'div',
        dots: false,
        navClass: ['section-5_slider__prev','section-5_slider__next'],
        responsive: {
            0: {
                items: 1,
            }
        }
    });
});