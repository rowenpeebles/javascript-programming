// Add methods to a constructor function using prototype

function Person() {
    this.name = 'John', 
    this.age = 23
}

const person1 = new Person();
const person2 = new Person();

Person.prototype.greet = function() {
    console.log('Hello' + ' ' + this.name);
}

person1.greet();
person2.greet();
