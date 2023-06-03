
// Data Types 
// Number  123 / 12.324
// String " This is String";
// Boolean true / false;

// var statement = "I am learning Javascript";

// alert(statement);

// alert(statement);

// var  num1 = 34;
// var num2 = 56; 

// var sum = 2 - (4 / 6  * 4) * 3 + 2;
// = 4 - 5 * 3 + 2
// = 4 - 15 + 2
// // Brackets ( )
// // * / 
// // + -

// alert(sum);
// alert(Num1);

// 1). Addition  +
// 2). Subtraction  -
// 3). Multiplication *
// 4). Division /
// 5). Modulus Operator %

// var name = "John";
// var email = "john@gmail.com";

// alert(name + email);




// var num2 = Number(prompt("Enter Second Number "));

// alert(typeof(num1))
// // var num1 = 3;
// // var num2 = 3;

// alert(num1 - num2);

// Type conversion 

// var num1 = prompt("Enter Marks = ");

// if( num1 === 90) {
//      alert("Congragulation you got A+ grade")
// } else if( num1 == 80) {
//      alert("Congragulation you got A grade")
// } else if( num1 <= 70) {
//      alert("Congragulation you got B grade")
// } else {
//      alert("You are fail");
// }


// Lecture 02


// Logical Operators 

// 1). AND  &&
// 2). OR   ||
// 3). NOT  !

// var num1 = Number(prompt("Enter Marks = "));

// if(num1 > 100) {
//      console.log("You enter wrong value");
// } else if( num1 <= 100 && num1 >= 90 ) {
//      console.log("Congragulation you got A+ grade")
// } else if( num1 <= 90 && num1 >= 80) {
//      console.log("Congragulation you got A grade")
// } else if( num1 < 80 && num1 >= 70) {
//      console.log("Congragulation you got B grade")
// } else if( num1 < 70 && num1 >= 60) {
//      console.log("Congragulation you got C grade")
// } else if( num1 < 60 && num1 >= 50) {
//      console.log("Congragulation you got D grade")
// } else {
//      console.log("You got F Grade");
// }

// var age = Number(prompt("Enter Age = "));

// if (age <= 18) {
//      console.log("You are child");
//      console.log("You can not apply for this job");
// } else if (age > 18) {
//      if (age < 40) {
//           console.log("You are adult");
//           console.log("You can apply for this job");
//      } else {
//           console.log("You can not apply for this job");
//      }
// }
// Arrays

// var studentName = "John";
// var rollNo = 12345;
// var Class = "10th";
// var regNo = "123-ABC12";


// console.log(students[0], students[2]);
// var students = [];

// console.log("Before" ,students);

// students[0] = "John";
// students[1] = 12345;
// students[2] = "10th";
// students[3] = "123-ASFAf";

// console.log("After " ,students);

// var students = ["John", 12345, "10th", "123-ABC12", true];
// console.log("Before ", students);

// students.push("Doe", "1235");
// // students.push("Doe");
// // students.push("Doe");
// // students.push("Doe");
// // students.pop();
// // students.pop();

// students.shift();
// students.shift();
// students.shift();

// students.unshift("Doe", "Male");
// students.splice(2, 0, "Doe", "Male");
// var std = students.slice(1, 4);

// console.log("After ", std);


// var num = 1;
// num = num - 1;
// num--;
// console.log(num); 

// var students = ["John", 12345, "10th", "123-ABC12", true, "Male", "Doe"];

// 1). i = 0,   0 < 5   true  student[0] i = i + 1; 
// 2). i = 1,   1 < 5   true  student[1] i = 1 + 1;
// 3). i = 2,   2 < 5   true  student[2] i = 2 + 1;
// 4). i = 3,   3 < 5   true  student[3] i = 3 + 1;
// 5). i = 4,   4 < 5   true  student[4] i = 4 + 1;
// 6). i = 5,   5 < 5   false 


// for(var i = 0 ; i < students.length; i++ ){
//      console.log(students[i]);
// }

// Flag Variables , Break statement

// var cities = ["faisalabad", "lahore", "multan", "karachi"];
// var city = prompt("Enter your city");

// var matchFound = false;

// for(var i = 0 ; i < cities.length; i++){
//      if(city.toLowerCase() === cities[i]){
//           matchFound = true; 
//           console.log("City found in the list");
//           break;
//      }
//      console.log(cities[i]);
// }
// if (matchFound == false){
//      console.log( city +" is not found in the list");
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];


// 1). 1st Loop : i = 0,  0 < 5   true    
// 2nd loop:  1).  j = 0,  0 < 4  print (firstName[0]: BlueRay ) + (lastName[j] : Zzz)
// i = i + 1; 
// 2). i = 1,   1 < 5   true  student[1] i = 1 + 1;
// 3). i = 2,   2 < 5   true  student[2] i = 2 + 1;
// 4). i = 3,   3 < 5   true  student[3] i = 3 + 1;
// 5). i = 4,   4 < 5   true  student[4] i = 4 + 1;
// 6). i = 5,   5 < 5   false 

// for (var i = 0; i < firstNames.length; i++) {
//      for (var j = 0; j < lastNames.length; j++) {
//           console.log(firstNames[i] +  lastNames[j]);
//           // fullNames.push(firstNames[i] + lastNames[j]);
//      }
// }

// Task 01 
// 1). Get User input (How many values he/she wants to Enter)
// 2). Push User Values into empty array iteratively
// 3). Print Those values  

// Solution 

// var arr = [];
// var value = Number(prompt("Enter how many values you want to enter"));

// for(var i = 0 ; i < value;  i++){
//      arr.push(prompt("Enter Value"))
// }

// for(var i = 0; i < arr.length; i++){
//      console.log(arr[i]);
// }

// String

// var intro = "I am S learnSing JavaScript";

// console.log(intro.indexOf("S"));
// console.log(intro.lastIndexOf("S"));
// console.log(intro.charAt(12));
// console.log(intro.replace("JavaScript", "JS"));

// for(var i = 0 ; i < intro.length ; i++){
//      console.log(intro[i]);
// }


// function

//  function Sum( a , b ){
//      var sum = a + b;
//      console.log(sum);
// }

// console.log(sum);
// function Sum(a , b) {
//      var sum = a + b ;
//      // console.log(sum);
//      return sum ;
// }
// var su = Sum(10 , 23);
// console.log(su);
// console.log(su);
// console.log(su);
// console.log(su);
// console.log(su);
// for (var i = 0; i < 3 ; i++ ){
//     var a = Number(prompt("Enter First Value")) ;
//     var b = Number(prompt("Enter Second Value"));
//      Sum(a, b)
// }

// Sum( Number(prompt("Enter First Value")),  Number(prompt("Enter Second Value")) );
// Sum(Number(prompt("Enter First Value")) ,  Number(prompt("Enter Second Value")) );

// var x = Number(prompt("Enter First Value")) ;
// var y = Number(prompt("Enter Second Value")) ;

// Sum(x , y);

// Math Methods
// Math.round()
// Math.ceil()
// Math.floor()
// Math.round()

// var sum = 0.999999 ;
// var randNo = Math.random();
// var inte = randNo * 7
// console.log(Math.floor(inte));

//       DOM
// var heading1 = document.getElementById("heading");
// var container = document.getElementById('container');
// var btn = document.getElementById('btn');
// var elementClass = document.getElementsByClassName("heading1")[1];
// var elementTag = document.getElementsByTagName("h1");

// var heading = document.getElementById("heading");
// heading.innerText = "Lecture 01";

// var heading2 = document.getElementById("container");
// // console.log(heading2);
// heading2.innerHTML = "<h1>This is heading 2</h1>";
// console.log(heading2);

// Update styling using javascript

// heading1.style.color = "green";
// heading1.style.backgroundColor = "red";
// container.style.display = "block";

// Event listners
// function showContainer() {
//      container.style.display = "block";
// }
// function hideContainer() {
//      container.style.display = "none";
// }
// btn.addEventListener( "click", showContainer)
// btn.addEventListener( "dblclick", hideContainer)

// Converting strings to integers and decimals

// var num = parseFloat(prompt('Enter Value'));
// console.log(typeof(num), num);

// var num = 3454654;
// num = num.toString()
// console.log(typeof(num), num + 456);

// var num = 435345.4567567;
// console.log(num.toFixed(2));

// Scope
// 1). Global Scope
// 2). Local Scope

// var scope = 23423; // Global

// function showValue() {
//      var localScope = 345345;
//      // console.log(scope);
//      console.log(localScope);
// }
// showValue();
// console.log("Outer ",localScope);

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var i ;
// for ( var i = 0 ; i < firstNames.length ; i++){
//      console.log(firstNames[i]);
// }
// for ( var i = 0 ; i < firstNames.length ; i++){
//      console.log(firstNames[i]);
// }

// DOM Practice
// var input = document.getElementById('userName');
// var btn = document.getElementById('submit_btn');
// console.log(btn);

// function handleSubmit() {
//      console.log(input.value);
// }

// switch statement

// var a = 34;
// var b = 45;
// var sum = 0;
// var value = prompt("Enter operator symbol")
// switch (value) {
//      case "+":
//           sum = a + b;
//           break;
//      case "-":
//           sum = a - b;
//           break;
//      case "/":
//           sum = a / b;
//           break;
//      case "*":
//           sum = a * b;
//           break;
//      default:
//           console.log("You enter wrong input");
// }
// console.log(sum);

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var str = " My Name is john doe";
// var i = 10;

// while loop 

// while( i < firstNames.length){
//      console.log(str[i]);
//      i++;
// }

// do while loop

// var i = 10;
// do {
//      alert(i);
//      i++;
// } while (i < 3);

// DOM Practice

// var container = document.getElementById('container');

// function showContainer() {
//      container.style.display = "block";
// }
// function hideContainer() {
//      container.style.display = "none";
// }
// function changeBackground() {
//      var userName = document.getElementById('userName');
//      userName.style.backgroundColor = "red";
// }

// Assignment 01 
// Q)>  Random Color Generator

// var btn = document.getElementById('btn');
// var colorText = document.getElementById('colorText');
// var body = document.getElementsByTagName('body')[0];

// // console.log(btn , colorText, body);
// function changeColor() {
//      var randomValue =  " "+ Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256);
//      colorText.innerText= "rgb("+ randomValue + ")";
//      body.style.backgroundColor= "rgb("+ randomValue + ")";
// }

// Objects 

// var dummyArr = ["John", 1234, "ABC-1234", "7th", "Doe", 2345, "CDE-234", "10t"];

// for (let index = 0; index < dummyArr.length; index++) {
//      console.log(dummyArr[index]);      
// }

// syntax
// var std1 = {
//      key : 'value'
// }

// var std1 = {
//      name: "John",
//      rollNo: 1234,
//      regNo: 'ABC-123',
//      semester: '7th',
// }
// var std2 = {
//      name: "Doe",
//      rollNo: 2345,
//      regNo: 'BCD-234',
//      semester: '8th',
// }

// console.log(std1.name, std2.name)

//Objects in Arrays :

// var Students = [
//      {
//           name : "Doe",
//           rollNo : 2345,
//           regNo : 'BCD-234',
//           semester : '8th',
//      },
//      {
//           name : "John",
//           rollNo : 1234,
//           regNo : 'ABC-123',
//           semester : '7th',
//      }
// ]

// for (let index = 0; index < Students.length; index++) {
//       console.log("Student Name:", Students[index].name);
//       console.log("Student RollNo:",Students[index].rollNo);
//       console.log("Student RegNO:",Students[index].regNo);
//       console.log("Student Semester:",Students[index].semester);
// }

// Arrays in objects: 

// var user1 = {
//      userName: 'John',
//      password: '123@',
//      email: 'abc@gmail.com',
//      friends: [
//           {
//                userName: 'Doe',
//                email: 'doe@gmail.com'
//           },
//           {
//                userName: 'Doe1',
//                email: 'doe2@gmail.com'
//           },
//           {
//                userName: 'Doe2',
//                email: 'doe2@gmail.com'
//           },
//      ]
// }
// console.log(user1.friends[0]);

// DOM Images 

// const img = document.getElementById("image");
// // const images = [
// //      "https://images.unsplash.com/photo-1533127321739-d5dc53c221c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
// //      "https://images.unsplash.com/photo-1497483996262-df5caae87573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
// //      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80"
// // ]


// function ChangeImage() {
//      // var randomNumber = Math.floor(Math.random() * 3);
//      // img.src = images[randomNumber];
//      img.classList.add("increaseImageSize");
// }
// function RemoveClass() {
//      img.classList.remove("increaseImageSize");
// }
// function ToggleClass() {
//      img.classList.toggle("increaseImageSize");
// }

// DOM CreateElements

// Task 02
// Simple Todo app

// select input field
// var input = document.getElementById('task');
// // select list (ul) in which we want to add task
// var tasklist = document.getElementsByTagName('ul')[0];
// // function is used for add task in task list 
// function AddTask() {
//      // create list item (li) element
//      var listElement = document.createElement('li');
//      // create textnode element in which we store input field value 
//      var textNode = document.createTextNode(input.value);
//      // append childNode (textNode) into parent node which is li
//      listElement.appendChild(textNode);
//      // append childNodeElement (li with text) into parentElementNode which is ul
//      tasklist.appendChild(listElement);
// }
// globle objects

// function openGoogle() {
//      window.open('https://www.google.com')
// }

// Form Validation

// var userName = document.getElementById('userName');
// var password = document.getElementById('password');
// var mobileNo = document.getElementById('mobileNo');
// var address = document.getElementById('address');
// var userEmail = document.getElementById('userEmail');
// var button =  document.getElementsByTagName('button')[0];

// button.addEventListener('click', handleForm)

// function handleForm(event) {
//      event.preventDefault();
//      if(userName.value.trim() === ''){
//           alert("Please Enter userName");
//           return;
//      } else 
//      if(userEmail.value.includes('.com') !== true){
//           alert("Please Enter company email address")
//           return;
//      }else if(password.value.length < 7){
//           alert("Password must be greater than 7 digits")
//           return;
//      }else if ( mobileNo.value.includes('-') !== true ) {
//           alert("Please Enter dash after four digits")
//           return;
//      } else {
//          console.log(userName.value.trim());
//      }
// }
// function showPassword() {
//      password.type = "text"
// }

// var container = document.getElementById('diplayDate');
// console.log(container);
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// var currentMinutes = currentDate.getMinutes();
// var currentMonth = currentDate.getMonth();

// var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

// function DisplayDate() {
//      if(currentHours > 12 ){
//           container.innerText =  currentHours - 12+ ":" + currentMinutes +  " PM " + months[currentMonth] ;
//      }
// }

// var btn = document.getElementById('btn');
// btn.ondblclick = DisplayDate;

// ES6 ECMAScript 6

// variable 

//Types of variable;
// 1). var
// 2). let
// 3). const 

// Difference Between          |          var      |  let   |  const  |
// 1). Scope                   |  globle/ function | block  |  block  |
// 2). Redeclare               |        Yes        |   No   |   No    |
// 3). Change variable Value   |        Yes        |   Yes  |   No    |
// 4).Muteable                 |        Yes        |   Yes  |   No    |

// var name = "John";
// console.log("name ==>>", name);
// name = "Doe";
// console.log("after ==>>", name);

// let name = "john";
// console.log(name);
// name = "Doe";
// console.log(name);

// const name = "john";
// console.log(name);
// name = "Doe";
// console.log(name);

//Arrow Functions / Anonymous function

//syntex 

// () => {}

// useCase

// const val1 = Number(prompt("Enter First Value"))
// const val2 = Number(prompt("Enter Second Value"))

// const sum = (a , b) => (a + b) ;
// console.log(sum(val1, val2))


// Assignment

// userName 
// Email
// password
// confirmPassword
// mobileNo
// phoneNo // like PTCL No
// zipcode
// Age // only 18 plus users are able to signup


// Template Literals

// Problem statement
// const firstname = "John";
// const lastname = "Doe";
// const age = 23;

// // const result = "Welcome" + firstname + lastname + ". Your are " + age + "years old";  
// // console.log(result);

// // symbol
// //  ``

// const result = `Welcome ${firstname} ${lastname}. You are ${age} years old`;
// console.log(result);

//Map function

// const students = ["John", "Doe", 34, "REG-1234"];

// for (let index = 0; index < students.length; index++) {
//      console.log(students[index]);
// }

// function sum() {
// }
// function anotherfunction() {
//      sum()
// }
// anotherfunction()

// syntex
// const values = students.map((value, index, arr) => {
//      console.log(value, index, arr);
//      return value;
// })
// console.log(values);

// // foreach function

// // syntex
// console.log("ForEach function");
// const value1 = students.forEach((value, index, arr) => {
//      console.log(value, index, arr);
//      return value ;
// })
// console.log(value1);

// var flag = false;

// var userInput = prompt("Enter your name");

// const users = ['user1', 'user2', 'user3', 'user4','user5'];

// for (let index = 0; index < users.length; index++) {
//      if(userInput === users[index]){
//           flag = true;
//           break;
//      }
// }
// if(flag === false){
//      console.log("Your are not eligible for appling this job");
// } else if (flag === true) {
//      console.log("Your are eligible for appling this job");
// }