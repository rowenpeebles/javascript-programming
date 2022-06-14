// JS String methods

const text1 = 'hello';
const text2 = 'world';
const text3 = '   JavaScript   ';

// Concantenating 2 string
const result1 = text1.concat(' ', text2);
console.log(result1);

// Converting text to uppercase
const result2 = text1.toUpperCase();
console.log(result2);

// Removing whitespace from string
const result3 = text3.trim();
console.log(result3);

// Converting the string to an array
const result4 = text1.split(1, 3);
console.log(result4);

// Slicing a string
const result5 = text1.slice(1, 3);
console.log(result5);
