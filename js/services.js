// Services switch ==================================================================================================================
const info = document.querySelectorAll('.services-info');
const tr = document.querySelectorAll('.triangle')
const images = document.querySelectorAll('.info-img');
const infoList = document.querySelectorAll('.service-block-list')
const arrow = document.querySelectorAll('.services-bloks-arrow')
const servicesImgContainer = document.querySelector('.services-wrap-photo')

function selectItem(e) {
    removeAll();
    showImg(this)
    addAll(this)
    toggleInfo(this)
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
    infoList.forEach((list) => {
        list.classList.remove('service-block-list-active')
    })
    arrow.forEach((arrow) => {
        arrow.classList.remove('services-bloks-arrow-active')
    })
    servicesImgContainer.classList.remove('services-row-1', 'services-row-2', 'services-row-3', 'services-row-4')
}


function showImg(infoBlock) {
    const infoImg = document.querySelector(`#${infoBlock.dataset.id}`)
    const infoImgContainer = document.querySelector('.services-wrap-photo')
    infoImgContainer.classList.add(`services-row-${infoBlock.dataset.row}`)
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


function toggleInfo(block) {
    const arrow = document.querySelector(`.${block.dataset.dropdown}`)
    arrow.classList.add('services-bloks-arrow-active')
    const list = document.querySelector(`#${block.dataset.dropdown}`)
    list.classList.toggle('service-block-list-active')
}
