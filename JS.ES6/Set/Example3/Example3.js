// Adding new elements to set

const set = new Set([1, 2]);
console.log(set.values());

// adding elements
set.add(3);
console.log(set.values());

// trying to add duplicate set value
set.add(1);
console.log(set.values());
