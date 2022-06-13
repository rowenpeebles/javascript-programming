// block-scoped variable

let a = 'hello';

function greet() {
    let b = 'world';
    console.log(a + b);
    if (b == 'world') {
        let c = 'hello';
        console.log(a + b + c);
    }
    console.log(a + b + c);
    // c can't be accessed here
}

greet();
