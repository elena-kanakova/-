// Маска для телефона
$(function(){
    $(".phone").mask("+7 999 999 99");
});

//Табы
$(function(){
    $('.section-5__tabs-nav .tab-nav:first').addClass('active');
    $('.section-5__tabs-content_wrap:first').addClass('active');
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
    $('#optima .section-5__tabs-nav-2 .tab-nav-2:first').addClass('active');
    $('#optima .section-5__tabs-content-2_wrap:first').addClass('active');
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
    $('#premium .section-5__tabs-nav-2 .tab-nav-2:first').addClass('active');
    $('#premium .section-5__tabs-content-2_wrap:first').addClass('active');
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

// Магнифик

$(document).ready(function () {
    $('.section-8_slider__slider-wrap .slide').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    $('#slider_opinions .slide').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });

    $('.section-5_slider .slide').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});
///wp-content/themes/arkhistroy
$(document).ready(function () {
    $('#preloader').delay(500).fadeOut(500);
    //Смена фона
    setTimeout(function(){
        $('#section-1').css({'background-image': 'url("../wp-content/themes/arkhistroy/img/section-1_bg.jpg")', 'transition': 'background 5s linear'})
    },1000);
    //Чекбоксы
    $('input[type=checkbox]').attr("checked","checked");
});

$(document).ready(function () {
//Слайды на 7-м экране
    var last = $('.section-7_content:last'),
        first = $('.section-7_content:first');

    first.addClass('active');

    $('.js-btn-next').on("click", function() {
        $(this).parent().parent().parent().removeClass('active').next().addClass('active');

        if (last.hasClass('active')) {
            last.removeClass('active');
            first.addClass('active');
        };
    });
});

//Скрипт для подложки меню при прокрутке
$(function () {
    $(window).scroll(function(event) {
        if($(this).scrollTop() > 100) {
            $(".main-header").addClass('white-bg');
        }
        else {
            $(".main-header").removeClass('white-bg');
        }
    });
});
// Модальные окна
$(document).ready(function() {
    $('.js-modal-link').click(function(e) {
        e.preventDefault();

        var id = $(this).attr('href');
        var id2 = $(this).offset().top,
            height = window.innerHeight / 2;

        $('html').addClass('fixed');
        $('.overlay').fadeIn(200);
        $(id).fadeIn(200);
        $(id).css('top', window.scrollY + height + 'px');
    });

    $('.js-modal-link_btn').click(function(e) {
        e.preventDefault();

        var id = '#' + $(this).attr('data-href');
        var id2 = $(this).offset().top,
            height = window.innerHeight / 2;

        $('html').addClass('fixed');
        $('.overlay').fadeIn(200);
        $(id).fadeIn(500);
        $(id).css('top', window.scrollY + height + 'px');
    });

    $('.js-modal-about-link_btn').click(function(e) {
        e.preventDefault();

        var id = '#about-project-' + $(this).attr('data-href');
        var id2 = $(this).offset().top,
            height = window.innerHeight / 2;

        $('html').addClass('fixed');
        $('.overlay').fadeIn(200);
        $(id).fadeIn(500);
        $(id).css('top', window.scrollY + height + 'px');
    });

    $('.js-link-modal_up').click(function(e) {
        e.preventDefault();

        var id = '#' + $(this).attr('data-href');

        $('html').addClass('fixed');
        $('.overlay').fadeIn(200);
        $(id).slideDown(500);
    });

    $('.js-link-modal_left-right').click(function(e) {
        e.preventDefault();

        var id = '#' + $(this).attr('data-href');

        $('html').addClass('fixed');
        $('.overlay').fadeIn(200);
        $(id).addClass('open');
    });

    $('.js-menu-link').click(function (e) {
        $('.overlay').fadeOut(200);
        $('#header-open').slideUp(500);
    });

    $('.js-close-btn').click(function (e) {
        e.preventDefault();
        $('.overlay').fadeOut(200);
        $('.modal').fadeOut(500);
        $('.modal-up').slideUp(500);
        $('.modal-left-right').removeClass('open');
    });

    $('body').on('click', '.overlay', function(event) {
        event.preventDefault();
        $('.overlay').fadeOut(200);
        $('.modal').fadeOut(500);
        $('.modal-up').slideUp(500);
        $('.modal-left-right').removeClass('open');
        $('html').removeClass('fixed');
    });
});
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