// Counters =========================================================================================================================
function runCounters(start, duration) {
    const counters = document.querySelectorAll('.stats-number');
    counters.forEach((counter) => {
        let end = counter.innerHTML.replace("+", "")
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
const numbers = document.querySelectorAll('.stats-number')
stats.forEach((stat) => {
    stat.addEventListener('click', showStatInfo)

    function showStatInfo() {
        numbers.forEach((number) => {
            number.classList.remove('stats-number-active')
        })
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
            const numberColor = document.querySelector(`.${stat.dataset.color}`)
            numberColor.classList.add('stats-number-active')
            if (text.id === stat.dataset.id) {
                text.classList.add('stats-active-tab')
                statsTriangle.forEach((triangle) => {
                    if (triangle.classList.contains(stat.dataset.id)) {
                        triangle.classList.add('stats-active-tab')
                    }
                })
            }
        })
    }
})
