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

/* const PI = 3.14159;

let radius;
let circumference; */

// pi = 4.2; // throws Uncaught TypeError: Assignment to constant variable

/* radius = Number(window.prompt("Enter the radius of the circle"));

circumference = 2*pi*radius;
window.alert(`The Circumference is ${circumference}`); */

/* document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    circumference = (2*PI*radius);
    // window.alert(circumference);
    document.getElementById("myResult").textContent = circumference + " cm";
} */



// ========================>>> Math

// it is a built in object that provides a collection of properties and methods

/* // PI

console.log(Math.PI);

// e ( Euler's Number , base of natural logarithm , used in problems relating to exponential grwoth)

console.log(Math.E);


let x = 3.21;

let y = 2;

let z;

let big = 81;

let radian = 45; 

let neg = -3.21;

z = Math.round(x);
console.log(z);

z = Math.floor(x);
console.log(z);

z = Math.ceil(x);
console.log(z);

z = Math.trunc(x); // eliminates decimal points 
console.log(z);

z = Math.pow(y, y);
console.log(z);

z = Math.sqrt(big);
console.log(z);

z = Math.log(big);
console.log(z);

z = Math.sin(radian);
console.log(z);

z = Math.cos(radian);
console.log(z);

z = Math.tan(radian);
console.log(z);

z = Math.abs(neg);
console.log(z);

z = Math.sign(neg); // For neg, -1, for pos, 1, for 0, its 0
console.log(z);

let val1 = 3;
let val2 = 2;
let val3 = 1;

let max = Math.max(val1, val2, val3);
let min = Math.min(val1, val2, val3);
console.log(max);
console.log(min); */


// ========================>>> Random Number Generator

// by default, Math.random gives a random number between 0 and 1 with decilam points

// so to get a random number between 0 and X, we need to multiply it 

// however, by default it will return a decilam point number, so use floor or celi

// to increase the lower range simpley add + 1

/* let randomNum = Math.random() * 6 + 1;
console.log(randomNum);
console.log(Math.trunc(randomNum)); */



// ========================>>> If else statement

/* let time = 14;

if(time < 12){
    console.log("Good Morning");
}else{
    console.log("Good Afternoon");
} */

/* let isStudent = false;

if(isStudent){
    console.log("You are a student");
}else{
    console.log("You are not a student");
} */

/* let age = 25;
let hasLicense = true;

if(age >= 16){

    console.log("You are old enough to drive");
    
    if(hasLicense){
        console.log("You have a License");
    }else{
        console.log("You do not have your license yet");
    }
}else{
    console.log("You are not old enough to drive");
} */

/* const myAge = document.getElementById("myText");
const myButton = document.getElementById("mySubmit");
const myParagraph = document.getElementById("resultElement");
let age;


myButton.onclick = function(){
    age = Number(myAge.value);

    if(age < 0){
        myParagraph.textContent = `Your age can not be bellow zero`;
    }else if(age == 0){
        myParagraph.textContent = `Your age can not enter, you are a baby`;
    }else if(age > 100){
        myParagraph.textContent = `You are too old to enter this site`;
    }else if(age >= 18){
        myParagraph.textContent = `You are old enough to enter this site`;
    }else{
        myParagraph.textContent = `You must be 18+ to enter this site`;
    }

} */


    // ========================>>> Ternary operator

/*  Ternary operator is a shortcut to simple if and else statrments

    that helps to assign a variable based on a condition 

    example: condition ? codeIfTrue : codeIfFalse; */

/* let age = 9;

let message = age >= 18 ? "You're an adult" : "You're a minor";

console.log(message);

let time = 2;

let greeting = time < 12 ? "Good Morniong!" : "Good Afternoon!";

console.log(greeting);

let isStudent = true;

let studentCheck = isStudent? "You are a student!" : "You are not a student";

console.log(studentCheck);



let purchaseAmount = 125; // if this is over 100, you get 10% discount

let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - (purchaseAmount * (discount/100))}`); */
