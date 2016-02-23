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
        windowSubSize = windowSize - 147;
    console.log(windowSize + " " + windowSubSize);

    var c = windowSubSize / windowSize,
        d = c * 100;

    $('.wr-max-height').css("height", windowSubSize);
    $(window).resize(function(){
        var windowSize = $(window).height(),
            windowSubSize = windowSize - 147;
        $('.wr-max-height').css("height", windowSubSize);
    })



});

