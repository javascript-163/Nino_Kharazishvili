// 1
let arr = [1, 2, 3];
if (Array.isArray(arr)) {
    console.log("this is an array");
} else {
    console.log("this is not an array")
}


// 2

console.log(arr[0]);

// 3

console.log(arr[arr.length - 1]);

// 4
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"];

console.log(`1${o[1]} choice is ${color[0]}.`);
console.log(`2${o[2]} choice is ${color[1]}.`);
console.log(`3${o[3]} choice is ${color[2]}.`);
console.log(`4${o[0]} choice is ${color[3]}.`);
console.log(`5${o[0]} choice is ${color[4]}.`);
console.log(`6${o[0]} choice is ${color[5]}.`);
console.log(`7${o[0]} choice is ${color[6]}.`);

// 5
let student = {
    name: "mate",
    sureName: "gotua"
};

student.age = 18;
student["hasGraduated"] = false;
delete student.sureName;
student.hasGraduated = true;

console.log(student);