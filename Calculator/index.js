const display = document.getElementById("display");
const resultButton = document.getElementById("resultBtn");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}



function calculator(displayElement){

    function validator(value){
        const regex = /^[+\-*/.0-9]+$/;
    
        return(regex.test(value));
    }

    function calculate(value){

        if (!validator(value)) {
            console.error("Invalid input");
            
            return;
        }

        try {
            //// Executing JavaScript from a string is an enormous security risk.
            //// It is far too easy for a bad actor to run arbitrary code when 
            //// we use eval()
            //// Can access your entire scope (variables/functions around it)
            //// Is slower due to scope parsing
            // displayElement.value = eval(value);
            //// a safer alternative using strict mode
            displayElement.value = Function('"use strict"; return (' + value + ')')();
            //// This function above forces to declare values
            //// forces bad syntax to throw error (won't happen as we 
            //// already validated). We are using it to turn the value
            //// to an expression and return it as numeric expression result
        } catch (error) {
            displayElement.value = "Error";
        }
    }

    return {calculate:calculate};
}

const calc = new calculator(display);

resultButton.onclick = function() {calc.calculate(display.value)};


