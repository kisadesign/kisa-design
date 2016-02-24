/**
 * Created by markbensley on 23/02/16.
 */

$(document).ready(function(){
    $('.wr-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        nextArrow: '<div class="wr-slide-arrow-next"><i class="fa fa-angle-right"></i></div>',
        prevArrow: '<div class="wr-slide-arrow-prev"><i class="fa fa-angle-left"></i></div>',
        pauseOnHover: false
    });



    var windowSize = $(window).height(),
        navHeight = $('nav').height(),
        windowSubSize = windowSize - navHeight;
    $('.wr-max-height').css("height", windowSubSize);

    $(window).resize(function(){
        var windowSize = $(window).height(),
            windowSubSize = windowSize - navHeight;
        $('.wr-max-height').css("height", windowSubSize);
    });


    $('.js-scroll-link').click(function(e){
        e.preventDefault();
        var scrollLocation = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scrollLocation).offset().top
        }, 1000);

    })



});

