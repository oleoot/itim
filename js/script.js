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


function handleIntersection(entries, observer) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            runCounters(0, 3000);
            observer.unobserve(entry.target);
        } else {
            null
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(target);



// Select language btn ===========================================================================
const arrow = document.querySelector('.select-arrow');
const languages = document.querySelectorAll('.language-type');

arrow.addEventListener('click', openSelect)

function language() {
    openSelect()
    chooseLanguage()
}

function openSelect() {

    arrow.classList.toggle('select-arrow-rotate')
    languages.forEach((language) => {
        // if (language.classList.contains('language-active') == false)
        language.classList.add('language-active')
    })
}

function chooseLanguage() {
    languages.forEach((language) => {
        console.log(language.classList.contains('language-active'))
        // if (language.classList.contains('language-active') == false)
        //     language.classList.toggle('language-active')
    })
}
//  Select team slider ======================================================================
const teamMember = document.querySelectorAll('.team-member-envoke');
const controls = document.querySelectorAll('.team-slider-controls')
const activeBlocks = document.querySelectorAll('.team-triangle , .team-info-container, .team-member')
const teamInfoContainer = document.querySelector('.team-info-container')
const teamInfo = document.querySelectorAll('.team-info-wrap')



teamSlider.events.on('indexChanged', function (info, eventName) {
    activeBlocks.forEach((active) => {
        active.classList.remove('active-tab');

    })
});




teamMember.forEach((member) => {
    member.addEventListener('click', showInfo)

    function showInfo() {

        teamInfo.forEach((info) => {
            info.classList.remove('active-tab')
            if (info.id === member.dataset.id) {
                info.classList.add('active-tab')
                activeBlocks.forEach((active) => {
                    active.classList.remove('active-tab')
                    teamInfoContainer.classList.add('active-tab')
                    if (active.classList.contains(member.dataset.id)) {
                        active.classList.add('active-tab')
                    }
                })
            }
        })
    }
})




// controls.forEach((arrow) => {
//     arrow.addEventListener('click', openPane)

//     function openPane() {
//         teamMember.forEach((member) => {
//             member.addEventListener('click', showInfo);
//             function showInfo(){

//             }
//         })
//     }
// })





// Read more ======================================================================================================
const readMoreBtn = document.querySelectorAll('.read-more');
const hiddenText = document.querySelector('.about-description-hidden');

function showText(e) {
    switch (this.textContent) {
        case 'Читать дальше':
            this.textContent = 'Свернуть'
            break
        case 'Свернуть':
            this.textContent = 'Читать дальше'
            break
    }
    this.parentElement.children[4].classList.toggle('about-description-hidden')
}
readMoreBtn.forEach((stats) => {
    stats.addEventListener('click', showText)
})
// // Clients slider
// const clientSlider = document.querySelector('.clients-slider');
// console.log(clientSlider)
// const clientSlide = document.querySelectorAll('.clients-slider-items');
// const arrowRight = document.querySelector('.clients-arrow-right')
// clientSlide.forEach((slide) => {
//     console.log(slide.dataset.id)
// })
// // getInformation()
// // arrowRight.addEventListener('click', getInformation)
// // clientSlider.getInfo()
// const info = clientsSlider.getInfo()
// indexCurrent = info.index;
// console.log(indexCurrent)
// // function getInformation() {
// //     indexPrev = info.indexCached,
// //         indexCurrent = info.index;
// //     console.log(indexCurrent)
// //     // update style based on index

// // };



// Stats info ==================================================================================================================
const stats = document.querySelectorAll('.stats-item')
const infoContainer = document.querySelector('.stats-info-container')
const infoTriangle = document.querySelectorAll('.stats-triangle')


function selectStats(e) {
    console.log(this)
    // this.classList.remove('stats-active')
    infoTriangle.forEach((triangle) => {
        triangle.classList.remove('triangle-active')
    })
    // infoContainer.classList.remove('stats-info-container-active');
    // if (this.parentElement.parentElement.parentElement.children[2].classList.contains('stats-info-container-active') && this.classList.contains('stats-active')) {
    //     console.log('hi')
    //     this.parentElement.parentElement.parentElement.children[2].classList.remove('stats-info-container-active')
    //     // this.classList.remove('stats-active')
    // } else {
    // this.classList.add('stats-active')
    console.log(this.parentElement.parentElement.parentElement.parentElement.children[9].children[0].children[0])
    this.parentElement.parentElement.parentElement.parentElement.children[9].classList.add('stats-info-container-active')
    this.children[0].classList.add('triangle-active')
    const statsText = this.children[3].innerHTML
    console.log(statsText)
    this.parentElement.parentElement.parentElement.parentElement.children[9].children[0].children[0].innerHTML = statsText
    // stats.forEach((stat) => {
    //     if (stat.id === this.id) {
    //         this.parentElement.parentElement.parentElement.children[2].classList.remove('stats-info-container-active')
    //         this.children[0].classList.remove('triangle-active')
    //     }
    // })



}
stats.forEach((stats) => {
    stats.addEventListener('click', selectStats)
})


// // Parallax effect =============================
// // (function () {
// //     var a = document.body,
// //         e = document.documentElement;
// //     $(window).unbind("scroll").scroll(function () {
// //         a.style.backgroundPosition = "0px " + -(Math.max(e.scrollTop, a.scrollTop) / 8) + "px";
// //     });
// // })();
// window.addEventListener('scroll', myFunction)

// function myFunction() {
//     console.log('test')
//     let scrolltotop = document.scrollingElement.scrollTop;
//     console.log(scrolltotop)
//     let target = document.querySelector('.hidden-menu-paralax-bg');
//     console.log(target)
//     // let xvalue = "center";
//     let factor = 0.05;
//     let yvalue = scrolltotop * factor;
//     target.style.top = `-${yvalue}px`;
// }



// Review-slider-hidden
const reviewSlider = document.querySelector('.review-slider-hidden-inner')
const reviewSliderOutter = document.querySelector('.review-slider-hidden-outter')
const zoomIcon = document.querySelectorAll('.review-slide-zoom-icon')
console.log(zoomIcon)
zoomIcon.forEach((icon) => {
    // console.log(icon)
    icon.addEventListener('click', showSlider)
})

function showSlider() {
    reviewSliderOutter.style.display = 'block'
}


console.log(reviewSlider)
window.addEventListener('click', (e) => {
    if (e.target !== reviewSlider) {
        reviewSliderOutter.style.display = 'none';
    }
})
