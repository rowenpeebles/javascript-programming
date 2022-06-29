// Regular Expressions

const string = 'Find me';
const pattern = /me/;

// Search if the pattern is in string variable
const result1 = string.search(pattern);
console.log(result1);

// Replace the character with another character
const string1 = 'Find me';
string1.replace(pattern, 'found you');

// Splitting strings into array elements
const regex1 = /[\s,]+/;
const result2 = 'Hello World! '.split(regex1);
console.log(result2);

// Searching the phone number pattern
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const result3 = regex2.exec("My phone number is: 555 123-4567.");
console.log(result3);
