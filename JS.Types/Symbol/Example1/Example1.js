// Add symbol as an object key

let id = Symbol("id");

let person = {
    name: "Jack",
    // Adding symbol as a key
    [id]: 123
};

console.log(person);
