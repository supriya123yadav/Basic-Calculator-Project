// script.js
let display = document.getElementById('display');
let displayValue = '';

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = '';
    }
    displayValue += value;
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.innerText = '0';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        display.innerText = '0';
    } else {
        display.innerText = displayValue;
    }
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        display.innerText = displayValue;
    } catch (error) {
        display.innerText = 'Error';
        displayValue = '';
    }
}
