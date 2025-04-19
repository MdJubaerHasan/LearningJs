// ========================>>> Basics

// console.log(`Hello`);
// using backticks (known as template literal) is btter than single or double quotes  as they allow injecting variables
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


// ========================>>> Switch Case

// this should be used for replacing many if - else statements 

// let day = 1;

// we will evaluate Day variable

// The bnreak keyword is necessary becasue, unlike if else, once a case is 
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

let letterGeade;

// in this following case we are evaluation true ness of the conditional cases

switch(true){
    case testScore >= 90:
        letterGeade = "A";
        break;
    case testScore >= 80:
        letterGeade = "B";
        break;
    case testScore >= 70:
        letterGeade = "C";
        break;
    case testScore >= 60:
        letterGeade = "D";
        break;
    default:
        letterGeade = "F";
        
}

console.log(letterGeade); */


// ========================>>> String

// allows us to work with texts, manipulate.

/* let userName = "1 Bro Code 2 \n \n";

console.log(userName);
// let userName = "oooooooooo"

// useing .charAt() will return a character at a given index

console.log(userName.charAt(3));

// uisng .indexOf() will return the idex of the first occurance of a character

console.log(userName.indexOf("o"));

// uisng .lastIndexOf() returns the idex of the last ocuurance of a character

console.log(userName.lastIndexOf("o"));

// using .lenth returns the total number of character

console.log(userName.length);

// uisng .trim() removes whitespaces , both before and after

console.log(userName.trim());

// to set the characters of the string to uppser case, use .toUpperCase()
// this ignores not alphabetic or already uppercase letters 

console.log(userName.toUpperCase());

// to set the characters of the string to lower case, use .toLowerCase()

console.log(userName.toLowerCase());

// to repeat a string, use .repeat()

console.log(userName.repeat(5))

// to check if a string starts with a certain character, use .starstWith(), returns bool

console.log(userName.startsWith(" "));

// a sample use case where username is written with empty space

if (userName.startsWith(" ")) {
    console.log("You name can't start with empty space");
} else {
    console.log(userName);
}

// to check if a string ends with a certain character, use .endstWith()

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

// replace certain character with something ,use .replceAll()

let phoneNumber = "123-456-7890";

console.log(phoneNumber.replaceAll("-", "/"));


// .padStart(Value, padWith) this pads strings to certain length by adding the padwith character
// .padEnd and pad start are as their name

console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15,"0")); */



// ========================>>> String Slicing 

// it is a method for creating a substring from a portion of another string

// string.slice(start, end); the ending index is exclusive

// const fullName = "Bro Code";

/* let firstName = fullName.slice(0,4);
let lastName = fullName.slice(4, fullName.length); // same as lastName = fullName.slice(4), will get all the way to the end


console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
console.log(firstChar);
let lastChar = fullName.slice(-1); // - 2 would get the second index from the last and also -1
console.log(lastChar); */

/* // lets make a dynamic way to extract first and last name from a string based on space


let firstname = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" "), fullName.length).trim();
console.log(firstname);
console.log(lastName); */

/* 
const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extention = email.slice(email.indexOf("@")+1);

console.log(username);
console.log(extention); */


// ========================>>> Method Chaining

/* // calling one methode after another using . dot 

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
    console.log("Weahter is good");
}else{
    console.log("Weahter is bad");
}


if (temp <= 0 || temp >= 30) {
    console.log("Weahter is actually bad");
}else{
    console.log("Weahter is actually good");
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

//// reapeat some code WHILE some condition is true

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

//// a section of resuable code, declare once , use on demand, call to execute
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

function substract(x, y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}
function devide(x,y){
    return x/y;
}

function isEven(x){
    return x%2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}
console.log(add(2,3));
console.log(substract(2,3));
console.log(multiply(2,3));
console.log(devide(2,3));
console.log(isEven(14));

console.log(isValidEmail("meow@booboob.com")); */


// ========================>>> Variable Scope

/* //// variable scope = where a variable is recognized and accessible
//// local vs global

let x = 1;
//let x = 2; 
//// declaring x will produce and error, because they are in the same scrope;

//// anytime a varibale is declared within a set of {}, it is in a local scope;
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

//// gloabl scope is, a variable declared outside {} and outside function

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

//// .unshift() method adds an element at the begining of the array

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
// /* //// to be expanded into seperate elements (unpack the element)

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

/* // rest parameters = (...rest) alllow a function work with a variable number
//  of arguements bundling them into an array 

// spread op = expands an array into seperate elements
// rest op = bundles seperate elements into an array 

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotfog";
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
// //// we cant do these becasue the funtions don't have return value


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


//// The key differnece between .map and .forEach is , map returns a 
//// new array, keeps the original unchanged, while forEach chnages the
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

console.log(`Yout total is ${total} pounds`);


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

//// arrow function = a concise way to write function expressions
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
console.log(numbers.reduce((accumulator, element) => accumulator + element));