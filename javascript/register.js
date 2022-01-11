let namee = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let username = document.getElementById("username");
let password = document.getElementById("password");
let cPassword = document.getElementById("re-password");

let btn = document.getElementById("register-btn");

btn.addEventListener("click", ()=>{
    if(namee.value ==="" || email.value ==="" || mobile.value ==="" || username.value ==="" || password.value ==="" || cPassword.value ===""){
        alert("Fill all the details"); 
        console.log(namee, email, mobile, username, password, cPassword)
        console.log("Clicked");  
    }
    else{
        alert("User registered");
        setTimeout(() => {
            namee.value="";
            email.value="";
            mobile.value="";
            username.value="";
            password.value="";
            cPassword.value="";

        }, 3000);
    }
});
