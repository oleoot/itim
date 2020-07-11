// Popup =================================================================================
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('#popup-btn')


popupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
})


window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
})
// Menu =====================================================================================================
const btn = document.querySelector("#hidden-menu-btn");
const navLinks = document.querySelectorAll(".hidden-li-big-link");
const menu = document.querySelector(".hidden-menu");
const coloredLine = document.querySelector(".line-accent");
const parallax = document.querySelector('.hidden-menu-paralax-bg')
btn.addEventListener("click", () => {
    changeHeaderBgBtn()
    // addParallax()
    coloredLine.classList.toggle('line-accent-default')
    menu.classList.toggle("hidden-menu-active");
    btn.classList.toggle("toggle")


    navLinks.forEach((item, index) => {
        console.log(item)
        if (item.style.animation) {
            item.style.animation = ''
        } else {
            item.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.3}s`
        }

        item.addEventListener("click", () => {
            menu.classList.toggle("menu-active");
            btn.classList.toggle("toggle")
            coloredLine.classList.toggle('line-accent-default')
        })
    })
})
// Header bg change ========================================================================================================
const header = document.querySelector('.header');
const hiddenMenu = document.querySelector('.hidden-menu');
let pageOffset = window.pageYOffset;
console.log(pageOffset)
if (header.id === 'header-main') {
    header.classList.add('header-bg');
}
if (header.id === 'header-main' && pageOffset > 90) {
    header.classList.remove('header-bg')
    header.classList.add('header-no-border')
}
window.addEventListener('scroll', changeHeaderBg)

function changeHeaderBg() {
    let pageOffset = window.pageYOffset;
    if (header.classList.contains('header-bg') && pageOffset > 90) {
        header.classList.remove('header-bg')
        header.classList.add('header-no-border')
    } else if (pageOffset <= 90 && header.id === 'header-main' && hiddenMenu.classList.value !== 'hidden-menu hidden-menu-active') {
        header.classList.add('header-bg')
        header.classList.remove('header-no-border')
    } else if (hiddenMenu.classList.contains('hidden-menu-active')) {
        header.classList.remove('header-no-border')
    }
}

function changeHeaderBgBtn() {
    let pageOffset = window.pageYOffset;
    if (header.classList.contains('header-bg')) {
        header.classList.remove('header-bg')
        header.classList.add('header-no-border')
    } else if (pageOffset <= 90 && header.classList.value !== 'header flex-container') {
        header.classList.toggle('header-bg')
        header.classList.toggle('header-no-border')
    } else if (pageOffset <= 90 && header.classList.value !== 'header flex-container header-no-border' && header.id === 'header-main') {
        header.classList.add('header-bg')
        header.classList.remove('header-no-border')
    }
}


// function addParallax() {
//     // parallax.classList.toggle('hidden-menu-paralax-bg-active')

//     if (parallax.style.animation === `0.35s ease 0s 1 normal forwards running parallax`) {
//         parallax.style.animation = 'parallaxBack 0.7s'
//         console.log("Back")
//     } else {
//         parallax.style.animation = `parallax 0.35s ease forwards`
//         console.log(parallax.style.animation)
//     }

//     // parallax.style.animation = `parallax 0.5s ease forwards`

// }
