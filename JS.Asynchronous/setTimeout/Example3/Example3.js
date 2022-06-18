// Use clearTimeout() method

let count = 0;

function increaseCount() {
    count += 1;
    console.log(count);
}

let id = setTimeout(increaseCount, 3000);
clearTimeout(id);
console.log('setTimeout is stopped.');
