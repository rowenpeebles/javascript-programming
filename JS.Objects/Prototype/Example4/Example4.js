// Changing prototype

function Person() {
    this.name = 'John'
}

Person.prototype.age = 23;

const person1 = new Person();
console.log(person1.age);

// Changing property value of prototype
Person.prototype.age = {age: 50}

const person2 = new Person();

console.log(person1.age);
console.log(person2.age);
