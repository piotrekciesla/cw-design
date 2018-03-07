$( document ).ready(function() {

    $(window).scroll(function () {
        var scrollfromtop = $(this).scrollTop();



        if(scrollfromtop > $('.person-row').offset().top - $(window).height()){
            $('.person').eq(0).addClass('slide-in-right');
            $('.person').eq(1).addClass('slide-in-left');



            $('.person').eq(0).children(".skill").each(function (e) {
                var skill_barr = $( this ).children(".skill-bar");
                var skill_value = skill_barr.attr( 'skill' );
                skill_barr.css({"width": ""+ skill_value +"%" })
            });

            $('.person').eq(1).children(".skill").each(function (e) {
                var skill_barr = $( this ).children(".skill-bar");
                var skill_value = skill_barr.attr( 'skill' );
                skill_barr.css({"width": ""+ skill_value +"%" })
            });
        }

    });
});

