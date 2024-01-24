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

let person = {
    fistName: "Nick",
    lastName: "Jiqia",
    children: ["Qeti", "Tako", "Demetre"]
}

let students = [
    {
        fistName: "Nick",
        lastName: "Bla",
        jobs: [
            {
                name: "productOwner",
                company: "abc"
            },
            {
                name: "productManager",
                company: "asd"
            }

        ]
    },
    {
        fistName: "Gio",
        lastName: "Blu",
        jobs: [
            {
                name: "product",
                company: "yui"
            },
            {
                name: "prod",
                company: "jkl"
            }

        ]
    }
]

let result = students[0].jobs[0].name;
console.log(result);
