/* **** Data conversion **** */

// Datatypes always represents as first latter is capital 

let score = "33"

console.log(typeof score)
console.log(typeof(score))

// now convertion  string to numbers 

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))

// "33" => 33
// "33abc" => NaN (Not a number)
// true => 1 , false => 0
// Inidentified => NaN
// " "  =>  false, "value" => True 
