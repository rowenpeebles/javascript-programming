// Constructor function parameters

function Person (person_name, person_age, person_gender) {
    this.name = person_name;
    this.age = person_age;
    this.gender = person_gender;
    this.greet = function() {
        return('Hi' + ' ' + this.name);
    }
}

const person1 = new Person('John', 23, 'Male');
const person2 = new Person('Sam', 21, 'Female');

console.log(person1.name);
console.log(person2.name);
