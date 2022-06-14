// Iterating over a multidimensional array
let studentData = [['jack', 23], ['sara', 24], ['peter', 23]];

studentData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

// Using forLoop
for (let i = 0; i < studentData.length; i++) {
    let innerArrayLength = studentData[i].length;
    for (let j = 0; j < innerArrayLength; j++) {
        console.log(studentData[i][j]);
    }
}
