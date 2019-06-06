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