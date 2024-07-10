/************      CAPTCHA ***********/
(function (){
    const fonts = ["cursive","sans-serif","serif","monospace"];
    let captchaValue = "";
    function generateCaptcha (){
        let value = btoa(Math.random()*1000000000);
        value = value.substring(0,5+Math.random()*5);
        captchaValue = value;
    }
    function setCaptcha(){
        let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span
                style="
                    transform:rotate(${rotate}deg);
                    font-family:${fonts[font]}
                "
            >${char}</span>`;
        }).join("");
        document.querySelector(".form .captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
        document.querySelector(".form .captcha .captcharefresh").addEventListener("click",function(){
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();
})();
/*
    document.querySelector(".contact-form").addEventListener("submit", function(){
        let inputCaptchaValue = document.querySelector(".captchaform input").value;
        if (inputCaptchaValue === captchaValue) {
            message("wevos");
        } else {
            (message) => alert("Su mensaje se envió correctamente, gracias por escribirnos. Pronto nos pondremos en contacto con Usted.")
        }
    }); 
*/

//********* FIN  CAPCHA ***********/



/**action="http://httpbin.org/post"//*/