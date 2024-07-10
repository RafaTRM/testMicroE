let next = document.querySelector('.carnext');
let prev = document.querySelector('.carprev');
let carslider = document.querySelector('.carslider');

next.addEventListener('click', function(){
    let carslides = document.querySelectorAll('.carslides');
    carslider.appendChild(carslides[0]);
});

prev.addEventListener('click', function(){
    let carslides = document.querySelectorAll('.carslides');
    carslider.prepend(carslides[carslides.length - 1]);
});