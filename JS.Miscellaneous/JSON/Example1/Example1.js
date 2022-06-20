// Accessing JSON Data

// JSON object
const data = {
    'name': 'John',
    'age': 22,
    'hobby': {
        'reading': true,
        'gaming': false,
        'sport': 'football'
    },
    'class': ['JavaScript', 'HTML', 'CSS']
}

// Accessing JSON object
console.log(data.name);
console.log(data.hobby);
console.log(data.hobby.sport);
console.log(data.class[1]);
