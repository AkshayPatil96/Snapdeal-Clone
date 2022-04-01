function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.innerText = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

// setFormMessage(loginForm, "success", "You're logged in!");


function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").innerText=message;
}


function clearInputError(inputElement){
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").innerText="";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm=document.querySelector("#login");

  const createAccountForm=document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");

      createAccountForm.classList.remove("form--hidden");

  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");

    createAccountForm.classList.add("form--hidden");

});

//Snapdeal Create Account Form Submit Data 
signupdataArray=JSON.parse(localStorage.getItem("Signup")) || [];
console.log(signupdataArray);
createAccountForm.addEventListener("submit", e => {

    let signupUsername=document.querySelector("#signupUsername").value;
    let mobileNo=document.querySelector("#mobileNo").value;
    let emailAddress=document.querySelector("#emailAddress").value;
    let password=document.querySelector("#password").value;
    let confirmPassword=document.querySelector("#confirmPassword").value;

    signupdataArray.push(new signupData(signupUsername, mobileNo, emailAddress, password, confirmPassword));
    localStorage.setItem("Signup", JSON.stringify(signupdataArray));

    //To filling More Data we have to clear the input values all time---
    document.querySelector("#signupUsername").value="";
    document.querySelector("#mobileNo").value="";
    document.querySelector("#emailAddress").value="";
    document.querySelector("#password").value="";
    document.querySelector("#confirmPassword").value="";


});
function signupData(signupUsername, mobileNo, emailAddress, password, confirmPassword){
    this.signupUsername=signupUsername;
    this.mobileNo=mobileNo;
    this.emailAddress=emailAddress;
    this.password=password;
    this.confirmPassword=confirmPassword;

}


//To Check Login Form i.e Username or Password is correct or not to redirect Home Page
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    //Perform your AJAX login
    let email=loginForm.email.value;
    let loginpassword=loginForm.loginpassword.value;
    console.log(email, password);

    var flag=false;

    for(var i=0; i<signupdataArray.length; i++){
        
        if(signupdataArray[i].emailAddress==email && signupdataArray[i].password==loginpassword){
            flag=true;
        }
        else{
            flag=false;
        }
    }
    if(flag==true){
        console.log("Login Sucess");
        alert("Login Sucessfully")
        window.location.href='../index.html';
    }else{
        console.log("Invalid Login");
        setFormMessage(loginForm, "error", "Invalid username or password")
    }

    
});

document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if(e.target.id === "password" &&  e.target.value.length > 0 && e.target.value.length < 9){
            setInputError(inputElement, "Passwords must be at least 6 characters");
        }
    });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

        
});


});
//input