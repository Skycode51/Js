/* ----- NUMBERS and MATHS ------ */

/* ----- NUMBERS ----- */
// only one type of number. Numbers can be written with or without decimals.  (111 11.1)
// Extra large or extra small numbers can be written with scientific (exponent) notation  (121222e 121223n)
// Numbers are Always 64-bit Floating Point
// NaN - Not a Number : NaN is a JavaScript reserved word indicating that a number is not a legal number.

const score = 400
//console.log(score)

//const balance = new Number(100)  // particuler want in number form 
//console.log(balance);
//console.log(balance.toFixed(2)); // for E-commerse website you will use this property 

const otherNum = 13.8966
//console.log(otherNum.toPrecision(3)); // for precise value 

const hundreds =1000000
//console.log(hundreds.toLocaleString('en-IN')); // proper arrengement 


/* ------- MATHS ------- */
// Math object allows you to perform mathematical tasks on numbers.
// Unlike other objects, the Math object has no constructor. The Math object is static.
// The syntax for any Math property is : Math.property
// JavaScript provides 8 mathematical constants
// Math Methods : The syntax for Math any methods is : Math.method(number) 4 common methods : Math.round(x), Math.ceil(x), Math.floor(x), Math.trunc(x)

console.log(Math); // open the web console and see the property
console.log(Math.abs(-4)); // convert into positive value  and positive bceom positive
console.log(Math.round(4.3)); 
console.log(Math.ceil(4.2)); 
console.log(Math.floor(4.9)); 
console.log(Math.min(4,9,6,9)); 
console.log(Math.max(4,9,6,9)); 


console.log(Math.random()); // always change between 0 to 1 
console.log(Math.random()*10); 
console.log(Math.random()*10 + 1); 
console.log(Math.floor(Math.random()*10 + 1)); 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)




