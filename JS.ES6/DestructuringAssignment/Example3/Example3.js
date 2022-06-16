// Assign default values

let arrValue = [10];

// Assigning default value 5 and 7
let [x = 5, y = 7] = arrValue;

console.log(x);
console.log(y);

const person = {
    name: 'Jack',
}

// Assign default value 26 to age if undefined
const {name, age = 26} = person;

console.log(name);
console.log(age);
