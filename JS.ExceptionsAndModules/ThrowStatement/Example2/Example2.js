// Rethrow exception

const number = 5;

try {
    throw new Error('This is the throw');
}
catch(error) {
    console.log('An error caught');
    if (number + 8 > 10) {
        console.log('Error message: ' + error);
        console.log('Error resolved');
    }
    else {
        throw new Error('The value is low');
    }
}
