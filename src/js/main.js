$(".products .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 50,
    nav: true,
    dots: true,
    stagePadding: 50,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
});
$(".testimonials .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 50,
    nav: true,
    mergeFit: true,
});

$(document).ready(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
});

$(window).on("scroll", function() {
    var height = $(window).scrollTop();
    if (height > 500) {
        $(".scrollTop").fadeIn();
    } else {
        $(".scrollTop").fadeOut();
    }
});

$(".scrollTop").on("click", function() {
    $(window).scrollTop(0);
});