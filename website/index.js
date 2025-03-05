// ========================>>> Basics

console.log(`Hello`);
// using backticks (known as template literal) is btter than single or double quotes  as they allow injecting variables
console.log(`I like Pizza`);

// window.alert(`This is an alert`);
// window.alert(`I like pizza`);

// Get the html elemenmts and populate them (h1, p) using JavaScript

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I like pizza`;


// ========================>>> Variable


// DATA TYPES
// # Number
// # String
// # Boolean


// Numbers 
let x;
x = 100;
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(x);
console.log(age);
console.log(price);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is ${gpa}`);

// Strings

let firstName = "Bro";
let favoriteFood = "sushi"
let email = "Bro123@gmail.com"
console.log(`Your name is ${firstName}`);
console.log(`Your favorite food is ${favoriteFood}`);
console.log(`Your email is : ${email}`);


// Booleans

let online = true;
online = false;

let forSale = true;
let isStudent = true;
console.log(online);
console.log(`Bro is online: ${online}`);
console.log(`Is This car for sale? : ${forSale}`);
console.log(`Is Bro a student? : ${isStudent}`);


// to print a data type of a variable

console.log(typeof age);
console.log(typeof price);
console.log(typeof firstName);
console.log(typeof online);


// Projecting variables in the webpage

let fullName = "Bro Code";
let myAge = 26;
let amIStudnt = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old `;
document.getElementById("p3").textContent = `Enrolled: ${amIStudnt} `;