let slider = document.querySelector(".xperience .slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 9000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

/******* 
sliderIndividual.addEventListener('mouseover', () => {
    stop();
})
const stop = () => {
    clearInterval(intervalo);
    intervalo = 
    5000;
};
*/

/** 

slider.addEventListener('mouseout', () => {
    setInterval();
})

setInterval();


/*****/


setInterval(function(){
    slides();
},intervalo);

function slides() {
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;
    if (contador == sliderIndividual.length) {
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.trasition = "transform 1s";
            contador = 1;
        },9000)
    }
};





/*const industria = document.querySelector(".xperience .slider-contenedor");*/
/*
const industria = document.querySelector(".industrias .indcontainer .ind-items");
let maxScrollLeft = industria.scrollWidth - industria.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
    intervalo = setInterval(function() {
        industria.scrollLeft = industria.scrollLeft + step;
        if (industria.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if (industria.scrollLeft === 0) {
            step = step * -1;
        }
    },7);
};
const stop = () => {
    clearInterval(intervalo);
};

industria.addEventListener('mouseover', () => {
    stop();
})

industria.addEventListener('mouseout', () => {
    start();
});

start();
*/