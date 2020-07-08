// Parallax effect =============================
// (function () {
//     var a = document.body,
//         e = document.documentElement;
//     $(window).unbind("scroll").scroll(function () {
//         a.style.backgroundPosition = "0px " + -(Math.max(e.scrollTop, a.scrollTop) / 8) + "px";
//     });
// })();
window.addEventListener('scroll', myFunction)

function myFunction() {
    console.log('test')
    let scrolltotop = document.scrollingElement.scrollTop;
    // console.log(scrolltotop)
    let target = document.querySelector('.hidden-menu-paralax-bg');
    // console.log(target)
    // let xvalue = "center";
    let factor = 0.05;
    let yvalue = scrolltotop * factor;
    target.style.top = `-${yvalue}px`;
}
