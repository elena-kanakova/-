// Слайдер с в табах с окнами
$(document).ready(function() {
    $('.section-5_slider').owlCarousel({
        margin:0,
        nav:true,
        navText:false,
        autoplay: false,
        loop: false,
        dots: false,
        navClass: ['section-5_slider__prev','section-5_slider__next'],
        responsive: {
            0: {
                items: 1,
            }
        }
    });
});

$(document).ready(function() {
    $('#project-gallery_slider').owlCarousel({
        margin:0,
        nav:true,
        navText:false,
        autoplay: false,
        loop: false,
        dots: false,
        navClass: ['section-5_slider__prev','section-5_slider__next'],
        responsive: {
            0: {
                items: 1,
            }
        }
    });
});

$(document).ready(function() {
    $('#slider_certificates').owlCarousel({
        margin:10,
        nav:true,
        navText:false,
        autoplay: false,
        loop: false,
        dots: false,
        navClass: ['','section-5_slider__next'],
        responsive: {
            0: {
                items: 3,
            }
        }
    });
});

$(document).ready(function() {
    $('#slider_team').owlCarousel({
        margin:0,
        nav:true,
        navText:false,
        autoplay: false,
        loop: false,
        dots: false,
        navClass: ['','section-5_slider__next'],
        responsive: {
            0: {
                items: 1,
            }
        }
    });
});

$(document).ready(function() {
    $('#slider_opinions').owlCarousel({
        margin:10,
        nav:true,
        navText:false,
        autoplay: false,
        loop: false,
        dots: false,
        navClass: ['','section-5_slider__next'],
        responsive: {
            0: {
                items: 3,
            }
        }
    });
});