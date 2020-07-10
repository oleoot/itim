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
const langaugeBlock = document.querySelector('.header-language');
const languages = document.querySelectorAll('.language-type');

langaugeBlock.addEventListener('click', openSelect)

function openSelect() {
    // const defaultLanguage = document.querySelector('#default');
    // console.log(defaultLanguage)
    // defaultLanguage.innerHTML = 'Рус'
    const arrow = document.querySelector('.select-arrow');
    arrow.classList.toggle('select-arrow-rotate')
    languages.forEach((language) => {
        // const defLanguage = language.querySelector('#default');
        // console.log(defLanguage)
        // defLanguage.innerHTML = 'Рус'
        if (language.id !== 'default') {
            language.classList.toggle('language-active')
        }
    })
}
languages.forEach((language) => {
    language.addEventListener('click', chooseLanguage)

    function chooseLanguage() {
        const defaultLanguage = document.querySelector('#default');
        console.log(defaultLanguage)
        defaultLanguage.innerHTML = "Рус"
        const currentText = document.querySelector('.language-default')
        currentText.innerHTML = this.innerHTML
    }
})

//  Select team slider ======================================================================
const teamMember = document.querySelectorAll('.team-member-envoke');
const controls = document.querySelectorAll('.team-slider-controls')
const activeBlocks = document.querySelectorAll('.team-triangle , .team-info-container, .team-member')
const teamInfoContainer = document.querySelector('.team-info-container')
const teamInfo = document.querySelectorAll('.team-info-wrap')



teamSlider.events.on('indexChanged', function (info, eventName) {
    teamInfoContainer.classList.add('team-info-container-no-padding')
    activeBlocks.forEach((active) => {
        active.classList.remove('active-tab');

    })
});




teamMember.forEach((member) => {
    member.addEventListener('click', showInfo)

    function showInfo() {
        teamInfoContainer.classList.remove('team-info-container-no-padding')
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


// Read more ======================================================================================================
const readMoreBtn = document.querySelectorAll('.read-more');

function showText() {
    const showContent = document.querySelector(`.${this.dataset.id}`);

    if (showContent.classList.contains('about-description-hidden') == true) {
        this.innerHTML = 'Свернуть'
    } else {
        this.innerHTML = 'Читать дальше'
    }

    showContent.classList.toggle('about-description-hidden')

}
readMoreBtn.forEach((button) => {
    button.addEventListener('click', showText)
})

// Stats info ==================================================================================================================
const stats = document.querySelectorAll('.stats-item')
const statsText = document.querySelectorAll('.slider-stats-tabs-text')
const statsTriangle = document.querySelectorAll('.stats-triangle')
stats.forEach((stat) => {
    stat.addEventListener('click', showStatInfo)

    function showStatInfo() {
        stats.forEach((statItem) => {
            statItem.classList.remove('stats-active-tab')
        })
        if (stat.classList.contains(stat.dataset.id)) {
            stat.classList.add('stats-active-tab')
        }
        statsTriangle.forEach((activeTriangle) => {
            activeTriangle.classList.remove('stats-active-tab')
        })
        statsText.forEach((text) => {
            text.classList.remove('stats-active-tab')
            if (text.id === stat.dataset.id) {
                text.classList.add('stats-active-tab')
                statsTriangle.forEach((triangle) => {
                    if (triangle.classList.contains(stat.dataset.id)) {
                        console.log('testTEWS')
                        triangle.classList.add('stats-active-tab')
                    }
                })
            }
        })
    }
})


// Review-slider-hidden
const reviewSlider = document.querySelector('.review-slider-hidden-inner')
const reviewSliderOutter = document.querySelector('.review-slider-hidden-outter')
const zoomImages = document.querySelectorAll('.review-slide-inner img.reviews-img')
const zoomIcon = document.querySelectorAll('.review-slide-zoom-icon')
console.log(zoomIcon)
zoomIcon.forEach((icon) => {
    // console.log(icon)
    icon.addEventListener('click', showSlider)
})
zoomImages.forEach((img) => {
    // console.log(icon)
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






// Scroll to top button
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
