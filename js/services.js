// Tools slider ===============================================================================================
// const toolsSlider = tns({
//     "container": '.tools-slider',
//     "items": 1,
//     "slideBy": 1,
//     // "controlsContainer": '.tools-slider-controls',
//     "nav": true
// });


// Services switch ==================================================================================================================
const info = document.querySelectorAll('.services-info');
const tr = document.querySelectorAll('.triangle')
const infoShow = document.querySelectorAll('.info-show')



function selectItem(e) {
    removeBg();
    removeShow()
    this.children[0].classList.add('triangle-active')
    this.classList.add('info-active');
    // const infoShowItem = document.querySelector(`#${this.className}`);
    // console.log(infoShowItem)
    // infoShowItem.classList.add('info-show-active');
    console.log(this.className)
}

function removeBg() {
    info.forEach(item => {
        item.classList.remove("info-active");
    })
    tr.forEach(item => {
        item.classList.remove("triangle-active");
    })
}


function removeShow() {
    infoShow.forEach(item => {
        item.classList.remove("info-show-active")
    })
}

function showImg() {
    const images = document.querySelectorAll('.info-show');
    images.forEach((img) => {
        if (images.id === 'info-1') {

        }
    })


}

info.forEach((item) => {
    item.addEventListener('click', selectItem)
})
