const score = 400

console.log(score.toFixed(2))

const anotherNumber = 123.8966
// toPreision gives the precise numer til teh forst n digits on a fuber stating before the decimal point
console.log(anotherNumber.toPrecision(4))
console.log(anotherNumber.toPrecision(3))

const hundreds = 1000000
// to local string adds the comas
console.log(hundreds.toLocaleString("en-In"))

Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER

// ++++++++++++++++mats++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.max(4, 3, 6, 8)); // This line is repeated.

console.log(Math.random()) // between 0 and 1
console.log((Math.random() * 10) + 1) // from 1 to 10
console.log(Math.round(((Math.random() * 100) + 1))) // from 1 to 100
// +1 MAKES sure that I get a value greater than 0 

const min = 20
const max = 50
console.log(Math.floor((Math.random() * (max - min + 1))) + min)