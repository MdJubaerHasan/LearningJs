// ========================>>> Basics

// console.log(`Hello`);
// using backticks (known as template literal) is btter than single or double quotes  as they allow injecting variables
// console.log(`I like Pizza`);

// window.alert(`This is an alert`);
// window.alert(`I like pizza`);

// Get the html elemenmts and populate them (h1, p) using JavaScript

/* document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza`; */


// ========================>>> Variable


// DATA TYPES
// # Number (primitive)
// # String (referenced)
// # Boolean (primitive)


// Numbers 

/* let x;
x = 100;
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(x);
console.log(age);
console.log(price);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is ${gpa}`); */

// Strings

/* let firstName = "Bro";
let favoriteFood = "sushi"
let email = "Bro123@gmail.com"
console.log(`Your name is ${firstName}`);
console.log(`Your favorite food is ${favoriteFood}`);
console.log(`Your email is : ${email}`); */


// Booleans

/* let online = true;
online = false;

let forSale = true;
let isStudent = true;
console.log(online);
console.log(`Bro is online: ${online}`);
console.log(`Is This car for sale? : ${forSale}`);
console.log(`Is Bro a student? : ${isStudent}`); */


// to print a data type of a variable

/* console.log(typeof age);
console.log(typeof price);
console.log(typeof firstName);
console.log(typeof online); */


// Projecting variables in the webpage

/* let fullName = "Bro Code";
let myAge = 26;
let amIStudnt = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old `;
document.getElementById("p3").textContent = `Enrolled: ${amIStudnt} `; */



// ========================>>> Arithmetic operators

// areithmatic operators = operands (values, variables) operands (+ - / *) ex. 11 = x + 5

// Operators
// # +
// # -
// # *
// # /
// # ** (exponent)
// # % (modulo)

// Instaed of writing the whole variable we can use Augmented assignment operators
// # +=
// # -=
// # /=
// # *=
// # **=
// # %=

// Increament operator
// # ++
// # --

// Remember, if you are trying to do multiple operatons , the precedence matters 
// For example, Studnt = 999, if you do Log(student++), it will first print 999
// Then it will increament to 1000. So, do ++stuudent.


/* Operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & ssubstraction
*/

/* let students = 30;
console.log(students);

students = students + 1;
console.log(students);
students -= 1;
students **= 2;
console.log(students);
console.log(students**2);
console.log(students%2);
console.log(--students);

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result); */


// ========================>>> User Input

// 2 way, window prompt, Professional way : HTML textbox

/* let username;

username = window.prompt("What's your username");

console.log(`You are ${username}`); */

// The Professional way

/* document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
} */


// ========================>>> Type Conversion

// change data type to value of another

/* let age = window.prompt("How old are you?");
age = Number(age);

age +=1;

console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = ""; // This will come in handy if userinput is empty

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */



// ========================>>> Constants 

// variables that can't be changed
// A good practice for const is to make all of the letters of that variable uppercase
// making them uppercase is only valid practice for primitime datatype, number and booleans
// since string is referenced data type , it doesn't follow that convension 

const PI = 3.14159;

let radius;
let circumference;

// pi = 4.2; // throws Uncaught TypeError: Assignment to constant variable

/* radius = Number(window.prompt("Enter the radius of the circle"));

circumference = 2*pi*radius;
window.alert(`The Circumference is ${circumference}`); */

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    circumference = (2*PI*radius);
    // window.alert(circumference);
    document.getElementById("myResult").textContent = circumference + " cm";
}