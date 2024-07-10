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
    },12);
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