let username = document.getElementById("username");
let password = document.getElementById("password");

let btn = document.getElementById("login-btn");

btn.addEventListener("click", ()=>{
    if(username.value ==="" || password.value ===""){
        alert("Fill all the details"); 
        console.log( username, password)
        console.log("Clicked");  
    }
    else{
        alert("User registered");
        setTimeout(() => {
            username.value="";
            password.value="";

        }, 3000);
    }
});

