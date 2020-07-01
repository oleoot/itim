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
const navLinks = document.querySelectorAll(".hidden-li");
console.log(navLinks)
const menu = document.querySelector(".hidden-menu");
const coloredLine = document.querySelector(".line-accent");
btn.addEventListener("click", () => {
    changeHeaderBgBtn()
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
const hiddenMenu = document.querySelector('#hidden-menu');
const select = document.querySelector('.language-select');

if (header.id === 'header-main') {
    header.classList.add('header-bg');
}
window.addEventListener('scroll', changeHeaderBg)

function changeHeaderBg() {
    let pageOffset = window.pageYOffset;
    if (header.classList.contains('header-bg') && pageOffset > 90) {
        header.classList.remove('header-bg')
        header.classList.add('header-no-border')
    } else if (pageOffset <= 90) {
        header.classList.remove('header-no-border')
        header.classList.add('header-bg')
    } else if (pageOffset <= 90 && hiddenMenu.classList.contains('menu-active')) {
        console.log('Hi')
        header.classList.remove('header-no-border')
        header.classList.add('header-bg')
    }
}

function changeHeaderBgBtn() {
    let pageOffset = window.pageYOffset;
    if (header.classList.contains('header-bg')) {
        header.classList.remove('header-bg')
        header.classList.add('header-no-border')
    } else if (pageOffset <= 90) {
        header.classList.toggle('header-bg')
        header.classList.toggle('header-no-border')
    }
}
