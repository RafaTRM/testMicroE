/*
const gBtn = document.getElementById('bcgeneral');
const fBtn = document.getElementById('bcfuncion');
const bcGeneralidad = document.querySelector('.bcgeneralidad');
*/

//business central
var gbtn = document.querySelector('.bcgralbtn');
var fbtn = document.querySelector('.bcfunbtn');
var bctexts = document.querySelector('.bisappbc-texts');
var bcgeneralidad = document.querySelector('.bcentral');
var generalidad = document.querySelector('.bcgeneralidad');
var funcionalidad = document.querySelector('.bcfuncionalidad');
//F&O
var fogbtn = document.querySelector('.fogralbtn');
var fofbtn = document.querySelector('.fofunbtn');
var fotexts = document.querySelector('.bisappfo-texts');
var fogeneralidad = document.querySelector('.fogeneralidad');
var fofuncionalidad = document.querySelector('.fofuncionalidad');

//Sales
var slsgbtn = document.querySelector('.slsgralbtn');
var slsfbtn = document.querySelector('.slsfunbtn');
var slstexts = document.querySelector('.bisappsls-texts');
var slsgeneralidad = document.querySelector('.slsgeneralidad');
var slsfuncionalidad = document.querySelector('.slsfuncionalidad');

//MArketing
var mktgbtn = document.querySelector('.mktgralbtn');
var mktfbtn = document.querySelector('.mktfunbtn');
var mkttexts = document.querySelector('.bisappmkt-texts');
var mktgeneralidad = document.querySelector('.mktgeneralidad');
var mktfuncionalidad = document.querySelector('.mktfuncionalidad');

//Servicio
var srvgbtn = document.querySelector('.srvgralbtn');
var srvfbtn = document.querySelector('.srvfunbtn');
var srvtexts = document.querySelector('.bisappsrv-texts');
var srvgeneralidad = document.querySelector('.srvgeneralidad');
var srvfuncionalidad = document.querySelector('.srvfuncionalidad');




//Business Central

fbtn.addEventListener('click',()=>{
    bctexts.classList.add('activa');
    bcgeneralidad.classList.add('bc-bg');
    generalidad.classList.add('bctext-active');
    funcionalidad.classList.add('bctext-inactive');
});

gbtn.addEventListener('click',()=>{
    bctexts.classList.remove('activa');
    bcgeneralidad.classList.remove('bc-bg');
    generalidad.classList.remove('bctext-active');
    funcionalidad.classList.remove('bctext-inactive');
});

//Finance & Ops

fogbtn.addEventListener('click',()=>{
    fotexts.classList.add('activafo');
    fogeneralidad.classList.add('fotext-inactive');
    fofuncionalidad.classList.add('fotext-active');
});

fofbtn.addEventListener('click',()=>{
    fotexts.classList.remove('activafo');
    fogeneralidad.classList.remove('fotext-inactive');
    fofuncionalidad.classList.remove('fotext-active');
});


//Sales
slsgbtn.addEventListener('click',()=>{
    slstexts.classList.add('activacrm');
    slsgeneralidad.classList.add('slstext-inactive');
    slsfuncionalidad.classList.add('slstext-active');
});

slsfbtn.addEventListener('click',()=>{
    slstexts.classList.remove('activacrm');
    slsgeneralidad.classList.remove('slstext-inactive');
    slsfuncionalidad.classList.remove('slstext-active');
});


//Marketing
mktfbtn.addEventListener('click',()=>{
    mkttexts.classList.add('activa');
    mktgeneralidad.classList.add('mkttext-active');
    mktfuncionalidad.classList.add('mkttext-inactive');
});

mktgbtn.addEventListener('click',()=>{
    mkttexts.classList.remove('activa');
    mktgeneralidad.classList.remove('mkttext-active');
    mktfuncionalidad.classList.remove('mkttext-inactive');
});


//Srv
srvgbtn.addEventListener('click',()=>{
    srvtexts.classList.add('activacrm');
    srvgeneralidad.classList.add('slstext-inactive');
    srvfuncionalidad.classList.add('slstext-active');
});

srvfbtn.addEventListener('click',()=>{
    srvtexts.classList.remove('activacrm');
    srvgeneralidad.classList.remove('slstext-inactive');
    srvfuncionalidad.classList.remove('slstext-active');
});






