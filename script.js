mybutton = document.getElementById("myBtn");
window.onscroll = function () {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop > 20){
        mybutton.style.display ="block"
    }else{
        mybutton.style.display ="none"
    }
}

// When the user clicks on the button ,scroll to the top of the document
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// form validation

function validation(){


    // user name validation
    var user = document.getElementById("user").value;
    if(user == ""){
        document.getElementById("username").innerHTML ="  ** Please fill the user name field";
        return false;
    }
    if(user.length <=2 || user.length >20){
        document.getElementById("username").innerHTML ="  ** Username  length must be between 2 and 20 ";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById("username").innerHTML = " ** username must be charater not an number";
        return false

    }
    // username validation end
    // email validation start
    var user_email = document.getElementById("email").value;
    if(user_email == ""){
        document.getElementById("email-2").innerHTML ="  ** Please fill the email field";
        return false;
    }
    if(user_email.indexOf('@')<=0){
        document.getElementById("email-2").innerHTML =" ** @ invalid postion"
        return false
    }
    if((user_email.charAt(user_email.length-4)!=".") && (user_email.charAt(user_email.length-3)!=".")){
        document.getElementById("email-2").innerHTML =" invalid postion"
        return false
    }
    // email validation over
    
    var user_password = document.getElementById("password").value;
    if(user_password ==""){
        document.getElementById("password1").innerHTML ="  ** Password filed must be field ";
        return false;
    }
    
    if(user_password.length <=5 || user.length >20){
        document.getElementById("password1").innerHTML ="  ** password  length must be between 5 and 20 ";
        return false;
    }

    var user_number = document.getElementById("number").value;
    if(user_number ==""){
        document.getElementById("phone-number").innerHTML ="  ** Number Must be filled ";
        return false;
    }
    if(user_number.length !=10){
        document.getElementById("phone-number").innerHTML ="  ** Number must be 10 digit";
        return false;
    }
   
}
function message(){

    
    // form validation
    
        if (validation()){
    
    
        // user name validation
            var user = document.getElementById("user").value;
            if(user == ""){
                document.getElementById("username").innerHTML ="  ** Please fill the user name field";
                return false;
            }
            if(user.length <=2 || user.length >20){
                document.getElementById("username").innerHTML ="  ** Username  length must be between 2 and 20 ";
                return false;
            }
            if(!isNaN(user)){
                document.getElementById("username").innerHTML = " ** username must be charater not an number";
                return false
        
            }
            // username validation end
            // email validation start
            var user_email = document.getElementById("email").value;
            if(user_email == ""){
                document.getElementById("email-2").innerHTML ="  ** Please fill the email field";
                return false;
            }
            if(user_email.indexOf('@')<=0){
                document.getElementById("email-2").innerHTML =" ** @ invalid postion"
                return false
            }
            if((user_email.charAt(user_email.length-4)!=".") && (user_email.charAt(user_email.length-3)!=".")){
                document.getElementById("email-2").innerHTML =" invalid postion"
                return false
            }
            // email validation over
            
            var user_password = document.getElementById("password").value;
            if(user_password ==""){
                document.getElementById("password1").innerHTML ="  ** Password filed must be field ";
                return false;
            }
            
            if(user_password.length <=5 || user.length >20){
                document.getElementById("password1").innerHTML ="  ** password  length must be between 5 and 20 ";
                return false;
            }
        
            var user_number = document.getElementById("number").value;
            if(user_number ==""){
                document.getElementById("phone-number").innerHTML ="  ** Number Must be filled ";
                return false;
            }
            if(user_number.length !=10){
                document.getElementById("phone-number").innerHTML ="  ** Number must be 10 digit";
                return false;
            }       
    }else{
        alert("no")
    }

   
}


