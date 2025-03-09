const subscribed = document.getElementById("myCheckbox");
const visa = document.getElementById("visaBtn");
const masterCard = document.getElementById("masterCardBtn");
const payPal = document.getElementById("payPalBtn");
const submit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentMethod = document.getElementById("paymentResult");


submit.onclick = function(){
    if(subscribed.checked){
        subResult.textContent = `You are subscribed!`;
    }else{
        subResult.textContent = `You are not subscribed!`;
    }


    if(visa.checked){
        paymentMethod.textContent = `You are paying with Visa!`;
    }else if(masterCard.checked){
        paymentMethod.textContent = `You are paying with MasterCard!`;
    }else if(payPal.checked){
        paymentMethod.textContent = `You are paying with PayPal!`;
    }else{
        paymentMethod.textContent = `Please select a payment method!`;
    }
}