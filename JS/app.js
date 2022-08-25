const slide = document.querySelector('.slider');
const container = document.querySelector('.container');
const myArray = document.querySelectorAll('.img-slide');

let i = 0
function mooveToLeft() {
    if (i > 0) {
        i--
        slide.style.left = '-' + i + '00%'
    } else {
        i = myArray.length 
        slide.style.left = '-200%'
    }
}

function mooveToRight() {
    if (i < myArray.length-1) {
        i++
        slide.style.left = '-' + i +  '00%'
    } else {
        i = 0
        slide.style.left = '00%'
    }
}
setInterval(mooveToRight, 10000)

container.addEventListener('click', (e) => {
    if (e.x < container.offsetWidth / 2) {
        mooveToLeft()
    } else {
        mooveToRight()
    }
})