firebase.auth().onAuthStateChanged(function(user){
if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display="none";
    
    var user = firebase.auth().currentUser;
    
    if(user != null){
        
        var email_id = user.email;
        var email_verified = user.emailVerified;
    
        
        document.getElementById("user_para").innerHTML = "Welcome : " + email_id + "<br> Verified : " + email_verified;
    }
    
} 

else {
     document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display="block";
   
}   
});                       
    
function login(){
   
    var userEmail= document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail,userPass).catch(function(error){
        
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("error:" + errorMessage );
       
        
    });    
}

function logout() {
    firebase.auth().signOut();
    
}