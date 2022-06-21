// this Inside Inner Function

const person = {
    name: 'Jack',
    age: 25,
    greet() {
        console.log(this);
        console.log(this.age);
        function innerFunc() {
            console.log(this);
            console.log(this.age);
        }
        innerFunc();
    }
}

person.greet();
