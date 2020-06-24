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
