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

/* Плагин прокрутки сайта */
$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9', 'section-10'],
        menu: '.header-menu',
        loopBottom: true,
        navigation: false,
        animateAnchor: true,
        afterLoad: function(anchorLink, index){
            $('.section').animate({scrollTop: top}, 800);
            var header = $('.main-header');

            if(anchorLink != 'section-1'){
                header.addClass('js-scroll');
            }

            else if(anchorLink == 'section-1') {
                header.removeClass('js-scroll');
            };

            if(anchorLink == 'section-9'){
                header.addClass('white-el');
            }

            else if(anchorLink != 'section-9'){
                header.removeClass('white-el');
            };
        },

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
});

// Магнифик

$(document).ready(function () {
    $('.section-8_slider__slider-wrap .slider .slide a').magnificPopup({
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
});

$(document).ready(function () {
    $('#preloader').delay(500).fadeOut(500);
    setTimeout(function(){
        $('#section-1').css({'background-image': 'url("../img/section-1_bg.jpg")', 'transition': 'background 5s linear'})
    },1000);
    $('.section-7_content').on('click','.js-btn-next', function () {
        $('.section-7_content').removeClass('active').next().addClass('active');
    });

    $('input[type=checkbox]').attr("checked","checked");
});

//Скрипт для подложки меню при прокрутке
$(function () {
    $('.section').scroll(function(event) {
        if($(this).scrollTop() > 100) {
            $(".main-header").addClass('white-bg');
        }
        else {
            $(".main-header").removeClass('white-bg');
        }
    });
});
