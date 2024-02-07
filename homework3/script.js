// 1
let num = 24;
let sqr = num ** 2;
console.log(sqr);

// 2
let c = prompt("enter celsius:");
let f = c * 9 / 5 + 32;
console.log(f);

// 3
let number = Number(prompt("enter number:"));
let start = Number(prompt("enter starting number for a range:"));
let end = Number(prompt("enter ending number for a range:"));

const isInRange = (num, st, end) => {
    if (num >= st && num <= end) {
        return true;
    } else {
        return false;
    }
}

console.log(isInRange(number, start, end));

// 4
let year = prompt("Please enter year:");

const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
        document.write(`${year} is a leap year.`);
    } else if (year % 400 === 0) {
        document.write(`${year} is a leap year.`);
    } else {
        document.write(`${year} is NOT a leap year.`);
    }
}

isLeapYear(year);

// 5
let number1 = Number(prompt("please enter a number:"));
let number2 = Number(prompt("please enter another number:"));
let mathOp = prompt("please enter math operation (symbol):");

switch (mathOp) {
    case '+':
        console.log(number1 + number2);
        break;
    case '-':
        console.log(number1 - number2);
        break;
    case '*':
        console.log(number1 * number2);
        break;
    case '/':
        console.log(number1 / number2);
        break;
    case '%':
        console.log(number1 % number2);
        break;
    case '**':
        console.log(number1 ** number2);
        break;
    default:
        console.log('please enter a valid math operation.');
}