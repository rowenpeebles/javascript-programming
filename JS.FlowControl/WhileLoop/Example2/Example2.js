// Sum of Positive Numbers Only

let sum = 0;

let number = parseInt(prompt("Enter a number: "));

while (number >= 0) {
    sum += number;
    number = parseInt(prompt("Enter a number: "));
}

console.log("The sum is ${sum}.");
