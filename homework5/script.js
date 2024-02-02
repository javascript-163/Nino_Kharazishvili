// 1.	ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა

let action = "move";

switch (action) {
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("Invalid action.")
}


// 2.	switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე,
//  რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს
// “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.
// თუ ბოსტნეული(vegetables) არც ბროკოლია(broccoli) და 
// არც სტაფილო (carrot) მაშინ გამოიტანეთ არცერთი (“Neither”)

let vegetable = "carrot";
switch (vegetable) {
    case "carrot":
        alert("Hello");
        break;
    case "Broccoli":
        alert("Welcome");
        break;
    default:
        alert("Neither")
}

// 3.	შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია.
// თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ
// მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18 - ზე უნდა გამოჩნდეს,
// რომ მომხმარებელს შეუძლია ხმის მიცემა.

let age = 15;
const checkAge = (age) => {
    const legalAge = age >= 18 ? "you can vote" : "you can not vote";
    return legalAge;
}

console.log(checkAge(age));


// 4.	შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// 2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
// 3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
// 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.

let password = "pass1234";

const checkPassword = (password) => {
    let len = password.length;
    if (Number(password) && !(password.includes(".") || password.includes("-"))) {
        return "please use other symbols besides numbers";
    } else if (len < 3) {
        return "your password is too short";
    } else if (len < 6) {
        return "your password is weak";
    } else if (len < 8) {
        return "password accepted";
    } else if (len < 16) {
        return "your password is strong";
    }
}

console.log(checkPassword(password));


// 5.
// შენიშვნა: დავალების შესასრულებლად დაგჭირდებათ ჩაშენებული პირობითი ოპერატორების გამოყენება.
// შექმენით Quiz-ის პროგრამა შემდეგი პირობების გათვალისწინებით:
// საჭიროა გქონდეთ მინიმუმ 5 სხვადასხვა შეკითხვა.
// ჩაშენებული პირობითი ოპერატორების მეშვეობით გააკეთეთ ისე, რომ მომხმარებელს შეეძლოს თითოეული
// ამ შეკითხვიდან მომდევნო შეკითხვაზე გადასვლა, მხოლოდ იმ შემთხვევაში თუ წინა შეკითხვას სწორად უპასუხებს.
// მაგ. თუ მომხმარებელი გასცემს სწორად პასუხს პირველ შეკითხვას, მხოლოდ ამ შემთხვევაში უნდა მოხდეს
// მისი მეორე შეკითხვაზე გადაყვანა იგივე დანარჩენ შეკითხვებზეც.


// შეკითხვის დასასმელად გამოიყენეთ prompt()-ბრძანება საიდანაც მიიღებთ მომხმარებლის არჩევანს ხოლო პასუხი
// კი გამოიტანეთ alert() ბრძანების მეშვეობით.

// საბოლოო ჯამში დაითვალეთ თუ რამდენ შეკითხვას გასცა მომხმარებელმა პასუხი სწორად და გამოიტანეთ ეკრანზე.


const quiz = () => {
    let correct = 0;
    let question1 = prompt("What is the largest desert in the world?");
    let answer1 = "antarctica";
    if (question1 && question1.toLowerCase() === answer1) {
        correct++;
        let question2 = prompt("congrats your answer is right! next question: How many colors are there in a rainbow?");
        let answer2 = 7;
        if (question2 == answer2) {
            correct++;
            let question3 = prompt("congrats your answer is right! next question: What is the square root of 25?");
            let answer3 = 5;
            if (question3 == answer3) {
                correct++;
                let question4 = prompt("congrats your answer is right! next question: How many meters are in a kilometer?");
                let answer4 = 1000;
                if (question4 == answer4) {
                    correct++;
                    let question5 = prompt("congrats your answer is right! next question: How many dots are on one six - sided die?");
                    let answer5 = 21;
                    if (question5 == answer5) {
                        correct++;
                        alert(`Wow ! Your answer is right! You have ${correct} correct answers.`)
                    } else {
                        alert(`Your answer is wrong, the correct answer is '${answer5}'. You have ${correct} correct answers.`);
                    }
                } else {
                    alert(`Your answer is wrong, the correct answer is '${answer4}'. You have ${correct} correct answers.`);
                }
            } else {
                alert(`Your answer is wrong, the correct answer is '${answer3}'. You have ${correct} correct answers.`);
            }
        } else {
            alert(`Your answer is wrong, the correct answer is '${answer2}'. You have ${correct} correct answer.`);
        }
    } else {
        alert(`Your answer is wrong, the correct answer is '${answer1}'. You have ${correct} correct answer.`);
    }

}


quiz();