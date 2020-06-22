// Sliders =======================================================================================================================
const slider = tns({
    "container": '.member-slider',
    "items": 4,
    "slideBy": 1,
    "nav": false,
    "controlsContainer": '.member-slider-controls',
    "gutter": 50
});
const clientsSlider = tns({
    "container": '.clients-slider',
    "items": 5,
    "slideBy": 1,
    "nav": false,
    "controlsContainer": '.clients-slider-controls',
    "gutter": 55
});
const reviewsSlider = tns({
    "container": '.review-slider',
    "items": 3,
    "slideBy": 1,
    "nav": false,
    "gutter": 128,
    "controlsContainer": '.reviews-slider-controls',
});


// document.querySelector('.arrow-right-clients').onclick = function () {

//     const info = clientsSlider.getInfo(),
//         indexPrev = info.indexCached,
//         indexCurrent = info.displayIndex
//     // indexCurrent = info.index;
//     console.log(indexCurrent)
//     if (indexCurrent === 1) {
//         info.slideItems[indexPrev].classList.remove('clients-slider-img-grad-2');
//         info.slideItems[indexCurrent].classList.add('clients-slider-img-grad-2');
//     } else if (indexCurrent === 2) {
//         info.slideItems[indexPrev].classList.remove('clients-slider-img-grad-1');
//         info.slideItems[indexCurrent].classList.add('clients-slider-img-grad-1');
//     } else if (indexCurrent === 3) {
//         // info.slideItems[indexPrev].classList.add('clients-slider-img-grad-1');
//     } else if (indexCurrent === 4) {
//         info.slideItems[indexPrev].classList.remove('clients-slider-img-grad-1');
//         info.slideItems[indexCurrent].classList.add('clients-slider-img-grad-1');
//     } else if (indexCurrent === 5) {
//         info.slideItems[indexPrev].classList.remove('clients-slider-img-grad-2');
//         info.slideItems[indexCurrent].classList.add('clients-slider-img-grad-2');
//     } else if (indexCurrent === 6) {
//         info.slideItems[indexPrev].classList.remove('clients-slider-img-grad-1');
//         info.slideItems[indexCurrent].classList.add('clients-slider-img-grad-1');
//     }



// switch (indexCurrent) {
//     case 1:
//         // info.slideItems[indexPrev].classList.add('clients-slider-img-grad-1');
//         // console.log(indexCurrent)

//     case 2:
//         // info.slideItems[indexPrev].classList.add('clients-slider-img-grad-1');


//     case 3:
//         // info.slideItems[indexPrev].classList.add('clients-slider-img-grad-1');

//     case 4:
//         info.slideItems[indexPrev].classList.add('clients-slider-img-grad-1');

//     case 5:
//         info.slideItems[indexPrev].classList.add('clients-slider-img-grad-1');

//     case 6:
//         info.slideItems[indexPrev].classList.add('clients-slider-img-grad-1');
// }

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
// Auto-formatting input ======================================================================================
const cleave = new Cleave('.contact-phone-input', {
    phone: true,
    phoneRegionCode: 'UA'
});
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
    } else if (pageOffset <= 90 && hiddenMenu.classList.value !== "hidden-menu menu-active") {
        header.classList.remove('nav-bg');
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
// Counters =========================================================================================================================
function runCounters(start, duration) {
    const counters = document.querySelectorAll('.stats-number');
    counters.forEach((counter) => {
        let end = counter.innerHTML.replace("+", "")
        console.log(end)
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(function () {
            current += increment;
            counter.innerHTML = current + "+";
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    })

}


const target = document.querySelector('#stats');

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            runCounters(0, 3000);
        } else {
            null
        }
    });
}




const observer = new IntersectionObserver(handleIntersection);
observer.observe(target);
