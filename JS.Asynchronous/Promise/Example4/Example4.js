// JS finally() method

let countValue = new Promise(function(resolve, reject) {
    resolve('Promise resolved');
});

countValue.finally(
    function greet() {
        console.log('This code is executed');
    }
);
