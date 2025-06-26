/*  ------  Data Types ------  */

/*

1. Primitive Data type:
  7 type: String, Number, Boolean, null, Undefined, Symbol, BigInt

  
2. Non- Primitive Data Type(Refrence Types):
--> Array, objects, Functions

*/

// java script is dynamic language (Values are not fixed)

//Primitive 
const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 23244343454656n

// Refrence (Non- primitive)

const heros = ["Hulk", "Spiderman", "superman"]

let myObj = {
    name: "Akash",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");   
}