// Symbol properties example

const x = Symbol('key');

// Description property
console.log(x.description);

const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];

// isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray);
console.log(result);
