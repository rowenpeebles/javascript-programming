// Object prototype

function Person() {
    this.name = 'John',
    this.age = 23
}

let person1 = new Person();
let person2 = new Person();

Person.prototype.gender = 'Male';

console.log(person1.gender);
console.log(person2.gender);
