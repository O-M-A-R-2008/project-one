var password = prompt("enter your password");
for(var a =0; a<password.length; a++){
    var hash = password.charCodeAt(a);
    if(hash >= 65 && hash<=75){
        var hashed = hash -10
    }
    else{
        var hashed = hash -40
    }
    
    var last = String.fromCharCode(hashed)
    document.write(last)
}