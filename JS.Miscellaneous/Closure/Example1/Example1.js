// JS Closures

// Outer function
function greet() {
    // Variable defined outside the inner function
    let name = 'John';
    // Inner function
    function displayName() {
        // Accessing name variable
        return 'Hi' + ' ' + name;
    }
    return displayName;
}

const g1 = greet();
console.log(g1); // Returms the function definition
console.log(g1()); // Returns the value
