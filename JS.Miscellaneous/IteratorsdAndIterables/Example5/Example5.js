// User defined iterator

function displayElements(arr) {

    // To update the iteration
    let n = 0;

    return {

        // Implementing the next() function
        next() {

            if(n < arr.length) {
                return {
                    value: arr[n++],
                    done: false
                }
            }

            return {
                value: undefined,
                done: true
            }
        }
    }
}

const arr = ['h', 'e', 'l', 'l', 'o'];

const arrIterator = displayElements(arr);

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
