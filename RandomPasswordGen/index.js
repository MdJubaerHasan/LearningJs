function generatePassword(length, includelowercase, includeuppercase, includenumbers, includesymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "1234567890"
    const symbolChars = "!@#$%^&*()_+-="
    

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase? lowercaseChars : "";
    allowedChars += includeUpperCase? uppercaseChars : "";
    allowedChars += includeNumbers? numberChars : "";
    allowedChars += includeSymbols? symbolChars : "";
    // console.log(allowedChars);

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`
    }
    for(let i = 0; i < length; i ++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}


const passwordLength = 10;
const includeLowerCase = false;
const includeUpperCase = false;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength,
                        includeLowerCase,
                        includeUpperCase, 
                        includeNumbers, 
                        includeSymbols);


console.log(`Generated Password: ${password}`);
