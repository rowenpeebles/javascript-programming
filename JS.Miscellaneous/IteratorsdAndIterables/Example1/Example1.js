// JS Iterables Having Symbol.Iterator()

const arr = [1, 2, 3];

// Calling the symbol.iterator() method
const arrIterator = arr[Symbol.iterator]();

// Gives array iterator
console.log(arrIterator);

const str = 'hello';

// Calling the symbol.iterator() method
const strIterator = str[Symbol.iterator]();

// Gives string iterator
console.log(strIterator);
