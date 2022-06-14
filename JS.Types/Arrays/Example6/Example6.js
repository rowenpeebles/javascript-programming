// Array methods

let clothes = ['jumper', 'jeans', 'socks', 'pants', 'jacket'];
let newClothes = ['tshirt', 'shorts', 'sandals', 'hat'];

// Sorting elements in alphabetical order
clothes.sort();
console.log(clothes);

// Finding the index of string
const position = clothes.indexOf('jeans');
console.log(position);

// Slicing the array elements
const slicedClothes = clothes.slice(1);
console.log(slicedClothes);

// Concantenating two arrays
const allClothes = clothes.concat(newClothes);
console.log(allClothes);
