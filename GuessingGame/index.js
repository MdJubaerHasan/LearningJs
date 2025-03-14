// Numbere guessing game

const minimum = 1;
const maximum = 100;

const answer = Math.trunc(Math.random() * (maximum-minimum+1)) + minimum;

let attempts = 0;
let guess;

let running = true;

while (running) {
    guess = Number(window.prompt(`Guess a number between ${minimum} and ${maximum}`));
    console.log(guess);

    // isNan is a function to check if the numberis NaN
    if (isNaN(guess)) {
       window.alert("Please enter a valid number");
    }else if(guess < minimum || guess > maximum){
        window.alert("Please enter a valid number");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low! Try again");
        }else if(guess > answer){
            window.alert("Too High! Try again");
        }else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts}`);
            running = false;
        }
    }
}