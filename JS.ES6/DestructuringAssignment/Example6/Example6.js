// Assign remaining elements to a single variable

const arrValue = ['one', 'two', 'three', 'four'];

// Destructuring assignmet in arrays
// assigning remaining values to y
const [x, ...y] = arrValue;

console.log(x);
console.log(y);
