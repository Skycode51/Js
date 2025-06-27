/* ------ STRINGS ------- */

/* ------ Theories ------- */
// Strings are written with single or double quotes work the same.
// introduced with ES6 (JavaScript 2016).
// strings enclosed in backticks (`This is a template string`). (Templates are not supported in Internet Explorer.)

//morden style 
// always use backticks (`) 
// ${} use this for any kind you want to perform function,data etc.
const name = "Akash"
console.log(`Hello my name id ${name}`)


// Also use as object through and methods 

const gameName = new String("Akash")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('k'));

// Substring method
const newString = gameName.substring(0, 3)   // also can put nagative value for reverse print
console.log(newString)  // last not include 

// Slice method
const anotherString = gameName.slice(-4, 4)  // also can put nagative value for reverse print
console.log(anotherString)

// Trim() & Replace() method
const newStringOne = "   AKASH   "
console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://akash.com/akash%20parmar"
console.log(url.replace('%20', '-'))

//you can ask also 
console.log(url.includes('akash'))  // othervise false 

//split() you required (saperator, limit)
const StringTwo = "akash-parmar-51"
console.log(StringTwo.split('&'))


