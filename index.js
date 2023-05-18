//inputs
const first = document.getElementById("first")
const last = document.getElementById("last")
const email = document.getElementById("email")
const password = document.getElementById("password")

//error img
const firstError = document.querySelector(".firstError")
const lastError = document.querySelector(".lastError")
const emailError = document.querySelector(".emailError")
const passwordError = document.querySelector(".passwordError")

//empty
const firstEmpty= document.querySelector(".firstEmpty")
const lastEmpty =document.querySelector(".lastEmpty")
const emailEmpty = document.querySelector(".emailEmpty")
const passwordEmpty= document.querySelector(".passwordEmpty")

//form submit
const form = document.querySelector("form")
const submit =document.querySelector(".submit")


form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate (e) {
    e.preventDefault()

    const firstValue = first.value
    const lastValue= last.value
    const emailValue= email.value
    const passwordValue= password.value
    console.log(firstValue)
    console.log(lastValue)
    console.log(emailValue)
    console.log(passwordValue)

    if(firstValue === ""){
        firstError.style.display="block";
        firstEmpty.style.display="block";   
        first.style.border="2px solid hsl(0, 100%, 74%) ";
    }
    else {
        firstError.style.display="none";
        firstEmpty.style.display="none"; 
        first.style.border="1px solid hsl(252, 33%, 91%)";
  
    }

    if(lastValue === ""){
        lastError.style.display="block";
        lastEmpty.style.display="block";   
        last.style.border="2px solid hsl(0, 100%, 74%) ";
    }
    else {
        lastError.style.display="none";
        lastEmpty.style.display="none"; 
        last.style.border="1px solid hsl(252, 33%, 91%)";
    }

    if(!isEmail(emailValue)){
        emailError.style.display="block";
        emailEmpty.style.display="block"; 
        email.style.border="2px solid hsl(0, 100%, 74%)";
        email.classList.add("color");
        

    }else{
        emailError.style.display="none";
        emailEmpty.style.display="none"; 
        email.style.border="1px solid hsl(252, 33%, 91%)";
        email.classList.remove("color");
        
    }
    if(passwordValue === ""){
        passwordError.style.display="block";
        passwordEmpty.style.display="block";   
        password.style.border="2px solid hsl(0, 100%, 74%) ";

    }
    else {
        passwordError.style.display="none";
        passwordEmpty.style.display="none"; 
        password.style.border="1px solid hsl(252, 33%, 91%)";
    }

 
}

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}