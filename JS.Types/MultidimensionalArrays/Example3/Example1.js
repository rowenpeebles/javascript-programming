// Add an element to a multidimensional array
let studentData = [['jack', 24], ['sara', 23], ['peter', 24]];
studentData.push(['louise', 25]);
console.log(studentData);

// Adding elements to inner array
studentData[1][2] = 'inserted';
console.log(studentData);
