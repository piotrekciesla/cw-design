$( document ).ready(function() {

    $(window).scroll(function () {
        var scrollfromtop = $(this).scrollTop();



        if(scrollfromtop > $('.person-row').offset().top - $(window).height()){
            $('.person').eq(0).addClass('slide-in-right');
            $('.person').eq(1).addClass('slide-in-left');
        }

    });
});

