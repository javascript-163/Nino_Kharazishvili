class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        return "Area calculation not implemented for generic shape.";
    }

}


class Circle extends Shape {
    constructor(name, radius) {
        super(name)
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name)
        this.width = width;
        this.height = height;
    }

    area() {
        return this.height * this.width;
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name)
        this.base = base;
        this.height = height;
    }

    area() {
        return this.height * this.base / 2;
    }
}

function getArea(shape) {
    return `Area of ${shape.name}: ${shape.area()}`;
}


let randomShape = new Shape("randomShape");
let rectangle = new Rectangle("rectangle", 5, 6);
let circle = new Circle("circle", 5);
let triangle = new Triangle("triangle", 10, 5);

console.log(randomShape.area());
console.log(getArea(rectangle));
console.log(getArea(circle));
console.log(getArea(triangle));