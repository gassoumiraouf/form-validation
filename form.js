 
function validation()                                    
{ 
    var name = document.forms["formulaire"]["name"];               
    var lastName = document.forms["formulaire"]["lastName"];    
    var email = document.forms["formulaire"]["email"];  
    var password =  document.forms["formulaire"]["password"];
    var address = document.forms["formulaire"]["Address"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if (lastName.value == "")                           
    { 
        window.alert("Please enter your last name."); 
        lastName.focus(); 
        return false; }
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    
    } 
    return true; 

function CheckPassword(password) 
{ 
var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(password)) 
{ 

return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}