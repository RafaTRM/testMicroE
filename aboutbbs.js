
var conoce = document.getElementById('conoce');
var overlay = document.querySelector('.overlay');


conoce.addEventListener('click',()=>{
    overlay.classList.remove('ocultar');
    cerrar();   
});


var cerrar = ()=> {
    const btnCerrar = document.createElement('p');
    const overlay2 = document.createElement('div');
        overlay2.classList.add('fullscreen');
    const body = document.querySelector('body');
        if(document.querySelectorAll('.fullscreen').length > 0) return;
    body.appendChild(overlay2);
    btnCerrar.textContent = 'X';
    btnCerrar.classList.add('btnclose');
    overlay.appendChild(btnCerrar);
    cerrarPantalla(btnCerrar, overlay2);
}


var cerrarPantalla = (boton, overlay2) => {
    boton.addEventListener('click',()=>{
        overlay.classList.add('ocultar');
        overlay2.remove();
    });
    overlay2.onclick = function() {
        overlay2.remove();
        overlay.classList.add('ocultar');
    }
}