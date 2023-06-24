let userName=document.getElementById("name")
let userEmail=document.getElementById("email")
let userpass=document.getElementById("pass")
let userConfirmPass=document.getElementById("pass2")
let massage=document.getElementById("msg")
let button=document.getElementById("btn")

//generating access token
function generateToken(){
const characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let token=""
//16 bit token
for(let i=0;i<16;i++){
    token+=characters.charAt(Math.floor(Math.random()*characters.length))
}
return token
}
function setItemFunc(event){
    event.preventDefault()
   
    // console.log("hii")
    const aceestoken=generateToken()
    //creat user object
    let user={
        Name:userName.value,
        Email:userEmail.value,
        Password:userpass.value,
        ConfirmPass:userConfirmPass.value,
        Token:aceestoken
    }
    //form validation
    if((userName.value=="")||(userEmail.value=="")||(userpass.value=="")||(userConfirmPass.value=="")){
        massage.style.color="red"
        massage.textContent="Error : All the fields are mandatory"
    }
    else if((userpass.value!=userConfirmPass.value)){
        massage.style.color="red"
        massage.textContent="Error : Password and confirm password not match"
    }else{
        massage.style.color="green"
        massage.textContent="Successfully signed Up!"
        //set user object in local storage
        localStorage.setItem("User",JSON.stringify(user))
        //redirect to profile page
        window.location.href = "./profile/index.html";
    }
}
button.addEventListener("click",setItemFunc)

