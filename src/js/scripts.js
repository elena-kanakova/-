//Just main

// Маска для телефона
$(function(){
    $(".phone").mask("+7 999 999 99");
});

// Скролл и шапка
$('a.js-nav-link').click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + -110 + "px"
    }, {
        duration: 800
    });
});
$('a.js-nav-link-2').click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + -150 + "px"
    }, {
        duration: 800
    });
});


//Табы
$(function(){
    $(".section-5__tabs-nav").on("click", ".tab-nav", function(){
        var tabs = $(".section-5__tabs-nav .tab-nav"),
            cont = $(".section-5__tabs-content_wrap");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});

$(function(){
    $("#optima .section-5__tabs-nav-2").on("click", ".tab-nav-2", function(){
        var tabs = $("#optima .section-5__tabs-nav-2 .tab-nav-2"),
            cont = $("#optima .section-5__tabs-content-2_wrap");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});

$(function(){
    $("#premium .section-5__tabs-nav-2").on("click", ".tab-nav-2", function(){
        var tabs = $("#premium .section-5__tabs-nav-2 .tab-nav-2"),
            cont = $("#premium .section-5__tabs-content-2_wrap");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});



// Модальные окна
$(document).ready(function() {
    $('.modal-link, .link-modal_btn').click(function(e) {
        e.preventDefault();
        $('.modal').fadeOut('200');
        if ($(window).width() < 641) {
            $(".btn-menu").removeClass("open");
            $("#main-header").removeClass("open");
            $('html').removeClass("fixed");
            $(".main-header_item.main-menu, .main-header_item.main-header_contacts").fadeOut(200);
        };

        var id = '#' + $(this).attr('data-href');
        var id2 = $(this).offset().top,
            height = window.innerHeight / 2;

        $('html,#main-header').addClass('fixed');
        $('#overlay').fadeIn(200);
        $(id).fadeIn(200);
        $(id).css('top', window.scrollY + height + 'px');
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('#overlay, .modal').fadeOut(200);
        $('html,#main-header').removeClass('fixed');
    });

    $('body').on('click', '#overlay', function(event) {
        event.preventDefault();
        $('#overlay, .modal').fadeOut('200');
        $('html').removeClass('fixed');
    });
});

$('#pagepiling').pagepiling({
    verticalCentered: true,
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',

    /*onLeave: function(index, nextIndex, direction){
        //after leaving section 2
        if(index == 2 && direction =='down'){
            alert("Going to section 3!");
        }

        else if(index == 2 && direction == 'up'){
            alert("Going to section 1!");
        }
    }*/
});
// Модальные окна
$(document).ready(function() {
    $('.modal-link, .link-modal_btn').click(function(e) {
        e.preventDefault();
        $('.modal').fadeOut('200');
        if ($(window).width() < 641) {
            $(".btn-menu").removeClass("open");
            $("#main-header").removeClass("open");
            $('html').removeClass("fixed");
            $(".main-header_item.main-menu, .main-header_item.main-header_contacts").fadeOut(200);
        };

        var id = '#' + $(this).attr('data-href');
        var id2 = $(this).offset().top,
            height = window.innerHeight / 2;

        $('html,#main-header').addClass('fixed');
        $('#overlay').fadeIn(200);
        $(id).fadeIn(200);
        $(id).css('top', window.scrollY + height + 'px');
    });

    $('.close').click(function (e) {
        e.preventDefault();
        $('#overlay, .modal').fadeOut(200);
        $('html,#main-header').removeClass('fixed');
    });

    $('body').on('click', '#overlay', function(event) {
        event.preventDefault();
        $('#overlay, .modal').fadeOut('200');
        $('html').removeClass('fixed');
    });
});
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