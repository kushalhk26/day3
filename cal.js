// Manual Arithmetic Functions
function add(a, b) {
    while (b !== 0) {
        let carry = a & b; // Carry holds common set bits
        a = a ^ b; // XOR for addition without carry
        b = carry << 1; // Shift carry bits left
    }
    return a;
}

function subtract(a, b) {
    while (b !== 0) {
        let borrow = (~a) & b;
        a = a ^ b;
        b = borrow << 1;
    }
    return a;
}

function multiply(a, b) {
    let result = 0;
    let isNegative = false;

    if (a < 0) {
        a = subtract(0, a);
        isNegative = !isNegative;
    }
    if (b < 0) {
        b = subtract(0, b);
        isNegative = !isNegative;
    }

    for (let i = 0; i < b; i++) {
        result = add(result, a);
    }

    return isNegative ? subtract(0, result) : result;
}

function divide(a, b) {
    if (b === 0) {
        console.error("Division by zero is undefined");
        return NaN;
    }

    let isNegative = false;
    if (a < 0) {
        a = subtract(0, a);
        isNegative = !isNegative;
    }
    if (b < 0) {
        b = subtract(0, b);
        isNegative = !isNegative;
    }

    let quotient = 0;
    while (a >= b) {
        a = subtract(a, b);
        quotient = add(quotient, 1);
    }

    return isNegative ? subtract(0, quotient) : quotient;
}

// String to Number Conversion
function stringToNumber(str) {
    let num = 0;
    let isNegative = false;

    if (str[0] === '-') {
        isNegative = true;
        str = str.slice(1);
    }

    for (let char of str) {
        const digit = char.charCodeAt(0) - 48; // Convert character to number
        num = add(multiply(num, 10), digit);
    }

    return isNegative ? subtract(0, num) : num;
}

// Number to String Conversion
function numberToString(num) {
    if (num === 0) return "0";

    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num = subtract(0, num);
    }

    let str = "";
    while (num > 0) {
        const digit = subtract(num, multiply(divide(num, 10), 10));
        str = String.fromCharCode(add(digit, 48)) + str;
        num = divide(num, 10);
    }

    return isNegative ? "-" + str : str;
}

// Simple Calculator Logic
function calculator() {
    const prompt = require('prompt-sync')();

    console.log("Welcome to the Simple Calculator!");
    const num1 = stringToNumber(prompt("Enter the first number: "));
    const operator = prompt("Enter an operator (+, -, *, /): ");
    const num2 = stringToNumber(prompt("Enter the second number: "));

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.error("Invalid operator!");
            return;
    }

    console.log("Result:", numberToString(result));
}

// Run the Calculator
calculator();
