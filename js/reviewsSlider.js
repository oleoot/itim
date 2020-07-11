// Review-slider-hidden
const reviewSlider = document.querySelector('.review-slider-hidden-inner')
const reviewSliderOutter = document.querySelector('.review-slider-hidden-outter')
const zoomImages = document.querySelectorAll('.review-slide-inner img.reviews-img')
const zoomIcon = document.querySelectorAll('.review-slide-zoom-icon')
console.log(zoomIcon)
zoomIcon.forEach((icon) => {
    icon.addEventListener('click', showSlider)
})
zoomImages.forEach((img) => {
    img.addEventListener('click', showSlider)
})

function showSlider() {
    reviewSliderOutter.classList.toggle('opened', true);
}

reviewSliderOutter.addEventListener('click', (e) => {
    if (e.target.contains(reviewSlider)) {
        reviewSliderOutter.classList.toggle('opened', false);
    }
})
