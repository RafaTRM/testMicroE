
/************      CAPTCHA ***********/
(function (){
    const fonts = ["cursive","sans-serif","serif","monospace"];
    let captchaValue = "";
    function generateCaptcha (){
        let value = btoa(Math.random()*1000000000);
        value = value.substring(0,4+Math.random()*3);
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

/******FIN CAPTCHA********/


document.querySelector(".contact-form").addEventListener("submit", submitForm);        

    function submitForm(e) {
        e.preventDefault();

        //get input values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        //let county = document.getElementById("estado").value;
        let message = document.getElementById("message").value;
        let subject = document.getElementById("matter").value;
        let sector = document.getElementById("sector").value;
        let preliminar = captchaValue;
        let kapcha = document.getElementById("kapcha").value;
        

        if (preliminar === kapcha) {
                 
            sendEmail(name, email, phone, message, subject, sector, preliminar, kapcha);
            generateCaptcha();
            setCaptcha();
        }   else alert ("Captcha inválido, intente de nuevo.");
            generateCaptcha();
            setCaptcha();     
    }



    function sendEmail(name, email, phone, message, subject, sector, _preliminar, _kapcha) {
        Email.send({
        //Host : "mail.bbsbys.com",
        Host : "smtp.elasticemail.com",
        Username : "comercial@bbsbys.com",
        Password : "C2468CBE1212BF702970430F38CB60F87DE3",
        //Username : "comercial@bbsbys.com",
        //Password : "R-Hb0{t2oX",
        To : 'comercial@bbsbys.com',
        From : "comercial@bbsbys.com",
        Subject : "Contacto Página WEB Contacto 2",
        Body: `Name: ${name} <br/> Email: ${email} <br/> phone: ${phone} <br/> Asunto: ${subject} <br/> Empresa - Sector: ${sector} <br/> Message: ${message} <br/> Preliminar: ${_preliminar} <br/> Captcha: ${_kapcha}`
        
        
    }).then ((message) => alert("Su mensaje se envió correctamente, gracias por escribirnos. Pronto nos pondremos en contacto con Usted.")
    );
        clearInputFields(name, email, phone, message, subject, sector, _kapcha);
    }

    function clearInputFields() {
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("phone").value = '';
        //document.getElementById("estado").value = '';
        document.getElementById("message").value = '';
        document.getElementById("matter").value = '';
        document.getElementById("sector").value = '';
        document.getElementById("kapcha").value = '';
    }
})();
