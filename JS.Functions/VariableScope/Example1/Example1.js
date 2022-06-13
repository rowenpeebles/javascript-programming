// Local ]scope variable

let a = 'hello';

function greet() {
    let b = 'world';
    console.log(a + b);
}

greet();

console.log(a + b); 
// error because b is not defined globally
