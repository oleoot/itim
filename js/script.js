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
