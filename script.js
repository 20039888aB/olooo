const sign_in=document.querySelector(".sign-in")
const sign_up=document.querySelector(".sign-up")
let input_group=document.querySelector(".input-group")
let email=document.querySelector(".email") 

sign_in.addEventListener("click",function(){
    //console.log(email)
    if(email.classList.contains("display")){
        email.classList.remove("display")
    }
    
})
sign_up.addEventListener("click",function(e){
//console.log(email) 
email.classList.toggle("display") 

})