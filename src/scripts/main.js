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

    $('#slider_opinions .slide a').magnificPopup({
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
        $('#section-1').css({'background-image': 'url("img/section-1_bg.jpg")', 'transition': 'background 5s linear'})
    },1000);
    //Чекбоксы
    $('input[type=checkbox]').attr("checked","checked");
});

$(document).ready(function () {
//Слайды на 7-м экране
    var last = $('.section-7_content:last'),
        first = $('.section-7_content:first');

    first.addClass('active');

    $('.js-btn-next').on("click", function(e) {

        var this_el = $(this).parent().parent().parent();

        this_el.removeClass('active').next().addClass('active');

        if (this_el.is(':last-child')) {
            first.addClass('active');
        }
    });

    $('.js-btn-prev').on("click", function(e) {

        var this_el = $(this).parent().parent().parent();

        this_el.removeClass('active').prev('.section-7_content').addClass('active');

        if (this_el.is(':first-child')) {
            last.addClass('active');
        }
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

$(document).ready(function () {
    $('.section-5_tabs-content-2_desc .desc_btn-order_btn').click(function (e) {
        var val = $(this).attr('data-title');
        $('.hidden').val(val);
    });
});