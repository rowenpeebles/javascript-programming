// Generator throw method

function* generatorFunc() {
    yield 100;
    yield 200;
}

// Returns generator object
const generator = generatorFunc();
console.log(generator.next());

// Throws an error
// Terminates the generator
console.log(generator.throw(new Error('Error occurred.')));
console.log(generator.next());
