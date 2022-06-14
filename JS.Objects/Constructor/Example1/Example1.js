// Create multiple objects with constructor function

function Person() {
    this.name = 'John',
    this.age = 23,
    this.greet = function() {
        console.log('Hello');
    }
}

const person1 = new Person();
const person2 = new Person();

console.log(person1.name);
console.log(person2.name);
