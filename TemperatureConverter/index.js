const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;


function convert(){
    temp = Number(textbox.value);
    if (toFahrenheit.checked) {
        temp = ((temp*9)/5)+32;
        result.textContent = `${temp.toFixed(1)}°F`;
        
    }else if (toCelcius.checked) {
        temp = ((temp-32)*5)/9;
        result.textContent = `${temp.toFixed(1)}°C`;
    }else{
        result.textContent = "Please select an unit";
    }
}