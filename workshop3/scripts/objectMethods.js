let children = ["giorgi", "lia", "anna"];

console.log(children[0]);

children.push("demetre");

let chSliced = children.slice(1, 3)
console.log(chSliced);

let chSpliced = children.splice(2, 1);
console.log(chSpliced);
console.log(children);

let fruits = ["apple", "banana", "grapes", "cherry"];

fruits.splice(2, 2, "lemon", "plum");
console.log(fruits);


// object