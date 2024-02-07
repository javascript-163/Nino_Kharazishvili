// 1.	შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printEveryThird = (arr) => {
    for (let i = 2; i <= arr.length; i += 3) {
        console.log(arr[i]);
    }
}

printEveryThird(array);

const printEveryThird2 = (arr) => {
    let tmp = 2;
    while (tmp < arr.length) {
        console.log(arr[tmp]);
        tmp += 3;
    }
}

printEveryThird2(array);



// 2.	შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, 
//შეასრულეთ ეს დავალება ციკლების მეშვეობით.


const printTenToOne = () => {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

printTenToOne();


const printTenToOne2 = () => {
    let number = 10;
    while (number >= 1) {
        console.log(number);
        number--;
    }
}

printTenToOne2();

// 3.	მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. 
//შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, 
//ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.


let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

const removeName = (arr, item) => {
    let modifiedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
            modifiedArr.push(arr[i])
        }
    }
    return modifiedArr;
}

console.log(removeName(names, "Bob"));

const removeName2 = (arr, item) => {
    let modifiedArr = [];
    let tmp = 0
    while (tmp < arr.length) {
        if (arr[tmp] !== item) {
            modifiedArr.push(arr[tmp]);
        }
        tmp++;
    }
    return modifiedArr;
}

console.log(removeName2(names, "Bob"));

// with filter
const removeName3 = (arr, item) => {
    const modifiedArr = arr.filter((arrItem) => arrItem !== item);
    return modifiedArr;
}

console.log(removeName3(names, "Bob"));


// with splice
const removeName4 = (arr, item) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

console.log(removeName4(names, "Bob"));



// 4.	ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ.
//შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა
//ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

let number = 5;
let power = 2;

const calcPower = (number, power) => {
    let result = 1;
    if (power > 0) {
        for (let i = 0; i < power; i++) {
            result *= number;
        }
    } else {
        for (let i = power; i < 0; i++) {
            result /= number;
        }
    }
    return result;
}

console.log(calcPower(number, power));


const calcPower2 = (number, power) => {
    let result = 1;
    let tmp = 1;
    if (power > 0) {
        while (tmp <= power) {
            result *= number;
            tmp++;
        }
    } else {
        while (power < tmp - 1) {
            result /= number;
            tmp--;
        }
    }

    return result;
}

console.log(calcPower2(number, power));

// 5.	შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ,
//და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით
//გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც
//უნაშთოდ გამოიტანეთ FizzBuzz.

let num1 = 3;
let num2 = 5
let max = 100;

const fizzBuzz = (num1, num2, max) => {
    for (let i = 1; i <= max; i++) {
        if (i % (num1 * num2) === 0) {
            console.log(`${i} FizzBuzz`)
        } else if (i % num1 === 0) {
            console.log(`${i} Fizz`)
        } else if (i % num2 === 0) {
            console.log(`${i} Buzz`)
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(num1, num2, max)

const fizzBuzz2 = (num1, num2, max) => {
    let tmp = 1;
    while (tmp <= max) {
        if (tmp % (num1 * num2) === 0) {
            console.log(`${tmp} FizzBuzz`)
        } else if (tmp % num1 === 0) {
            console.log(`${tmp} Fizz`)
        } else if (tmp % num2 === 0) {
            console.log(`${tmp} Buzz`)
        } else {
            console.log(tmp)
        }
        tmp++;
    }
}

fizzBuzz2(num1, num2, max);


// 6.	შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number),
//რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით
//მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

const factorialCalculator = (number) => {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorialCalculator(5));

const factorialCalculator2 = (number) => {
    let factorial = 1;
    let tmp = 1;
    while (tmp <= number) {
        factorial *= tmp;
        tmp++;
    }
    return factorial;
}

console.log(factorialCalculator2(10));


// 7.	შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას
// მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

const capitalizeFirstLetter = (str) => {
    let capitalized = str[0].toUpperCase() + str.slice(1);
    return capitalized;
}

console.log(capitalizeFirstLetter("javascript course"));


// 8.	შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. 
// მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა. 

const blankStringChecker = (str) => {
    return str.length === 0 ? 'this string is blank' : 'this string is not blank';
}

console.log(blankStringChecker(""));


// 9.	შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად.
// მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

const stringToArr = (str) => {
    let arr = str.split(", ");
    return arr;
}

console.log(stringToArr('sorry, this string is blank'));

// 10.	შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის
// ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ
// ვერსიას ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

let email = "beqa.beqauri@gmail.com";

const protectEmail = (email) => {
    let start = email.indexOf(".") + 1;
    let end = email.indexOf("@");
    //in order to avoid an error if the mail provided is not in the desired format
    if (end > start) {
        let lastName = email.substring(start, end);
        let dots = ".".repeat(end - start);
        let protectedEmail = email.replace(lastName, dots)
        return protectedEmail;
    } else {
        return "please provide an email in a legal format"
    }
}

console.log(protectEmail(email));