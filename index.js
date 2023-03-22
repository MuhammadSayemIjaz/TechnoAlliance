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




// var num2 = prompt("Enter Second Number ");

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
// var rollNO = 12345;
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
// students.splice(2, 2, "Doe", "Male");
// var std = students.slice(1, 4);

// console.log("After ", std);


// var num = 1;
// num = num - 1;
// num--;
// console.log(num); 

var students = ["John", 12345, "10th", "123-ABC12", true, "Male", "Doe"];

// 1). i = 0,   0 < 5   true  student[0] i = i + 1; 
// 2). i = 1,   1 < 5   true  student[1] i = 1 + 1;
// 3). i = 2,   2 < 5   true  student[2] i = 2 + 1;
// 4). i = 3,   3 < 5   true  student[3] i = 3 + 1;
// 5). i = 4,   4 < 5   true  student[4] i = 4 + 1;
// 6). i = 5,   5 < 5   false 


// for(var i = 0 ; i < students.length; i++ ){
//      console.log(students[i]);
// }

console.log('hello new change')