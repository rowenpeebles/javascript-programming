// Remove an element from a multidimensional array
let studentData = [['jack', 23], ['sara', 24], ['peter', 23]];
studentData.pop();
console.log(studentData);

// Remove element from inner array
studentData[1].pop();
console.log(studentData);

// Using splice() method to remove element at specified index
studentData.splice(1, 1);
console.log(studentData);
