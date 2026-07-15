document.getElementById("loginBtn").addEventListener("click",function(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(email==="" || password===""){

document.getElementById("message").innerHTML="সব তথ্য পূরণ করুন";
document.getElementById("message").style.color="red";

}

else{

document.getElementById("message").innerHTML="Login Successful";
document.getElementById("message").style.color="green";

setTimeout(function(){

window.location.href="dashboard.html";

},1000);

}

});