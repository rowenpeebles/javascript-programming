// Display undeclared variable

const numerator = 100, denominator = 'a';

try {
    console.log(numerator/denominator);
    console.log(a);
}
catch(error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}
