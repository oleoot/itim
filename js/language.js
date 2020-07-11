// Select language btn ===========================================================================
const langaugeBlock = document.querySelector('.header-language');
const languages = document.querySelectorAll('.language-type');

langaugeBlock.addEventListener('click', openSelect)

function openSelect() {
    const arrow = document.querySelector('.select-arrow');
    arrow.classList.toggle('select-arrow-rotate')
    languages.forEach((language) => {
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
