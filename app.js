let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

let ac = document.querySelector("#ac");
let de = document.querySelector("#de");
let dot = document.querySelector("#dot");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let astrick = document.querySelector("#astrick");
let div = document.querySelector("#by"); 

let zeroZero = document.querySelector("#zeroZero")
let zero = document.querySelector("#zero")
let equalTo = document.querySelector("#equalTo");

let input = document.querySelector("#input")

let str = "";
str += "7*8";
console.log(eval(str));

function addInput(char) {
    console.log("Button Clicked");
    str += char;
    input.value += char;
}
// from char gpt
function handleButtonClick(event) {
    const char = event.target.textContent;
    addInput(char);
}

function calculate() {
    let res = eval(input.value);
    input.value = res;
}

function reset() {
    input.value = "";
}

function deleteLast() {
    str = str.slice(0, -1);
    input.value = str;
}

one.addEventListener("click", handleButtonClick);
two.addEventListener("click", handleButtonClick);
three.addEventListener("click", handleButtonClick);
four.addEventListener("click", handleButtonClick);
five.addEventListener("click", handleButtonClick);
six.addEventListener("click", handleButtonClick);
seven.addEventListener("click", handleButtonClick);
eight.addEventListener("click", handleButtonClick);
nine.addEventListener("click", handleButtonClick);
zero.addEventListener("click", handleButtonClick);
zeroZero.addEventListener("click", handleButtonClick);

plus.addEventListener("click", handleButtonClick);
minus.addEventListener("click", handleButtonClick);
astrick.addEventListener("click", handleButtonClick);
div.addEventListener("click", handleButtonClick);
dot.addEventListener("click", handleButtonClick);

equalTo.addEventListener("click",calculate);

ac.addEventListener("click", reset);
de.addEventListener("click", deleteLast);

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === 'Backspace') {
        // Handle backspace key
        input.value = input.value.slice(0, -1);
    } else if (key === '+') {
        // Handle plus symbol
        input.value += '+';
    } else if (key === '-') {
        // Handle minus symbol
        input.value += '-';
    } else if (key === '/') {
        // Handle division symbol
        input.value += '/';
    } else if (key === '*') {
        // Handle asterisk symbol
        input.value += '*';
    } else if (key === 'Enter') {
        calculate();
    } else if (!isNaN(key) && key !== ' ') {
        // Check if the pressed key is a numeric digit (0-9)
        input.value += key;
    }
});