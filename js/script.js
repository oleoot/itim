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
console.log(arrow)
arrow.addEventListener('click', openSelect)

function openSelect() {
    const languages = document.querySelectorAll('.language-type');
    arrow.classList.toggle('select-arrow-rotate')
    languages.forEach((language) => {
        language.classList.toggle('language-hide')
    })
}
//  Select team slider ======================================================================
const teamMember = document.querySelectorAll('.team-member');
const controls = document.querySelectorAll('.team-slider-controls')



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

readMoreBtn.forEach((button) => {
    console.log(button)
    button.addEventListener('click', showText);

    function showText() {
        // if (hiddenText.classList.value = 'about-description about-description-hidden') {
        //     button.innerText = 'Свернуть'
        // } else {
        //     button.innerText = 'Читать дальше'
        // }
        // button.innerText = "Читать дальше" ? button.innerText = "Свернуть" : button.innerHTML = "Читать дальше"

        hiddenText.classList.toggle('about-description-hidden')
    }
})


// Clients slider
const clientSlider = document.querySelector('.clients-slider');
console.log(clientSlider)
const clientSlide = document.querySelectorAll('.clients-slider-items');
const arrowRight = document.querySelector('.clients-arrow-right')
clientSlide.forEach((slide) => {
    console.log(slide.dataset.id)
})
// getInformation()
// arrowRight.addEventListener('click', getInformation)
// clientSlider.getInfo()
const info = clientsSlider.getInfo()
indexCurrent = info.index;
console.log(indexCurrent)
// function getInformation() {
//     indexPrev = info.indexCached,
//         indexCurrent = info.index;
//     console.log(indexCurrent)
//     // update style based on index

// };




// clientsSlider.events.on("transitionStart", function (info) {
//     console.log(info.slideItems[info.index].firstChild.nextElementSibling)
//     info.slideItems[info.indexCached].firstChild.nextElementSibling.classList.remove(
//         "clients-slider-img-grad-2"
//     );

//     info.slideItems[info.index].firstChild.nextElementSibling.classList.add(
//         "clients-slider-img-grad-2"
//     );
//     info.slideItems[info.indexCached + 1].firstChild.nextElementSibling.classList.remove(
//         "clients-slider-img-grad-1"
//     );

//     info.slideItems[info.index + 1].firstChild.nextElementSibling.classList.add(
//         "clients-slider-img-grad-1"
//     );
//     info.slideItems[info.indexCached + 3].firstChild.nextElementSibling.classList.remove(
//         "clients-slider-img-grad-1"
//     );

//     info.slideItems[info.index + 3].firstChild.nextElementSibling.classList.add(
//         "clients-slider-img-grad-1"
//     );
//     info.slideItems[info.indexCached + 4].firstChild.nextElementSibling.classList.remove(
//         "clients-slider-img-grad-2"
//     );

//     info.slideItems[info.index + 4].firstChild.nextElementSibling.classList.add(
//         "clients-slider-img-grad-2"
//     );
// });
