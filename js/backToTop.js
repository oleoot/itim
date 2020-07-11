// Scroll to top button ================================================================
let intervalId = 0;
const scrollButton = document.querySelector(".back-to-top");

window.addEventListener('scroll', buttonReveal)

function buttonReveal() {
    if (window.pageYOffset >= 2000) {
        scrollButton.style.display = 'block'
    } else(
        scrollButton.style.display = 'none'
    )
}

function scrollStep() {

    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
    intervalId = setInterval(scrollStep, 16.66);
}

scrollButton.addEventListener("click", scrollToTop);
