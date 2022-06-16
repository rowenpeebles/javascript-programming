// Class Inheritance

// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello ${this.name}');
    }
}

// Inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();
