// Overriding method or property

// Parent class 
class Person {
    constructor(name) {
        this.name = name;
        this.occupation = 'Unemployed';
    }
    greet() {
        console.log('Hello ${this.name}');
    }
}

// Inheriting parent class 
class Student extends Person {
    constructor(name) {
        super(name);
        this.occupation = 'Student';
    }
    greet() {
        console.log('Hello student ${this.name}');
        console.log('Occupation: ' + this.occupation);
    }
}

let p = new Student('jack');
p.greet();
