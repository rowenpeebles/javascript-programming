// Object.defineProperty()

const student = {
    firstName: 'Monica'
}

Object.defineProperty(student, 'getName', {
    get: function() {
        return this.firstName;
    }
});

Object.defineProperty(student, 'changeName', {
    set: function(value) {
        this.firstName = value;
    }
});

console.log(student.firstName);

student.changeName = 'Sarah';

console.log(student.firstName);
