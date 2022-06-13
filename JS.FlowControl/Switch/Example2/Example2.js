// Type checking in switch statement

let a = 1;

switch (a) {

    case "1":
        a = 1;
        break;
    case "2":
        a = 2;
        break;
    case 1:
        a = 'one';
        break;
    default:
        a = 'not found';
        break;
}

console.log('The value is ${a}');
