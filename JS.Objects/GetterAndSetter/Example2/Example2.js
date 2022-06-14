// JS Setter

const student = {
    firstName: 'Monica',
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName);
student.changeName = 'Sarah';
console.log(student.firstName);
