// Sliders =======================================================================================================================
const mainSlider = tns({
    "container": '.main-slider',
    "items": 1,
    "mode": 'gallery',
    "slideBy": 1,
    "nav": false,
    "controls": false,
    // "autoplay": true,
    "autoplayButtonOutput": false,
    // "autoplayTimeout": 4000
});
const reviewsSlider = tns({
    "container": '.review-slider',
    "items": 3,
    "slideBy": 1,
    "nav": false,
    // "gutter": 128,
    // "edgePadding": 128,
    // "autoWidth": true,
    "controlsContainer": '.reviews-slider-controls',
});
const memberSlider = tns({
    "container": '.member-slider',
    "items": 4,
    "slideBy": 1,
    "nav": false,
    "controlsContainer": '.member-slider-controls',
    "gutter": 50,
    // "mode": 'gallery',
    // "animateIn": 'fadeInDown',
    // "animateOut": 'fadeOutDown',
    // https://github.com/ganlanyuan/tiny-slider/issues/9

    "responsive": {
        0: {
            "items": 2,
            "nav": false,
            "navContainer": ".members-slider-nav"
        },
        768: {
            "items": 3,
            "nav": false,
            "navContainer": ".members-slider-nav"
        },
        1024: {
            "items": 4,
            "nav": false,
            "navContainer": ".members-slider-nav"
        },
        1281: {
            "items": 4,
            "nav": false,
            "navContainer": ".members-slider-nav"
        },

    }
});
const clientsSlider = tns({
    "container": '.clients-slider',
    "items": 5,
    "slideBy": 1,
    "nav": false,
    "controlsContainer": '.clients-slider-controls',
    "gutter": 25,
    "responsive": {
        768: {
            "items": 5,
            // "gutter": 55,
        },
        1024: {
            "items": 5,
        },
        1280: {
            "items": 5,
        },
    }
});
