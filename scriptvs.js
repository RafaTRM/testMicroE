const sliderContainer = document.querySelector('.sge-slider-container');
const slideRight = document.querySelector(".sge-right-slide");
const slideLeft = document.querySelector(".sge-left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("section").length;
//const slidelLength = slideLeft.querySelectorAll(".sge-ls").length;
//const sliderLength = slideRight.querySelectorAll(".sge-rs").length;

let activeSliderIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 75}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === "up") {
        activeSliderIndex++;
        if(activeSliderIndex > slidesLength -1) {
            activeSliderIndex = 0;
        }   
    } else if (direction === "down") {
        activeSliderIndex--;
        if(activeSliderIndex < 0) {
            activeSliderIndex = slidesLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`;
};