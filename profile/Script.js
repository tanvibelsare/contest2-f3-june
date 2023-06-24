
  document.addEventListener('DOMContentLoaded', ()=>{
Container=document.getElementById("container")
//converting stringify version of object
let myUser=JSON.parse(localStorage.getItem("User"))
//checking whether user is present or not

if(!myUser||!myUser.Token){
    window.location.href="/index.html"
}
// console.log(myUser)
Container.innerHTML=`<p>Profile</p>
<p>Full Name:${myUser.Name}</p>
<p>Email:${myUser.Email}</p>
<p>Password:${myUser.Password}</p>
<button id="btn">Logout</button>`
let button=document.getElementById("btn")
console.log(button)
button.addEventListener("click",()=>{
    console.log("click")
    localStorage.removeItem("User");
    localStorage.removeItem('Token');
    window.location.href="/index.html"
})


  })

