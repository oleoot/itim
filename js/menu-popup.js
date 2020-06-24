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
const navLinks = document.querySelectorAll(".hidden-li")
const menu = document.querySelector("#hidden-menu");
const coloredLine = document.querySelector(".line-accent");
btn.addEventListener("click", () => {
    changeHeaderBgBtn()
    coloredLine.classList.toggle('line-accent-default')
    menu.classList.toggle("menu-active");
    btn.classList.toggle("toggle")


    navLinks.forEach((item, index) => {
        console.log(item)
        if (item.style.animation) {
            item.style.animation = ''
        } else {
            item.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`
        }

        item.addEventListener("click", () => {
            menu.classList.toggle("menu-active");
            btn.classList.toggle("toggle")
            coloredLine.classList.toggle('line-accent-default')
        })
    })
})
// Header bg change ========================================================================================================
const header = document.querySelector('.nav');
const hiddenMenu = document.querySelector('#hidden-menu');
const select = document.querySelector('.language-select');
window.addEventListener('scroll', changeHeaderBg)

function changeHeaderBg() {
    let pageOffset = window.pageYOffset;
    if (pageOffset >= 90 && hiddenMenu.classList.value === "hidden-menu") {
        header.classList.add('nav-bg');
        header.classList.add('nav-border-change');
    } else if (pageOffset <= 90 && hiddenMenu.classList.value !== "hidden-menu menu-active") {
        header.classList.remove('nav-bg');
        header.classList.remove('nav-border-change');
    }
}

function changeHeaderBgBtn() {
    let pageOffset = window.pageYOffset;
    if (header.classList.value !== "nav flex-container nav-bg") {
        header.classList.toggle('nav-bg')
    } else if (pageOffset <= 90 && header.classList.value === "nav flex-container nav-bg") {
        header.classList.toggle('nav-bg')
    }
}
