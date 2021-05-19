var PassLength = document.getElementById('PasswordLength');
var IncludeUpperCase = document.getElementById('IncludeUpperCaseLetters');
var IncludeLowerCase = document.getElementById('IncludeLowerCaseLetters');
var IncludeNumber = document.getElementById('IncludeNumbers');
var IncludeSymbol = document.getElementById('IncludeSymbols');
var form = document.getElementById('PasswordGeneratorForm');
var passRandom = document.getElementById('passwordRondom');

var upperCaseCode = arrayFromLowToHigh(65, 90);
var lowerCaseCode = arrayFromLowToHigh(97, 122);
var NumberCode = arrayFromLowToHigh(48, 57);
var symbolCode = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)).concat(
    arrayFromLowToHigh(91, 96)).concat(
    arrayFromLowToHigh(123, 126));

form.addEventListener('submit', e => {
    e.preventDefault();
    var passwordLength = PassLength.value;
    var UpperCase = IncludeUpperCase.checked;
    var LowerCase = IncludeLowerCase.checked;
    var number = IncludeNumber.checked;
    var symbol = IncludeSymbol.checked;
    var password = generatePassword(passwordLength, IncludeUpperCase,
        IncludeLowerCase, IncludeNumber, IncludeSymbol);
    passRandom.innerHtml = password;
})

function generatePassword(passwordLength, IncludeUpperCase,
    IncludeLowerCase, IncludeNumber, IncludeSymbol) {
    let charcode = upperCaseCode;
    if (LowerCase) {
        charcode = charcode.concat(lowerCaseCode)
    }
    if (number) {
        charcode = charcode.concat(NumberCode)
    }
    if (symbol) {
        charcode = charcode.concat(symbolCode)
    }
    var passChar = [];
    for (let i = 0; i < passwordLength; i++) {
        var charcode = charcode[Math.float(Math.random() * charcode.length)];
        passChar.push(String.fromCharCode(charcode));
    }
    return passChar.join('');
}

function arrayFromLowToHigh(low, high) {
    var array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

// function characterLength(e) {
//     var value = e.target.value;
//     PassLength.value = value;
// }