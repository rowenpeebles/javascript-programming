// Iterate through an object

const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

for (let key in student) {
    console.log('${key} => ${student[key]}');
}
