// JS Generator function with return

function* generatorFunc() {
    yield 100;
    return 123;
    console.log("2. Some code before second yield");
    yield 200;
}

// Returns generator object
const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
