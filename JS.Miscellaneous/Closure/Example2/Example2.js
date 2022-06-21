// JS Closure

function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // Returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6));
console.log(multiply4(2));
