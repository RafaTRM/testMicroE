var svgCircle = document.getElementById("svgCircle");
var srv1 = document.getElementById("srv1");
var srv2 = document.getElementById("srv2");
var srv3 = document.getElementById("srv3");
var srv4 = document.getElementById("srv4");
var srv5 = document.getElementById("srv5");
var srv6 = document.getElementById("srv6");
var srv7 = document.getElementById("srv7");
var srv8 = document.getElementById("srv8");
var srv9 = document.getElementById("srv9");
var home = document.getElementById("homecontent");
var userBox = document.getElementById("userBox");



//home.style.backgroundImage = "url(./img/img/bm1_3.png)";

srv1.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "1004";
    home.style.backgroundColor = "000";
    userBox.style.top = "0vh";
});

srv2.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "251";
    //home.style.backgroundColor = "WHITE";
    userBox.style.top = "-63vh";
});

srv3.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "502";
    //home.style.backgroundColor = "white";
    userBox.style.top = "-126vh";
});

srv4.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "753";
    //home.style.backgroundImage = "url(./img/img/manufacturinge.png)";
    userBox.style.top = "-189vh";
});

srv5.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "1004";
    //home.style.backgroundImage = "url(./img/img/bms3.png)";
    userBox.style.top = "-252vh";
});

srv6.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "1004";
    //home.style.backgroundImage = "url(./img/img/solucionesgestionnegocios.png)";
    userBox.style.top = "-315vh";
});

srv7.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "1004";
    //home.style.backgroundImage = "url(./img/img/solucionesgestionnegocios.png)";
    userBox.style.top = "-378vh";
});

srv8.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "1004";
    //home.style.backgroundImage = "url(./img/img/solucionesgestionnegocios.png)";
    userBox.style.top = "-441vh";
});

srv9.addEventListener('click',()=>{
    svgCircle.style.strokeDashoffset = "1004";
    //home.style.backgroundImage = "url(./img/img/solucionesgestionnegocios.png)";
    userBox.style.top = "-504vh";
});