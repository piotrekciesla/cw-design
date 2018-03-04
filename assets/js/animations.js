$( document ).ready(function() {

    $('#o-nas-scroll').click(function () {
        scrollTop: $('#o-nas-scroll').offset().top
    });

    $(window).scroll(function () {
        var scrollfromtop = $(this).scrollTop();



        if($(this).scrollTop() > $('.person-row').offset().top - $(window).height()){
            $('.person').eq(0).addClass('slide-in-right');
            $('.person').eq(1).addClass('slide-in-left');
        }

    });
});

