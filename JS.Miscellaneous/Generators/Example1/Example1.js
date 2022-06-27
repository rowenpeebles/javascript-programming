// Using yield to pause execution

// Generator function
function* generatorFunc() {
    console.log("1. Code before the first yield");
    yield 100;
    console.log("2. Code before the second yield");
    yield 200;
}

// Returns generator object
const generator = generatorFunc();
console.log(generator.next());
