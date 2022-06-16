// Nested destructuring assignment

const person = {
    name: 'Jack', 
    age: 23, 
    hobbies: {
        read: true, 
        playGames: true
    }
}

// Nested destructuring
const {name, hobbies: {read, playGames}} = person;

console.log(name);
console.log(read);
console.log(playGames);
