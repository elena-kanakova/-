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