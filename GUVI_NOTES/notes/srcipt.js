//1. create a request variable. instance of xmlhttprequest. "new" 
var request = new XMLHttpRequest();

//2. create a new connection. 1. method 'get' 2. url 3. true -> async 
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//3. send request 
request.send();
//4. print the response on load 
request.onload= function(){
	var data = JSON.parse(this.response);
	console.log(data)
}

try {

  // code...

} catch (err) {

  // error handling

}

try {

  alert('Start of try runs');  // (1) <--

  // ...no errors here

  alert('End of try runs');   // (2) <--

} catch(err) {

  alert('Catch is ignored, because there are no errors'); // (3)

}

try {

  alert('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch(err) {

  alert(`Error has occurred!`); // (3) <--

}

// //only work for runtime error
try {
  {{{{{{{{{{{{
} catch(e) {
  alert("The engine can't understand this code, it's invalid");
}

// //error object
try {
  lalala; // error, variable is not defined!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined
}

// // Throw error
let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name e.name=SyntaxError
}


// // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
// //  or properties from objects, into distinct variables.

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// // expected output: 10

console.log(b);
// // expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50,60,70,80];

console.log(rest);
// // expected output: Array [30,40,50,60,70,80]

// // Destructuring on objects lets you bind variables to properties of an object. You specify the property being bound, followed by the variable you are binding its value to.


var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };

var { name: nameA } = robotA;
var { name: nameB } = robotB;

console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"


// //rest parameter
function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5));

// //The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them.
// //function arguement will be present in args array

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3)); // 6

// //spread operator 

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8



let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

// alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)
// In the examples above we used an array to demonstrate the spread syntax, but any iterable will do.

// For instance, here we use the spread syntax to turn the string into array of characters:

let str = "Hello";

alert( [...str] ); // H,e,l,l,o


