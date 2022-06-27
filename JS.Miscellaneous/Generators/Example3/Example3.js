// Passing arguments to generator functions

function* generatorFunc() {
    // Returns 'hello' at first next()
    let x = yield 'hello';
    // Returns passed arguments on the second next()
    console.log(x);
    console.log('some code');
    // Returns 5 on second next()
    yield 5;
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next(6));
console.log(generator.next());
