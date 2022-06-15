// Iterate through a map

let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

for (let [key, value] of map1) {
    console.log(key + ' - ' + value);
}
