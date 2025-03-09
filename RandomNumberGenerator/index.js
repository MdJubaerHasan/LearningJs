const diceRoller = document.getElementById("myRoller");
const diceOne = document.getElementById("dice1");
const diceTwo = document.getElementById("dice2");
const diceThree = document.getElementById("dice3");

let diceOneVal;
let diceTwoVal;
let diceThreeVal;
let min = 1;
let max = 6;


diceRoller.onclick = function(){
    diceOneVal = Math.trunc(Math.random() * (max-min+1)+ min);
    diceTwoVal = Math.trunc(Math.random() * (max-min+1)+ min);
    diceThreeVal = Math.trunc(Math.random() * (max-min+1)+ min);
    diceOne.textContent = diceOneVal;
    diceTwo.textContent = diceTwoVal;
    diceThree.textContent = diceThreeVal;
}