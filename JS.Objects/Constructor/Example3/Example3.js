// Adding properties and methods in an object

function Person() {
    this.name = 'John',
    this.age = 23
}

let person1 = new Person();
let person2 = new Person();

person1.gender = 'Male';
person1.greet = function() {
    console.log('Hello');
}

person1.greet();
