const  email =document.getElementById('email');
const  password = document.getElementById('password');
const login_btn = document.getElementsByClassName('login_btn')[0];

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userData = JSON.parse(localStorage.getItem('userInfo'));

console.log(userData);

login_btn.addEventListener('click', hanldeLogin)

function hanldeLogin(e) {
     e.preventDefault()
     if (emailRegex.test(email.value) != true){
          email.style.border = '2px solid red';
          alert("Please Enter valid email address");
     } else if (email.value === userData.userEmail && password.value === userData.userPassword){
          email.style.border = '2px solid green';
          console.log('user login successfully');
          location.href='./index.html';
     } else {
          alert('User not found');
     }
}

// JSON.stingify    used for converting object into string format 
// JSON.parse       used for converting or parsing string into object