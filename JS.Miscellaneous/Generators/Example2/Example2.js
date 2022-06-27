// Working of multiple yield statements

function* generatorFunc() {
    console.log("1. Code before first yield");
    yield 100;
    console.log("2. Code before second yield");
    yield 200;
    console.log("3. Code after the second yield");
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
