const  fname = document.getElementById('fname');
const  lname = document.getElementById('lname');
const  email =document.getElementById('email');
const  password = document.getElementById('password');
const  confPassword = document.getElementById('confpassword');
const  mobileNo = document.getElementById('mobileNo');
const  phoneNo = document.getElementById('phoneNo');
const  age = document.getElementById('age');
const  submit_btn = document.getElementsByClassName('btn')[0];
const  reset_btn = document.getElementsByClassName('btn')[1];

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var numberRegex = /^[0-9]+$/;
const lowerCaseRegex = /[a-z]/;
const upperCaseRegex = /[A-Z]/;
const specialCharactersRegex = /[\W_]+/;
const chechHyphenAfterFourDigits = /\d{4}-?\d{6}/;
const phoneNoHyphenRegex = /\d{4}-?\d{7}/;

submit_btn.addEventListener('click', handleSubmit)
reset_btn.addEventListener('click', handleReset)

function handleSubmit(e) {
     e.preventDefault();

     if(fname.value.trim() == ''){
          fname.style.border =  '2px solid red';
          alert("Please Enter First Name");
     } else if (fname.value.length < 3){
          fname.style.border =  '2px solid red';
          alert("Please provide correct name");
     } else if(lname.value.trim() == ''){
          fname.style.border = '2px solid green';
          lname.style.border =  '2px solid red';
          alert("Please Enter Last Name");
     } else if (lname.value.length < 3){
          fname.style.border = "2px solid green";
          lname.style.border =  '2px solid red';
          alert("Please provide correct name");
     } else if(emailRegex.test(email.value) != true){
          lname.style.border = "2px solid green";
          email.style.border =  '2px solid red';
          alert("Please enter correct email");
     } else if (age.value.trim() == ''){
          email.style.border =  '2px solid green';
          age.style.border =  '2px solid red';
          alert("Please enter your age");
     } else if (parseInt(age.value) < 18){
          age.style.border =  '2px solid red';
          alert("Only 18 plus users can apply for this form");
     } else if (password.value.trim() == ''){
          age.style.border =  '2px solid green';
          password.style.border =  '2px solid red';
          alert("Please Enter Password");
     } else if(password.value.length < 8 ){
          password.style.border =  '2px solid red';
          alert("Password must be 9 characters");
     } else if (lowerCaseRegex.test(password.value) != true){
          password.style.border =  '2px solid red';
          alert("Must Include lower case letters in password");
     } else if (upperCaseRegex.test(password.value) != true){
          password.style.border =  '2px solid red';
          alert("Must Include Upper case letter in password");
     } else if (specialCharactersRegex.test(password.value) != true){
          password.style.border =  '2px solid red';
          alert("Must Include Special character in password");
     } else if (confPassword.value != password.value) {
          password.style.border =  '2px solid green';
          confPassword.style.border =  '2px solid red';
          alert("Password not match");
     } else if (mobileNo.value.trim() == ''){
          confPassword.style.border =  '2px solid green';
          mobileNo.style.border =  '2px solid red';
          alert("Please Enter mobile no");
     } else if (parseInt(mobileNo.value.trim()[0]) != 0 ){
          mobileNo.style.border =  '2px solid red';
          alert("Plese enter valid mobile no");
     } else if (chechHyphenAfterFourDigits.test(mobileNo.value) != true){
          mobileNo.style.border =  '2px solid red';
          alert("Plese add hyphen (-) after four digits");
     } else if (phoneNo.value.trim() == ''){
          mobileNo.style.border =  '2px solid green';
          phoneNo.style.border =  '2px solid red';
          alert("Plese Phone no");
     } else if (parseInt(phoneNo.value.trim()[0]) != 0 ){
          phoneNo.style.border =  '2px solid red';
          alert("Please Enter valid phone no");
     } else if (phoneNoHyphenRegex.test(phoneNo.value)){
          phoneNo.style.border =  '2px solid red';
          alert("Please add hyphen (-) after three digits");
     } else {
          phoneNo.style.border =  '2px solid green';
          alert("Form Submitted Successfully");
          const userData = {
               userName: `${fname.value} ${lname.value}`,
               userEmail: email.value,
               userPassword : password.value,
               userPhoneNo : phoneNo.value,
               userAge : age.value,
          }
          localStorage.setItem('userInfo', JSON.stringify(userData));
          location.href='./Login.html';
     }
}

function handleReset(e) {
     e.preventDefault();
     const confirmBox = confirm("Clear Form ?")
     if(confirmBox == true){
          fname.style.border = "none";
          lname.style.border = "none";
          email.style.border = "none";
          password.style.border = "none";
          confPassword.style.border = "none";
          age.style.border = "none";
          mobileNo.style.border = "none";
          phoneNo.style.border = "none";

          fname.value = '';
          lname.value = '';
          email.value = '';
          password.value= '';
          confPassword.value= '';
          age.value= '';
          mobileNo.value='';
          phoneNo.value= ''
     }
}