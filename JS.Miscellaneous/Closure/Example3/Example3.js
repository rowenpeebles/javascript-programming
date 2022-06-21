// Data Privacy

let a = 0;

function sum() {
    function increaseSum() {
        // The value of a is inreased by 1
        return a = a + 1;
    }
    return increaseSum;
}

const x = sum();

console.log(x());
console.log(x());
console.log(x());
a = a + 1;
console.log(a);
