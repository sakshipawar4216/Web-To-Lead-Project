let captchaClicked=false
function clickHandler(event){
    console.log("captchaClicked3",captchaClicked)
    if(captchaClicked){
        let input = document.querySelector(".input").value
    
        let dateInput = new Date(input).toLocaleDateString("en-IN");
       
        let output = document.querySelector(".output").value
        output = dateInput
        
    }
    else{
        alert("Please check the captcha")
        event.preventDefault();
    }
   


}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
     if (response == null || response.value.trim() == "") 
        {
            var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
        } 
    } 
    setInterval(timestamp, 500);
    
function captchaSuccess(){
    console.log("captchaClicked",captchaClicked)
        captchaClicked=true
        console.log("captchaClicked1",captchaClicked)
    
}
