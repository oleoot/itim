// Services switch ==================================================================================================================
const info = document.querySelectorAll('.services-info');
const tr = document.querySelectorAll('.triangle')
const images = document.querySelectorAll('.info-img');

function selectItem(e) {
    removeAll();
    showImg(this)
    addAll(this)
}

function removeAll() {
    info.forEach(item => {
        item.classList.remove("info-active");
    })
    tr.forEach(item => {
        item.classList.remove("triangle-active");
    })
    images.forEach((img) => {
        img.classList.remove('info-img-show')
    })
}


function showImg(infoBlock) {
    const infoImg = document.querySelector(`#${infoBlock.dataset.id}`)
    infoImg.classList.add('info-img-show')
}

info.forEach((item) => {
    item.addEventListener('click', selectItem)
})


function addAll(all) {
    all.classList.add('info-active');
    const triangle = document.querySelector(`#${all.dataset.triangle}`)
    triangle.classList.add('triangle-active')
}
