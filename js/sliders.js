// Sliders =======================================================================================================================
const reviewsSlider = tns({
    "container": '.review-slider',
    "items": 3,
    "slideBy": 1,
    "nav": false,
    "gutter": 128,
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
        1023: {
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
    "gutter": 55
});
