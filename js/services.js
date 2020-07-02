// Services switch ==================================================================================================================
const info = document.querySelectorAll('.services-info');
const tr = document.querySelectorAll('.triangle')
const infoShow = document.querySelectorAll('.info-show')



function selectItem(e) {
    removeBg();
    removeShow()
    showImg(this)
    this.children[0].classList.add('triangle-active')
    this.classList.add('info-active');
    console.log(this)
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

function showImg(infoBlock) {
    switch (infoBlock.id) {
        case 'info-1':
            infoBlock.parentElement.parentElement.children[0].children[0].src = '../img/services/service-1.png'
            break
        case 'info-2':
            infoBlock.parentElement.parentElement.children[0].children[0].src = '../img/reshenia/reshenie-1.png'
            break
        case 'info-3':
            infoBlock.parentElement.parentElement.children[0].children[0].src = '../img/reshenia/reshenie-2.png'
            break
        case 'info-4':
            infoBlock.parentElement.parentElement.children[0].children[0].src = '../img/reshenia/reshenie-3.png'
            break
    }

    // if (infoBlock.id === 'info-1') {
    //     infoBlock.parentElement.parentElement.firstChild.nextElementSibling.children[0].src = '../img/services/service-1.png'
    // } else if (infoBlock.id === 'info-2') {
    //     infoBlock.parentElement.parentElement.firstChild.nextElementSibling.children[0].src = '../img/reshenia/reshenie-1.png'
    // } else if (infoBlock.id === 'info-3') {
    //     infoBlock.parentElement.parentElement.firstChild.nextElementSibling.children[0].src = '../img/reshenia/reshenie-2.png'
    // } else if (infoBlock.id === 'info-4') {
    //     infoBlock.parentElement.parentElement.firstChild.nextElementSibling.children[0].src = '../img/reshenia/reshenie-3.png'
    // }

}

info.forEach((item) => {
    item.addEventListener('click', selectItem)
})
