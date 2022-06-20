// Converting JSON to JS object

// JSON object
const jsonData = '{ "name": "John", "age": 22 }';

// Converting to JS object
const obj = JSON.parse(jsonData);

// Accessing the data
console.log(obj.name);
