let person = {
    name:"John",
    age:30,
    city:"New York",
    greet: function() {
        return "Hello,my name is " + this.name + " and I am " + this.age + " years old";
    }
};
person.city = "Los Angeles";
console.log(person);
console.log(person.greet());
console.log(person.name);
console.log(person.age);

//4
let object = {
    obj1: { a: 10, b: 20 },
    obj2: { a: 10, b: 20 }
};
console.log(object.obj1 === object.obj2);
console.log(object.obj1 == object.obj2);

//5
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    details: {
        year: 1925,
        pages: 180
    }
};

let bookCopy = Object.assign({}, book);
bookCopy.details.year = 2020;

console.log(book);
console.log(bookCopy);


//6
let calculator = {
    a: 9,
    b: 3,
}
let calculator1 = (calculator) => {
    let sum = (a, b) => a+b;
    let multiply = (a, b)=> a*b;
    return { sum, multiply };
}
let calculator2 = (calculator1(calculator).sum(calculator.a, calculator.b));
let calculator3 = (calculator1)(calculator).multiply(calculator.a, calculator.b)
console.log(calculator2)
console.log(calculator3)

//7
const car = {
    brand:"Toyota",
    model:"Camry"
}
car.model = "Corolla"
console.log(car)