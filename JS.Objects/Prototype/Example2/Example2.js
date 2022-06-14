// Prototype Inheritance

function Person() {
    this.name = 'John', 
    this.age = 23
}

const person1 = new Person();
const person2 = new Person();

// Add property to constructor function
Person.prototype.gender = 'Male';

// Prototype value of Person
console.log(Person.prototype);

// Inheritance of property from prototype
console.log(person1.gender);
console.log(person2.gender);
