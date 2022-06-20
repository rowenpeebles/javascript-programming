// Short and Long date format

// Short date format 'MM/DD/YYYY'
const date = new Date("03/25/2015");
console.log(date);

// Long date format 'MM/DD/YYYY'
const date1 = new Date("Jul 1 2020");
console.log(date1);

// Month and day can be in any order
const date2 = new Date("1 Jul 2020");
console.log(date2);

// Month can be full or abbreviated. Also month names are insensitive.
// commas are ignored
const date3 = new Date("July 1 2020");
console.log(date3);

const date4 = new Date("JULY, 1, 2020");
console.log(date4);
