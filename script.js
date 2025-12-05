const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
const height = container.clientHeight

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlides('up')
})

downBtn.addEventListener('click', () => {
    changeSlides('down')
})

function changeSlides(str) {
    if(str === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCount)
        {
            activeSlideIndex = slidesCount - 1
        }
    } else if(str === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0)
        {
            activeSlideIndex = 0;
        }
    }

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}