// For..of with maps

// Define map
let map = new Map();

// Inserting elements
map.set('name', 'jack');
map.set('age', '27');

for (let [key, value] of map) {
    console.log(key + ': ' + value);
}
