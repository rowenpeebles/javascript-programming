// Iterate Through Iterables

const number = [1, 2, 3];

for (let n of number[Symbol.iterator]()) {
    console.log(n);
}
