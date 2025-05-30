// ========================>>> Basics

// console.log(`Hello`);
// using backticks (known as template literal) is batter than single or double quotes  as they allow injecting variables
// console.log(`I like Pizza`);

// window.alert(`This is an alert`);
// window.alert(`I like pizza`);

// Get the html elements and populate them (h1, p) using JavaScript

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
let amIStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old `;
document.getElementById("p3").textContent = `Enrolled: ${amIStudent} `; */



// ========================>>> Arithmetic operators

// arithmetic operators = operands (values, variables) operands (+ - / *) ex. 11 = x + 5

// Operators
// # +
// # -
// # *
// # /
// # ** (exponent)
// # % (modulo)

// Instead of writing the whole variable we can use Augmented assignment operators
// # +=
// # -=
// # /=
// # *=
// # **=
// # %=

// Increment operator
// # ++
// # --

// Remember, if you are trying to do multiple operations , the precedence matters 
// For example, Student = 999, if you do Log(student++), it will first print 999
// Then it will increment to 1000. So, do ++student.


/* Operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
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
let z = ""; // This will come in handy if user input is empty

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */



// ========================>>> Constants 

// variables that can't be changed
// A good practice for const is to make all of the letters of that variable uppercase
// making them uppercase is only valid practice for primitive datatype, number and booleans
// since string is referenced data type , it doesn't follow that convention 

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

// e ( Euler's Number , base of natural logarithm , used in problems relating to exponential growth)

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

// by default, Math.random gives a random number between 0 and 1 with decimal points

// so to get a random number between 0 and X, we need to multiply it 

// however, by default it will return a decimal point number, so use floor or ceil

// to increase the lower range simply add + 1

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



/*  Ternary operator is a shortcut to simple if and else statements

    that helps to assign a variable based on a condition 

    example: condition ? codeIfTrue : codeIfFalse; */

/* let age = 9;

let message = age >= 18 ? "You're an adult" : "You're a minor";

console.log(message);

let time = 2;

let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";

console.log(greeting);

let isStudent = true;

let studentCheck = isStudent? "You are a student!" : "You are not a student";

console.log(studentCheck);



let purchaseAmount = 125; // if this is over 100, you get 10% discount

let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - (purchaseAmount * (discount/100))}`); */


// ========================>>> Switch Case

// this should be used for replacing many if - else statements 

// let day = 1;

// we will evaluate Day variable

// The break keyword is necessary because, unlike if else, once a case is 
// matched, the subsequent code for other cases will execute as well
// hence we need to break out of the switch if the case is matched.

/* switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a Day!`);
}


let testScore = 32;

let letterGrade;

// in this following case we are evaluation true ness of the conditional cases

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
        
}

console.log(letterGrade); */


// ========================>>> String

// allows us to work with texts, manipulate.

/* let userName = "1 Bro Code 2 \n \n";

console.log(userName);
// let userName = "oooooooooo"

// using .charAt() will return a character at a given index

console.log(userName.charAt(3));

// using.indexOf() will return the idex of the first occurrence of a character

console.log(userName.indexOf("o"));

// using .lastIndexOf() returns the idex of the last occurrence of a character

console.log(userName.lastIndexOf("o"));

// using .length returns the total number of character

console.log(userName.length);

// using.trim() removes whitespaces , both before and after

console.log(userName.trim());

// to set the characters of the string to upper case, use .toUpperCase()
// this ignores not alphabetic or already uppercase letters 

console.log(userName.toUpperCase());

// to set the characters of the string to lower case, use .toLowerCase()

console.log(userName.toLowerCase());

// to repeat a string, use .repeat()

console.log(userName.repeat(5))

// to check if a string starts with a certain character, use .startsWith(), returns bool

console.log(userName.startsWith(" "));

// a sample use case where username is written with empty space

if (userName.startsWith(" ")) {
    console.log("You name can't start with empty space");
} else {
    console.log(userName);
}

// to check if a string ends with a certain character, use .endsWith()

if (userName.endsWith("\n")) {
    console.log("You name can't end with empty space");
} else {
    console.log(userName);
}

// if a string includes a certain character, use .includes()

if (userName.includes(" ")) {
    console.log("You name can't have empty space");
} else {
    console.log(userName);
}

// replace certain character with something ,use .replaceAll()

let phoneNumber = "123-456-7890";

console.log(phoneNumber.replaceAll("-", "/"));


// .padStart(Value, padWith) this pads strings to certain length by adding the padWith character
// .padEnd and pad start are as their name

console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15,"0")); */



// ========================>>> String Slicing 

// it is a method for creating a substring from a portion of another string

// string.slice(start, end); the ending index is exclusive

// const fullName = "Bro Code";

/* let firstName = fullName.slice(0,4);
let lastName = fullName.slice(4, fullName.length); 
//// same as lastName = fullName.slice(4), will get all the way to the end


console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
console.log(firstChar);
let lastChar = fullName.slice(-1); 
//// - 2 would get the second index from the last and also -1
console.log(lastChar); */

/* // lets make a dynamic way to extract first and last name from a string based on space


let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" "), fullName.length).trim();
console.log(firstName);
console.log(lastName); */

/* 
const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(username);
console.log(extension); */


// ========================>>> Method Chaining

/* // calling one method after another using . dot 

let userName  = window.prompt("Enter you username");

// ----- No Chain 

/* userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();
let extraChar = userName.slice(1);
extraChar = extraChar.toLowerCase();
userName = letter + extraChar; */


//// ------ Chain

/* userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();


console.log(userName);  */


// ========================>>> Logical operator

// , AND &&, OR || , NOT ! , used for combining boolean values (true and false)

/* const temp = 200;

if (temp > 0 && temp <= 30) {
    console.log("Weather is good");
}else{
    console.log("Weather is bad");
}


if (temp <= 0 || temp >= 30) {
    console.log("Weather is actually bad");
}else{
    console.log("Weather is actually good");
}

const isSunny = true;

if (!isSunny) {
    console.log("It is not sunny");
} else {
    console.log("It is sunny");
} */


// ========================>>> Strict Equality

//// = assignment operator
//// == comparison operator (compare if values are equal)
//// === strict equality operator (compare if values and data types are equal)
//// != inequality operator
//// !== strict inequality operator


/* const PI = 3.14;

if (PI === "3.14") {
    console.log("That is PI");
}else{
    console.log("That is not PI");
}

if (PI !== "3.14") {
    console.log("This is NOT PI");
} else {
    console.log("This is PI");
} */

// ========================>>> While Loop

//// repeat some code WHILE some condition is true

// let userName = "";

/* while(userName === "" || userName === null) {
    console.log("You did not enter your username");
    userName = window.prompt("Enter username");
}
console.log(userName); */

/* let loggedIn = true;
let user;
let password;

do{
    user = window.prompt("Enter you name");
    password = window.prompt("Enter you password");
    if (user === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You have logged in");    
    }else{
        console.log("Invalid credential, please try again");
    }
}while(!loggedIn) */


// ========================>>> For Loop

// repeat some code limited amount of times 

/* for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("WOW!"); */

/* for (let i = 0; i <= 20; i++) {
    if(i === 13){
        break;
    }else if(i === 11){
        continue;
    }
    console.log(i);
} */

// ========================>>> Functions

//// a section of reusable code, declare once , use on demand, call to execute
/* let user = "Meow";
let age = 69;


function happyBirthday(username, age){ // username, age is parameter
    console.log("Happy birthday to you!");
    console.log(`You are awesome ${username}, you just turned ${age}`);
}

//// arguments must match the order of the parameters

happyBirthday(user, age); // user, age is argument 

happyBirthday("SpongeBob", 30);

function add(x, y){
    return x+y;
}

function subtract(x, y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

function isEven(x){
    return x%2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
console.log(isEven(14));

console.log(isValidEmail("meow@booboob.com")); */


// ========================>>> Variable Scope

/* //// variable scope = where a variable is recognized and accessible
//// local vs global

let x = 1;
//let x = 2; 
//// declaring x will produce and error, because they are in the same scope;

//// anytime a variable is declared within a set of {}, it is in a local scope;
function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}
function1();
function2();

//// above, there are no errors as both 'x' are within different scopes;

//// global scope is, a variable declared outside {} and outside function

//// if variable with same name available in both scopes, local one will be selected


let y = "Globally Available";

function function3(){
    const y = "Locally Available";
    console.log(y);
}
function function4(){
    y = "Modified global"
    console.log(y);
}

function3();
function4(); */

// ========================>>> Arrays

/* //// a variable like structure that can hold more than 1 value
//// always starts with zero 
let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[2]);

//// to change a value in a certain index 

fruits[0] = "coconut";
console.log(fruits);

//// we can add element using built in .push() method, adds at the end

fruits.push("apple");
console.log(fruits);

//// .pop() removes the last element of the array

fruits.pop();
console.log(fruits);

//// .unshift() method adds an element at the beginning of the array

fruits.unshift("mango");
console.log(fruits);

//// to remove the front element , use .shift() method

fruits.shift();
console.log(fruits);

//// to get length of the array , use .length

let numOfFruits = fruits.length;
console.log(`Number of fruits: ${numOfFruits}`);

//// find index of an element if matched , using .indexOf()

let index = fruits.indexOf("banana");
console.log(`Index of Banana: ${index}`);

index = fruits.indexOf("mango");
console.log(`Index of Mango: ${index}`);

//// if indexOf returns -1, means the element doesn't exist

//// using for loop to loop through array 

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    
}
console.log("\n");

for (let i = fruits.length-1; i >= 0; i--) {
    console.log(fruits[i]);
}

console.log("\n");

//// enhanced for loop

for (const fruit of fruits) {
    console.log(fruit);
}

//// to sort an array, use .sort(). For this, it will sort alphabetically

fruits.sort();
console.log(fruits);

//// sort reverse, use .reverse()
fruits.sort().reverse();
console.log(fruits); */

// ========================>>> Spread Operators

//// Spread operator ( ... ) allows an iterable such as an array or string
// /* //// to be expanded into separate elements (unpack the element)

// let numbers = [1,2,3,4,5];

// console.log(numbers);

// // let maximum = Math.max(numbers); // this will produce NaN
// let maximum = Math.max(...numbers);
// console.log(maximum);
// let minimum = Math.min(...numbers);
// console.log(minimum);

// let username = "Bro Code";
// let letters = [... username].join('-');
// console.log(letters);

// let fruits = ["apple", "banana", "orange"];

// //// we can create a shallow copy of this array using spread operator
// //// shallow copy is a different data structure, contains identical values
// /// 
// let newFruits = [...fruits,"milk"];
// console.log(newFruits);

// newFruits[0] = "avocado";

// console.log(fruits);
// console.log(newFruits); */

// ========================>>> rest parameters

/* // rest parameters = (...rest) allow a function work with a variable number
//  of arguments bundling them into an array 

// spread op = expands an array into separate elements
// rest op = bundles separate elements into an array 

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

function sum(...numbers){
    let result = 0;
    for( let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1,2,3,4,5);
console.log(`Your total is $${total}`);

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}
const totalAverage  = getAverage(1,2,3,4,5,6);
console.log(`Your average is $${totalAverage}`);

function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Spongebob", "SquarePants", "III");
console.log(fullName);
 */



// ========================>>> Callback

/* //// Callback = a function that is passed as an argument to another function

//// callback is used to handle asynchronous operations:
//// 1. Reading a file
//// 2. Network requests
//// 3. Interacting with database  

// hello(goodbye);
// wait(leave);
// leave(goodbye);
// hello(wait(leave(goodbye))); 
// //// we cant do these because the functions don't have return value


//// Proper Chaining

hello(() => 
    wait(() =>
        leave(() =>
            goodbye()
        )
    )
);

function hello(callback){
    console.log("Hello!");
    callback();
}

function leave(callback){
    console.log("Leave!");
    callback();
}

function wait(callback){
    console.log("Wait!");
    callback();
}

function goodbye(){
    console.log("Goodbye!"); 
}

//// second example

function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}


function displayDOM(result){
    document.getElementById("myH1").textContent = result;
}

sum(displayConsole, 1, 2);
sum(displayDOM, 1, 2); */


// ========================>>> For Each

/* //// forEach() = method used to iterate over the elements
////            of am array and apply a specified function(callback)
////            to each element

////            array.forEach(callback)

let numbers = [1,2,3,4,5];

function display(element){
    console.log(element);
}

function double(element, index, array){
    array[index] = element * 2;
}

function square(element, index, array){
    array[index] = Math.pow(element,2);
}


numbers.forEach(display);

numbers.forEach(double);

numbers.forEach(display);

numbers.forEach(square);

numbers.forEach(display);

let fruits= ["apple", "orange", "banana", "coconut"];

function displayFruits(elements){
    console.log(elements);
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}


fruits.forEach(upperCase);
fruits.forEach(displayFruits);
fruits.forEach(lowerCase);
fruits.forEach(displayFruits);
fruits.forEach(capitalize);
fruits.forEach(displayFruits); */


// ========================>>> Map

/* //// .map() = accepts a callback and applies that function to
////          each element of an array, then return a new array

const numbers = [1, 2, 3, 4, 5];

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

const squares = numbers.map(square);

console.log(squares);

const cubes = numbers.map(cube);

console.log(cubes);


//// The key difference between .map and .forEach is , map returns a 
//// new array, keeps the original unchanged, while forEach changes the
//// original array


const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(students);
console.log(studentsUpper);
console.log(studentsLower);


//// another example

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

console.log(dates.map(formatDates));

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
} */


// ========================>>> Filter

/* //// .filter() = creates a new array by filtering out elements

let numbers = [1,2,3,4,5,6,7];

function isEven(element){
    return element%2 === 0;
}

function isOdd(element){
    return element%2 !== 0;
}

let evenNumbs = numbers.filter(isEven);
let oddNumbs = numbers.filter(isOdd);

console.log(evenNumbs);

console.log(oddNumbs);


const ages = [16, 17, 18, 18, 19, 20, 60];

function isAdult(element){
    return element >= 18;
}

function isMinor(element){
    return element < 18;
}

const adults = ages.filter(isAdult);
const minors = ages.filter(isMinor);
console.log(adults);
console.log(minors);


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(shortWords);
console.log(longWords); */


// ========================>>> Reduce

/* //// .reduce() = reduce the elements of an array to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

function sum(previous, next){
    return previous + next;
}

console.log(`Your total is ${total} pounds`);


const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

console.log(maximum);

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

const minimum = grades.reduce(getMin);

console.log(minimum); */

// ========================>>> Function Expressions 

/* //// function declaration = define a reusable block of code
////                        that performs a specific task


// function hello(){
//     console.log("hello!");
// }

//// function expressions = a way to define functions as values 
////                        or variables 

const hello = function(){
    console.log("Hello!")
}

hello();

setTimeout(hello, 3000);

setTimeout(function(){
    console.log("Hello Again!")
}, 3000);

const numbers = [1,2,3,4,5,6];

function square(element){
    return Math.pow(element, 2);
}

const squares = numbers.map(square);

console.log(squares);

//// using function expression

const cubes = numbers.map(function(element){
   return Math.pow(element, 3); 
});

console.log(cubes);

const evenNumbs = numbers.filter(function(element){
    return element%2 === 0;
});

console.log(evenNumbs);

const oddNumbs = numbers.filter(function(element){
    return element%2 !== 0;
});

console.log(oddNumbs);

const total = numbers.reduce(function(accumulator, element){
    return accumulator+element;
});

console.log(total);

//// benefits :
//// 1. Callbacks in asynchronous operations 
//// 2. Higher-order functions
//// 3. Closures
//// 4. Event Listeners */

// ========================>>> Arrow Functions

/* //// arrow function = a concise way to write function expressions
////                  good for simple functions that you use only once
////                  (parameters) => some code


const hello = (name) => console.log(`Hello ${name}`);

hello("Bro!");

const age = (years) => {
    console.log(`You are ${years} old`);
}

age(36);

const birthday = (name, years) => console.log(`Happy ${years}th birthday ${name}!`);
birthday("Tom", 34);


setTimeout(()=> console.log("Bro Man!"), 3000);

const numbers = [1,2,3,4,5,6];

console.log(numbers.map((element) => Math.pow(element, 2)));

console.log(numbers.filter((element) => element%2===0));
console.log(numbers.filter((element) => element%2 !== 0));
console.log(numbers.reduce((accumulator, element) => accumulator + element)); */


// ========================>>> JavaScript Objects

/* //// object = a collection of related properties and/or methods
////          Can represent real world objects (people, products, places)
////          object = {
////                key: value
////                function()             
////           }

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed : true,
    sayHello: () => console.log("Hello!, I am Spongebob."),
    eat: () => console.log("I am eating a Krabby Patty"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed : false,
    sayHello: () => console.log("Hello!, I am Patrick."),
    eat: () => console.log("I am eating roast beef, chicken and pizza"),
}

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
person2.sayHello();
person2.eat(); */

// ========================>>> THIS

/* //// this = reference to the object where THIS is used
////        (the object depends on the immediate context) 
////        person.name = this.name


const person1 = {
    name: "Spongebob",
    faveFood : "hamburgers",
    sayHello: function(){
        console.log(`Hi, I am ${this.name}`);
    },
    eat: function(){console.log(`${this.name} is eating ${this.faveFood}`)},
}

person1.sayHello();
person1.eat();

const person2 = {
    name: "Patrick",
    faveFood : "Pizza",
    sayHello: function(){
        console.log(`Hi, I am ${this.name}`);
    },
    eat: function(){console.log(`${this.name} is eating ${this.faveFood}`)},
}
person2.sayHello();
person2.eat();


//// By default we are inside a window object, so if we use 
//// this outside the person object, we will invoke the global 
//// window object
// console.log(this);
//// *** this keyword does not work with Arrow Function, it invokes 
//// *** the global window object */


// ========================>>> Constructor

/* //// constructor = special method for defining the 
////               properties and method of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,

    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");

console.log(car1.make);
car1.drive();

const car2 = new Car("Chevrolet", "Camaro", 2025, "Blue");

console.log(car2.make);
car2.drive(); */

// ========================>>> Classes

/* //// class = (ES6 features) provides a more structured and cleaner 
////          way to work with objects compared to traditional
////          constructor functions ex. static keyword, 
////          encapsulation, inheritance 


//// class will serve as a blueprint

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: BDT ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
product1.displayProduct();

const totalProduct1 = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): BDT ${totalProduct1.toFixed(2)}`);
const product2 = new Product("Pant", 22.50);
product2.displayProduct();
const product3 = new Product("Underware", 15.99);
product1.displayProduct(); */


// ========================>>> Static

/* //// static = keyword that defines properties or methods that belong
////          to a class itself rather than the objects created from
////          that class(class owns anything static, not the object)

class MathUtil{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
const mt1 = new MathUtil();


class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, I am ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online right now!`);
    }

}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
user1.sayHello();
user2.sayHello();

console.log(user1.username);
console.log(user2.username);

// user1.getUserCount(); //// this will create a type error
// console.log(user1.userCount); //// this will return undefined
console.log(User.userCount);
User.getUserCount(); */


// ========================>>> Inheritance

/* //// inheritance = allows a new class to inherit properties and methods
////               from an existing class ( parent -> child) 
////               helps with code reusability


class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }

}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running!`);
    }
}

class Fish extends Animal{
    name = "Fish";
    
    swim(){
        console.log(`This ${this.name} is swimming!`);
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`This ${this.name} is flying!`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.alive = false;
console.log(rabbit.alive);

hawk.eat();
fish.sleep();
rabbit.run();
fish.swim();
hawk.fly(); */


// ========================>>> Super

/* //// super = keyword is used in classes to call the constructor or
////         access the properties and methods of a parent(superclass)
//// this = this object
//// super = the parent of the object


// class Animal{
//     constructor(){

//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.swimSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.flySpeed = flySpeed;
//     }
// }
//// In this above example, we are repeating ourself for name and age
//// Using super, we can be more efficient

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} kmh`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim (){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("buggy", 1, 25);
const fish = new Fish("nimo",2, 12);
const hawk = new Hawk("hawkeye", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(`The ${rabbit.age} year old ${rabbit.name} runs at ${rabbit.runSpeed} km/h!`);

console.log(`Hi,I am ${fish.name}, I am a fish` +  
`despite being only ${fish.age} years old, I swim at ${fish.swimSpeed} km/h!`);

rabbit.run();
fish.swim();
hawk.fly(); */

// ========================>>> Getters and Setters

/* //// getter = special method that makes a property readable
//// setter = special method that makes a property writable

//// validate and modify a value when reading/writing a property

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if (newWidth > 0) {
            this._width = newWidth;
        }else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if (newHeight > 0) {
            this._height = newHeight;
        }else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)} cm`;
    }

    get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${this._width * this._height} cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.height = -111;
rectangle.width = "pizza"

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);



class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstname = newFirstName;
        }else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName= newLastName;
        }else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if (typeof newAge === "number" && newAge >=0)  {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstname;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstname + " " + this._lastName;
    }
}

const person1 = new Person("Spongebob", "Squarepants", 30);


console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1._banana);
console.log(person1.fullName);

console.log(person1.age);

//// when using getters and setters, one must keep the following in mind:
//// the name in the constructor (this.x) , x being the property
//// has to match the get x, set x naming convention, otherwise
//// the this.x = value inside the constructor will not trigger 
//// the setter method for the property x

//// inside the setter method, the private variable can be anything
//// the internal variable _x is the one holding value so when you
//// do a get x(), you return the internal _x */


// ========================>>> Destructuring

/* //// destructuring = extract values from arrays and objects, then
////                 assign them to variables in a convenient way
////                 [] = to perform array destructuring
////                 {} = to perform object destructuring

//// Example 1: Swap the values of Two variables

let a = 1;
let b = 2;

console.log(`a = ${a}`);
console.log(`b = ${b}`);

//// destructuring on the left hand side, creating a new array on the right 
[a, b] = [b, a];


console.log(`a = ${a}`);
console.log(`b = ${b}`);

//// Example 2: Swap Two elements in an array

const colors = ["red", "green", "blue", "black", "white"];

console.log(`Colors before:  = ${colors}`);


//// destructuring on the left hand side, creating a new array on the right 
[colors[0], colors[4]] = [colors[4], colors[0]];


console.log(`Colors after:  = ${colors}`);


//// Example 3: Assign array elements to variables

//// destructuring on the left hand side, creating a new array on the right

//// we can combine destructuring with rest parameters using ...
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;



console.log(`First Color: ${firstColor}`);
console.log(`Second Color: ${secondColor}`);
console.log(`Third Color: ${thirdColor}`);
console.log(`Extra colors: ${extraColors}`);


//// Example 4: Extract values from objects

const person1 = {
    firstName1: "Spongebob",
    lastName1: "Squarepants",
    age1: 30,
    job1: "Fry Cook",
}

const person2 = {
    firstName2: "Patrick",
    lastName2: "Star",
    age2: 34,
}

const {firstName1, lastName1, age1, job1} = person1;

console.log(firstName1);
console.log(lastName1);
console.log(age1);
console.log(job1);


const {firstName2, lastName2, age2, job2="unemployed"} = person2;

console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);


//// Example 5: Destructure in function parameters

const person3 = {
    firstName: "Sandy",
    lastName: "Cheeks",
    age: 20,
}

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age} years`);
    console.log(`Job: ${job}`);
}

displayPerson(person3);

//// Keep the following things in mind when destructuring objects 
//// the property names must match key names of the object
//// if there is value for a property, we can set a  default
//// the default value will only show when there is no such
//// property for that object, otherwise it will show the value
//// of the property for that object. */


// ========================>>> Nested Objects

/* //// nested objects = Objects inside of other Objects
////                  Allows us to represent more complex data structures
////                  Child Object is enclosed by a Parent Object

////                  Person{Address{} , ConstructInfo{}}
////                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "Jellyfishing", "Cooking"],
    address: {
        street: "124 Conch St.",
        city: "Ocean Bottom",
        country: "International Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);


//// Looping through

for(const property in person.address){
    console.log(person.address[property]);
}

class Address{
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person{
    //// passing in different parts of address, use rest parameters to 
    //// store them in an array
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}


const person1 = new Person("Spongebob",
                            30,
                            "124 Conch Street",
                            "Ocean Bottom",
                            "Int. Waters"

)
const person2 = new Person("Patrick",
                            37,
                            "128 Conch Street",
                            "Ocean Bottom",
                            "Int. Waters"
)

const person3 = new Person("Squidward",
                            37,
                            "126 Conch Street",
                            "Ocean Bottom",
                            "Int. Waters"
)

console.log(person1.name);
console.log(person1.address);
console.log(person2.address.city);
console.log(person3.address.country); */


// ========================>>> Array Of Objects

/* const fruits = [{
                    name:"apple",
                    color: "red",
                    calories: 95
                },
                {
                    name:"orange",
                    color: "orange",
                    calories: 45
                },
                {
                    name:"banana",
                    color: "yellow",
                    calories: 105
                },
                {
                    name:"coconut",
                    color: "white",
                    calories: 159
                },
                {
                    name:"pineapple",
                    color: "yellow",
                    calories: 37
                },
]

console.log(fruits[0].name);
console.log(fruits[2].calories);

//// to add an object, we can use push() method
fruits.push(
    {
        name: "grapes",
        color: "purple",
        calories: 62
    }
)
console.log(fruits);

//// to remove an object, use pop() method

fruits.pop();

console.log(fruits);

//// to remove objects from certain indices, use splice

fruits.splice(0,1);
console.log(fruits);


//// looping through the object array 

fruits.forEach(fruit => console.log(fruit.color));

//// example of map

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);


//// example of filter

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);
const lowCalFruits = fruits.filter(fruit => fruit.calories < 50);
console.log(lowCalFruits);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalFruits);

//// example of reduce, which will return a single value

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit); */


// ========================>>> Sort

/* //// sort() = method used to sort elements of an array in place.
////          Sorts elements as strings in lexicographic order, not alphabetical
////          lexicographic = (alphabet + number + symbol) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [1, 10, 2, 9, 3, 8, 4, 5, 6];
numbers.sort();
console.log(numbers); //// this will not sort it properly

//// due to sorting lexicographically, the result will be :
//// [1, 10, 2, 3, 4, 5, 6, 8, 9], as each treated as string

//// to sort numbers, we have to follow a certain set of steps
//// we have to write a custom comparison function, inside the 
//// sort() method, as a callback

let numbersToBe = [1, 10, 2, 9, 3, 8, 4, 5, 6];
numbersToBe.sort((a,b) => a-b); //// this forces js to treat it as number
console.log(numbersToBe);
numbersToBe.sort((a, b) => b-a);
console.log(numbersToBe);


//// sort  based on given property

const people = [
                {
                    name: "Spongebob",
                    age: 30,
                    gpa: 3.0
                },
                {
                    name: "Patrick",
                    age: 37,
                    gpa: 1.5
                },
                {
                    name: "Squidward",
                    age: 51,
                    gpa: 2.5
                },
                {
                    name: "Sandy",
                    age: 27,
                    gpa: 4.0
                }
               ];

people.sort((a,b) => a.age - b.age);
console.log(people);
people.sort((a, b) => b.age - a.age);
console.log(people);
people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

people.sort(); //// By default, sorting by the last property here
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people); */


// ========================>>> Shuffle an array

/* const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);
console.log(cards);


//// Use Fisher-Yates algorithm


function shuffle(array){
    for (let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i+1));
        [array[i], array[random]] = [array[random], array[i]];
    }
} */


// ========================>>> Date Objects


/* //// date object = Objects that contain values that represent dates and times
////               These date objects can be changed and formatted


//// Date Constructor follows Date(year, month, day, hour, minute, second, ms)
const date1 = new Date(2024, 0, 1, 2, 3, 5);
console.log(date1);

//// we can also pass string day representation
const date2 = new Date("2024-01-02T12:00:00Z");
console.log(date2);

//// also we can pass in given amount of time in milliseconds,
////  since epic (when the computer things time has begun)

const date3 = new Date(1700000000000);
console.log(date3);


//// by default, no argument provides current date and time

const dateObject = new Date();
console.log(dateObject);

const year = dateObject.getFullYear();
const month = dateObject.getMonth();
const date = dateObject.getDate();
const day = dateObject.getDay();
const hour = dateObject.getHours();
const minute = dateObject.getMinutes();
const second = dateObject.getSeconds();

console.log(year);
console.log(month);
console.log(date);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);

dateObject.setFullYear(2026);
dateObject.setMonth(0);
dateObject.setDate(31)

console.log(dateObject);


//// we can also compare two date objects 

const dateObjOne = new Date("2023-12-31");
const dateObjTwo = new Date("2024-01-01");

dateObjTwo > dateObjOne ? console.log("Happy New Year!") : console.log("Wait!"); */


// ========================>>> Closure

/* //// closure = A function defined inside of another function,
////           the inner function has access to the variables
////           and scope of the outer function.
////           Allow for private variables and state maintenance
////           Used frequently in JS frameworks: React, Vue, Angular


function outer(){

    let message = "Hello!";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

message = "Goodbye"; //// This will not update, closures make variables private
outer();


//// Example of closures maintaining the state of a variable

function increment(){

    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

increment();
increment();
//// ......
//// Every time we invoke increment, we are incrementing but we are also 
//// initializing the value of count.

//// to maintain state , we can use closure while keeping the variable secure

function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment:increment, getCount:getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();counter.increment();counter.increment();counter.increment();
let currentCount = counter.getCount();
console.log(`Current count: ${currentCount}`);


//// example of a game 


function createGame(){
    let score = 0;

    function increaseScore(points){

        score += points;
        console.log(`+${points} pts`);
    }

    function decreaseScore(points){

        score -= points;
        console.log(`-${points} pts`);
    }


    function getScore(){
        return score;
    }

    return {increaseScore:increaseScore, decreaseScore:decreaseScore, getScore:getScore }
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(3);
game.increaseScore(6);

console.log(`Final score is ${game.getScore()} pts`); */


// ========================>>> Set Timeout

/* //// setTimeout() = function in JavaScript that allows you to schedule the
////                execution of a function after an amount of time (milliseconds)
////                Times are approximate (varies based on the workload of the 
////                JavaScript runtime env.)

////                setTimeout(callback, delay);
//// clearTimeout(timeoutID) = can cancel a timeout before it triggers

function sayHello() {
    window.alert("Hello!");
}

setTimeout(sayHello, 3000);

setTimeout(function(){window.alert("How are you?")}, 4000);

setTimeout(() => {
    window.alert("Bye");
}, 5000);

const timeoutID = setTimeout(() => {
    window.alert("Are you still there bro ?");
}, 10000);

clearTimeout(timeoutID);

let timeoutID2;

function startTimer(){
    timeoutID2 = setTimeout(() => {
       window.alert("You clicked me 10 seconds ago"); 
    }, 10000);
    console.log("Started");
    
}

function clearTimer(){

    clearTimeout(timeoutID2);
    console.log("Cleared");
    
} */


// ========================>>> ES6 Modules

/* //// ES6 modules = An external file that contains reusable code
////               that can be imported into other JavaScript files.
////               Write reusable code for many different apps.
////               Can contain variables, classes, functions.. and more
////               Introduces as part of ECMAScript 2015 update

import {getCircumference, PI, getArea, getVolume} from './mathUtil.js'

console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)} cm^2`);

const volume = getVolume(10);
console.log(`${volume.toFixed(2)} cm^3`); */



// ========================>>> Synchronous & Asynchronous

/* //// synchronous = Executes line by line consecutively  in a sequential manner
////               Code that waits for an operation to complete.

//// asynchronous = Allows multiple operations to be performed concurrently
////                without waiting. Doesn't block the execution flow and allow
////                the program to continue. This is used in I/O operations.
////                network requests, fetching data ... anywhere there is a need
////                for indefinite time of execution. 
////                Handled with : Callbacks, Promises, Async/Await


//// synchronous code:

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

//// asynchronous code:

setTimeout(() => console.log("Async Task 5"), 3000);

/////////////////////////////////////////////

console.log("Task 6");
console.log("Task 7");
console.log("Task 8");

console.log("\n");
console.log("\n");


//// Handling asynchronous code

function func1(callback){
    setTimeout(() => {console.log("Asynchronous Task 1"); 
                      callback();
                     }, 4000);
}

function func2() {
    console.log("Synchronous Task 1");
    console.log("Synchronous Task 2");
    console.log("Synchronous Task 3");
}

func1(func2); */



// ========================>>> Error objects

/* //// error = An object that is created to represent a problem that occurs 
////        Occurs often with user input or establishing a connection
////        Object created to represent a  problem


//console.leg("Hello!");
//// The above line will produce a TypeError
//// Errors interrupt the flow of the program

//console.log(x);
//// The above line will throw Uncaught ReferenceError, since we did not define x

//// Other possible errors : Network, Promise rejection, security etc ...


//// We can Handle errors using the try {}, catch {} and finally {} blocks
//// try {} = Encloses code that might potentially cause an error
//// catch {} = Catch and handle any thrown Errors from try {}
//// finally {} = (optional) Always executes. Used mostly for clean up
////              Example: closes file, closes connections, releases resources etc..


try {
    console.log(x);
    
} catch (error) {
    //// Gracefully handled error
    //// for error, console.error is preferred, good for debugging
    console.error(error);
    
}

finally{
    //// Closing files
    //// Closing connections
    //// Releasing resources
    console.log("This always executes");
    
}



//// Handling user input errors


//// Potentially dangerous code, hence, surround with try {}

try {
    const dividend = Number(window.prompt("Enter a dividend")); //// the number being divided
    const divisor = Number(window.prompt("Enter a divisor")); //// Number dividing by
    
    //// we can intentionally throw an error:
    if (divisor == 0) {
        throw new Error("You can't divide by zero!");
        
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number!");
        
    }
    const result = dividend / divisor ;
    console.log(result);

} catch (error) {
    console.error(error);
}

console.log("You have reached the end"); */


// ========================>>> DOM
/* //// DOM = Document Object Model
////       Object{} that represents the page you see in the web
////       browser and provides you with an API to interact with it.
////       Web browser constructs the DOM when it load an HTML document.
////       and structures all the elements in a tree-like representation.
////       JavaScript can access the DOM to dynamically
////       change the content, structure and style of a web page.

document.title = "You are in control";

document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

console.log(document);
console.dir(document);

const username = "Bro code";

const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? "Guest" : " " + username; */



// ========================>>> Element Selectors

/* //// element selectors = Methods used to target and manipulate HTML elements
////                     They allow you to select one or multiple HTML elements
////                     from the DOM (Document Object Model)

//// 1. document.getElementById() -> ELEMENT OR NULL
//// 2. document.getElementsClassName() -> HTML COLLECTION
//// 3. document.getElementsByTagName() -> HTML COLLECTION
//// 4. document.querySelector() -> FIRST ELEMENT OR NULL
//// 5. document.querySelectorAll() -> NODE LIST

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

console.dir(myHeading);

const nullHeading = document.getElementById("my-heading-two");
console.log(nullHeading);


const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.backgroundColor = "red";

for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}

//// fruits.forEach(); -> This will produce an error as HTML collection
////                     Does not provide a forEach method

//// However, we can type cast it to an array and then use forEach()


let fruitsArray  = Array.from(fruits);
console.log(fruitsArray);

Array.from(fruits).forEach(fruit => fruit.style.backgroundColor = "red");


const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[1].style.backgroundColor = "Yellow";

for (let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "red";
}

const listItemElements = document.getElementsByTagName("li");

for(let liElement of listItemElements){
    liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach(liElement => liElement.style.backgroundColor = "lightgreen");
Array.from(listItemElements).forEach(liElements => liElements.style.backgroundColor = "red");


//// QuerySelector -> selects only the first occurrence

const classElement = document.querySelector(".fruits");
classElement.style.backgroundColor = "lightgreen";

const tagElement = document.querySelector("h4");
tagElement.style.backgroundColor = "blue";

const listItemElement = document.querySelector("li");
listItemElement.style.backgroundColor = "pink";

const unorderedListElement = document.querySelector("ul");
unorderedListElement.style.backgroundColor = "orange"; 

const orderedList = document.querySelector("ol"); //// will give null as it doesn't exist
console.log(orderedList);



//// QuerySelectorAll

//// it is similar to HTML collections but it does provide built-in methods
//// the methods are similar to array methods 

//// Unlike HTML collections (which are live), Node-list (provided by QuerySelectorAll)
//// is STATIC, meaning they do not update automatically in the DOM


const allFruits = document.querySelectorAll(".fruits");

allFruits[0].style.backgroundColor = "green";

const allVegetables = document.querySelectorAll("li");

console.log(allVegetables);

allVegetables.forEach(vegetable => vegetable.style.backgroundColor = "green" );

//// Why It Is STATIC :

//// let boxes = document.querySelectorAll('.box'); // grabs 3 elements
//// Then dynamically add another <div class="box"> to the DOM
//// document.body.innerHTML += '<div class="box">New Box</div>';
//// console.log(boxes.length); // Still 3, NOT 4
//// let liveBox = document.getElementsByClassName('box');
//// console.log(liveBox.length); /// will show 4 as it updates live */



// ========================>>> DOM Navigation

/* //// DOM Navigation = The process of navigating through the structure of an HTML
////                  document using JavaScript

//// .firstElementChild
//// .lastElementChild
//// .nextElementSibling
//// .previousElementSibling
//// .parentElement
//// .children ... etc (more exists)


const element = document.getElementById("fruits");
const ulElements = document.querySelectorAll("ul");

//// -----------    .firstElementChild  -----------



const firstChild  = element.firstElementChild;

firstChild.style.backgroundColor = "yellow";

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "red";
});


//// -----------    .lastElementChild  -----------

const lastChild  = element.lastElementChild;

lastChild.style.backgroundColor = "yellow";

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "pink";
});


//// -----------    .nextElementSibling  -----------

const firstChildElement = document.getElementById("apple");
const nextSibling = firstChildElement.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

const firstChild2 = document.getElementById("fruits");
const nextSibling2 = firstChild2.nextElementSibling;
nextSibling2.style.backgroundColor = "blue";


//// -----------    .previousElementSibling  -----------

const midChildElement = document.getElementById("orange");
const prevSibling = midChildElement.previousElementSibling;
prevSibling.style.backgroundColor = "orange";


const midChildElement2 = document.getElementById("vegetables");
const prevSibling2 = midChildElement2.previousElementSibling;
prevSibling2.style.backgroundColor = "red";


//// -----------    .parentElement  -----------

const randomElement = document.getElementById("apple");
const parent = randomElement.parentElement;

parent.style.backgroundColor = "yellow";


//// -----------    .children  -----------

const parentElement = document.getElementById("fruits");

const children = parentElement.children;

console.log(children); //// returns HTML collection

Array.from(children).forEach(element => element.style.backgroundColor = "teal");

children[1].style.backgroundColor = "gray"; */



// ========================>>> Add and Change HTML Elements 


/* const box2 = document.getElementById("box2");

//// Steps:
//// 1. Create the element

const newH1 = document.createElement("h1");
const secondH1 = document.createElement("h1");
const thirdH1 = document.createElement("h1");
const lastH1 = document.createElement("h1");


//// 2. Add attributes/properties

newH1.textContent = "I have been appended";
secondH1.textContent = "I have been prepended";
thirdH1.textContent = "Middle Baby";
lastH1.textContent = "Last Child";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
thirdH1.style.color = "pink";
thirdH1.style.textAlign = "center";

//// 3. Append element to DOM

document.body.prepend(secondH1);
document.body.append(newH1);
document.getElementById("box4").append(newH1);
document.getElementById("box2").prepend(secondH1);

document.body.insertBefore(thirdH1, box2);


//// If they did not have id(s), we could use querySelectorAll

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(lastH1, boxes[3]);

//// 4. Remove the element

document.body.removeChild(lastH1);
document.getElementById("box2").removeChild(secondH1);
document.body.removeChild(thirdH1);
document.getElementById("box4").removeChild(newH1);

boxes.forEach(box => document.body.removeChild(box));

//// Example 2

const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "pink";

const middleListItem = document.createElement("li");
middleListItem.textContent = "passion fruit";
middleListItem.id = "coconut";
middleListItem.style.fontWeight = "bold";
middleListItem.style.backgroundColor = "green";


const lastListItem = document.createElement("li");
lastListItem.textContent = "raspberry";
lastListItem.id = "raspberry";
lastListItem.style.backgroundColor = "red";


document.getElementById("fruits").append(newListItem);

document.getElementById("fruits").insertBefore(middleListItem, document.getElementById("orange"));

//// what if the fruits did not have id(s)?

const fruits = document.querySelectorAll("#fruits li");
console.log(fruits);
document.getElementById("fruits").insertBefore(lastListItem, fruits[4]);

document.getElementById("fruits").removeChild(lastListItem);

document.querySelectorAll("li").forEach(item => document.getElementById("fruits").removeChild(item));

document.body.removeChild(document.getElementById("fruits")); */



// ========================>>> Mouse Events

/* //// eventListener = Listen for specific events to create interactive
////                 web pages. Events: click, mouseover, mouseout
////                 .addEventListener(event, callback)


//// click -> when we click on something
//// mouseover -> when we hover over something
//// mouseout -> when we leave something after hovering

const myBox = document.getElementById("my-box");
const myButton = document.getElementById("myBtn");

function changeColor(event){
    // console.log(event);
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🫨"
}
//// *** event is an object provided to us by the browser
//// it contains information about the event that occurred
//// we do not need to pass-in the event explicitly inside the callback

myBox.addEventListener("click", changeColor);
myBox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "red";
    event.target.textContent = "NOOO! 🫨"
});

myBox.addEventListener("click", event=>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🫨"
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't! 😠"
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😄"
});


myButton.addEventListener("click", event=>{
    myBox.style.backgroundColor = "red";
    myBox.textContent = "How Dare! 😒"
}); */



// ========================>>> Key Events

/* //// eventListener = Listen for specific events to create interactive
////                 web pages. Events: keydown, keyup
////                 document.addEventListener(event, callback)


const myBox = document.getElementById("myBox");

const moveAmount = 10;
let x = 0;
let y = 0;



document.addEventListener("keydown", event =>{
    console.log(`Keydown = ${event.key}`);
    myBox.textContent = "😱"
    myBox.style.backgroundColor = "tomato";
    
});

document.addEventListener("keyup", event =>{
    console.log(`Keyup = ${event.key}`);
    myBox.textContent = "😃"
    myBox.style.backgroundColor = "lightblue";
    
});


document.addEventListener("keydown", event =>{

    event.preventDefault();

    if (event.key.startsWith("Arrow")) {
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
}); */



// ========================>>> Show and Hide Elements

/* const myButton = document.getElementById("myBtn");
const myImage = document.getElementById("myImg");

// myButton.addEventListener("click", event=>{

//     if(myImage.style.display === "none"){
//         myImage.style.display = "block";
//         myButton.textContent = "Hide";
//     }else{
//         myImage.style.display = "none";
//         myButton.textContent = "Show";
//     }
    
// });


myButton.addEventListener("click", event=>{

    if(myImage.style.visibility === "hidden"){
        myImage.style.visibility = "visible";
        myButton.textContent = "Hide";
    }else{
        myImage.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
    
}); */



// ========================>>> NodeList

/* //// node list = Static collection of HTML elements by (id, class, element)
////             Can be created by using querySelectorAll()
////             Similar to an array, but no (map, filter, reduce)
////             NodeList won't update to automatically reflected changes


let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);


//// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    // button.style.backgroundColor = "green";
    button.textContent += "🤣";
});

//// CLICK event listener

buttons.forEach(button  => {
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "tomato";
    });
});

//// MOUSEOVER + MOUSEOUT event listener 

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});


//// ADD AN ELEMENT 

const newButton = document.createElement("button");
newButton.textContent = "Button5🤣";
newButton.classList = "myButtons";

document.body.append(newButton);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);


//// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
        
    });
}); */



// ========================>>> ClassList 

/* //// classList = Element property in JavaScript used to interact
////             with an element's list of classes (CSS classes)
////             Allows you to make reusable classes for many
////             Elements across your webpage.

//// add()
//// remove()
//// toggle(Remove if present, Add if not)
//// replace(oldClass, newClass)
//// contains

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myButton.addEventListener("click", event => {
    myButton.classList.add("enabled");
});
myH1.classList.add("enabled");


myButton.addEventListener("mouseover", event => {
    myButton.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    myButton.classList.toggle("hover");
});

myButton.addEventListener("click", event => {
    
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🤬";
    } else {
        myButton.classList.replace("enabled", "disabled");        
    }

});

myH1.addEventListener("click", event => {
    
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🤬";
    } else {
        myH1.classList.replace("enabled", "disabled");        
    }

});


let buttons = document.querySelectorAll(".myButtons");
buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬"
        }else{
            event.target.classList.replace("enabled", "disabled");
        }
        
    });
});
 */



// ========================>>> Callback Hell

/* //// callback hell = Situation in JavaScript where callbacks are
////                 nested within callbacks to the degree where
////                 the code is difficult to read. Old pattern
////                 to handle asynchronous functions. Use Promises
////                 + async/await to avoid Callback Hell



function task1(callback){
    setTimeout(() => {
        console.log("Task 1 Completed!");
        callback();
    }, 2000);
    
}
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 Completed!");
        callback();
    }, 1000);
    
}
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 Completed!");
        callback();
    }, 3000);
}
function task4(callback){
    setTimeout(() => {
        console.log("Task 4 Completed!");
        callback();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All task completed!");
            });
        });
    });
});
 */



// ========================>>> Promise

/* //// promise = An object that manages asynchronous operations.
////           Wrap a Promise object around {asynchronous code}
////           "I Promise to return a value"
////           PENDING -> RESOLVED OR REJECTED
////           new Promise((resolve, reject) => {asynchronous code})


//// DO THIS IN ORDER
//// WALK THE DOG
//// CLEAN THE KITCHEN
//// TAKE THE TRASH OUT


//// Using callbacks

// function walkDog(callback){
//     setTimeout(() => {
//         console.log("You walked the dog 🐕‍🦺");
//         callback();
//     }, 1500);
// }

// function cleanTheKitchen(callback){
//     setTimeout(() => {
//         console.log("You cleaned the kitchen 🧹");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback){
//     setTimeout(() => {
//         console.log("You took out the trash 🗑️");
//         callback();
//     }, 500);
// }

// walkDog(() => {
//     cleanTheKitchen(() => {
//         takeOutTrash(() => console.log("All Task Completed!")
//         );
//     });
// });


//// This can quickly get a lot more complicated
//// We can do this using promise
//// if one promise rejects, other dependent functions  will not execute
function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;

            if (dogWalked) {
                resolve("You walked the dog 🐕‍🦺");
            } else {
                reject("You did not walk the dog 🐕‍🦺");
            }
            
        }, 1500);
    });
}

function cleanTheKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;
            
            if (kitchenCleaned) {
                resolve("You cleaned the kitchen 🧹");
            } else {
                reject("You did not clean the kitchen 🧹")
            }
            
        }, 2500);
    });
}

function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookOutTrash = false;

            if (tookOutTrash) {
                resolve("You took out the trash 🗑️");
            } else {
                reject("You dod not take out the trash 🗑️")
            }
            
        }, 500);
    });
    
}

walkDog().then(value => {console.log(value); return cleanTheKitchen();})
         .then(value => {console.log(value); return takeOutTrash();})
         .then(value => {console.log(value); console.log("All Task Completed ✅");})
         .catch(error => console.error(error)); */




// ========================>>> Async / Await

/* //// async = makes a function return a promise
//// await = makes an async function wait for a promise

////         Allows you to write asynchronous code in a synchronous manner
////         Async doesn't have a resolve or reject parameter 
////         Everything after Await is placed in an event queue

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;

            if (dogWalked) {
                resolve("You walked the dog 🐕‍🦺");
            } else {
                reject("You did not walk the dog 🐕‍🦺");
            }
            
        }, 1500);
    });
}

function cleanTheKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;
            
            if (kitchenCleaned) {
                resolve("You cleaned the kitchen 🧹");
            } else {
                reject("You did not clean the kitchen 🧹")
            }
            
        }, 2500);
    });
}

function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookOutTrash = true;

            if (tookOutTrash) {
                resolve("You took out the trash 🗑️");
            } else {
                reject("You dod not take out the trash 🗑️")
            }
            
        }, 500);
    });
    
}

async function doChores() {

    try{
        const walkDogResolved = await walkDog();
        console.log(walkDogResolved);

        const cleanKitchenResult = await cleanTheKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores! Have a candy 🍬");
    }catch(error){
        console.error(error);
    }   
}

doChores(); */


// ========================>>> JSON 

/* //// JSON = (JavaScript Object Notation) data-interchanging format
////        Used for exchanging data between a server and a web application
////        JSON files {key:value} OR [value1, value2, value3]

////        JSON.stringify() = converts a JS object to JSON string
////        JSON.parse() = converts a JSON string to a JS object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const jsonStringName = JSON.stringify(names);
console.log(names);
console.log(jsonStringName);

const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}

console.log(person);

const jsonStringPerson = JSON.stringify(person);
console.log(jsonStringPerson);


const people = [
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
];

console.log(people);

const jsonStringPeople = JSON.stringify(people);
console.log(jsonStringPeople);


//// Parse 


const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[  {"name": "Spongebob","age": 30,"isEmployed": true},
                       {"name": "Patrick","age": 34,"isEmployed": false},
                       {"name": "Squidward","age": 50,"isEmployed": true},
                       {"name": "Sandy","age": 27,"isEmployed": false}]`;


console.log(jsonNames);
const parsedNames = JSON.parse(jsonNames);
console.log(parsedNames);

console.log(jsonPerson);
const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);

console.log(jsonPeople);
const parsedPeople = JSON.parse(jsonPeople);
console.log(parsedPeople);

//// fetch()
//// .json() converts to JSON format
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error)); */



// ========================>>> Fetch

/* //// fetch = Function used for making HTTP requests to fetch resources
////         (JSON style data, images, files)
////         Simplifies asynchronous data fetching in JavaScript and
////         used for interacting with APIs to retrieve and send data
////         asynchronously over the web. fetch(url, {object of options})
//// {object of options} -> example: {method: "GET"} to get some data, this is default
////                                 {method: "POST"} to send some data
////                                 {method: "PUT"} to replace some data
////                                 {method: "DELETE"} to delete some data

//// HTTP status codes :
//// Informational responses 100 - 199
//// Successful responses    200 - 299
//// Redirection responses   300 - 399
//// Client error responses  400 - 499
//// Server error responses  500 - 599

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => response.json())
// .then(data => console.log(data.id))
// .catch(error => console.error(error));

// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch resource");
//     }
//     return response.json();
// })
// .then(data => console.log(data.id))
// .catch(error => console.error(error));


//// using async/await

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not get your pokemon!");
        }

        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("pokemon-sprite");
        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";
        imageElement.style.width = "300px";
        imageElement.style.height = "300px";        
    } catch (error) {
        console.error(error);
    }
}


//// Reason for this is your <script> tag has type="module",
//// which means all functions inside it are scoped locally 
//// by default — they’re not attached to the global window object, 
//// so onclick="fetchData()" in your HTML doesn't know where to find it.
//// hence we have to Expose fetchData to HTML
window.fetchData = fetchData; */