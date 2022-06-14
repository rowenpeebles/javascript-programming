// Update values of properties

const salaries = {
    Jack: 24000,
    Paul: 34000,
    Monica: 55000
}

for (let i in salaries) {
    let salary = "$" + salaries[i];
    console.log('${i} : ${salary}');
}
