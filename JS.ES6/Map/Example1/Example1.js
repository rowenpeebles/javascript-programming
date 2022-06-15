// Use JS Map

// create a map
const map1 = new Map();
console.log(map1);

// insert item to map
map1.set('person', {name: 'jack', age: 23});
console.log(map1);

// access map elements
console.log(map1.get('person'));

// check map elements
console.log(map1.has('person'));

// display map size
console.log(map1.size);

// remove elemenets
map1.delete('person');
console.log(map1);
