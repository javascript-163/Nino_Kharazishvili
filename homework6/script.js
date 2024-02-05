// 1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

//პირობაში დაკონკრეტებული არ არის და ჩავთავლე რომ მოცემულ სტრიქონში სასვენი ნიშანი არ გვხვდება

let randomLine = "Higher order functions are functions that take one or more functions as arguments or return a function as their result";
let array = randomLine.split(" ");

const longestWord = array.reduce((accumulator, current) => {
    return current.length > accumulator.length ? current : accumulator;
}, "")

console.log(`the longest word is: ${longestWord}`);


// 2. შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2,
// ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add,
// substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი,
// სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.

let calculator = {
    num1: 10,
    num2: 5,
    add: function () {
        return this.num1 + this.num2;
    },
    substract: function () {
        return this.num1 - this.num2;
    },
    multiply: function () {
        return this.num1 * this.num2;
    },
    divide: function () {
        return this.num1 / this.num2;
    }
}

console.log(calculator.add());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.divide());


// 3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად.
// შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

// ქვემოთ განხილულ მაგალითში ფუნცქია sum-ის შესრულება (execution) ხდება მის გამოცხადებამდე (declaration).
// ამის მიზეზია ჰოისტინგი, რომელიც კოდის კომპილაციის პროცესისას, ცვლადებისა და ფუნქციების 
// მიმდინარე scope-ის თავში ატანას, აწევას (hoisting) გულისხმობს, რის შედეგადაც ქვემოთ მოცემული ფუნქცია, კერძოდ declared function,
// კონკრეტული სქოუფის ფარგლებში ყველგან ხელმისაწვდომი ხდება და შესაბამისად შეიძლება მისი გამოყენება მის ინიციალიზაციამდე.


sum(10, 12);

function sum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}


// იგივეს ვერ ვიტყვით ფუნცქიის ექსფრეშენებზე (მაგ: arrow function), იმ შემთხვევაში თუ ფუნქციის ექსფრეშენის გამოძახებას ვეცდებით მის ინიციალიზაციამდე მივიღებთ ერორს: "Cannot access 'sum' before initialization".

sumNumbers(5, 15);

const sumNumbers = (num1, num2) => {
    let sum = num1 + num2;
    console.log(sum);
}

// მიმდინარე სქოუფის ასახსნელად მეორე მაგალითსაც განვიხილავ:
// ამ შემთხვევაში დეკლარირებული ფუნქცია substract-ის "აწევა", ჰოისთინგი ხდება მისი მიმდინარე 
// სქოუფის ანუ ფუნქცია sum-ის ფარგლებში და არა მის გარეთ,
// შესაბამისად sum-ის გარეთ მისი გამოძახება დაგვიბრუნებს ერორს, რომ substract განსაზღვრული არ არის.

sum(12, 10);
substract(25, 14);

function sum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);

    function substract(num1, num2) {
        let substraction = num1 - num2;
        console.log(substraction);
    }
}

// ზემოთ განხილული კოდის სწორი ვერსია:

sum(12, 10);

function sum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);

    substract(25, 14);

    function substract(num1, num2) {
        let substraction = num1 - num2;
        console.log(substraction);
    }

}





