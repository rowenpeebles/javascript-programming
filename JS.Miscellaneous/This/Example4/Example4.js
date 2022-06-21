// this Inside Object Method

const person = {
    name: 'Jack',
    age: 25,
    greet() {
        console.log(this);
        console.log(this.name);
    }
}

person.greet();
