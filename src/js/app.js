progressJs().setOptions({ overlayMode: true, theme: 'blueOverlay' }).start().autoIncrease(4, 500);

if (window.attachEvent) {
    window.attachEvent('onload', function () { progressJs().end(); });
} else {
    if (window.onload) {
        var curronload = window.onload;
        var newonload = function () {
            curronload();
            progressJs().end();
        };
        window.onload = newonload;
    } else {
        window.onload = function () { progressJs().end(); };
    }
}

$(window).on('load', function () {
    $('.loader').fadeOut();
});

$(document).ready(function () {
    $('.slider1').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="ri-arrow-left-line slick-arrow arrow-left"></i>',
        nextArrow: '<i class="ri-arrow-right-line slick-arrow arrow-right"></i>',
        dots: true,
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    arrows: false,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $('.slider-full-screen1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<i class="ri-arrow-left-line slick-arrow arrow-left"></i>',
        nextArrow: '<i class="ri-arrow-right-line slick-arrow arrow-right"></i>',
        dots: true,
        centerMode: true,
        centerPadding: "50px",
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $('.slider-full-screen2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<i class="ri-arrow-left-line slick-arrow arrow-left"></i>',
        nextArrow: '<i class="ri-arrow-right-line slick-arrow arrow-right"></i>',
        dots: true,
        centerMode: true,
        centerPadding: "50px",
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});