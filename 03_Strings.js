var firstName  = "Stallone ";
var lastName = "Fernandes ";

console.log(firstName);
console.log(lastName);

console.log(firstName + lastName)

//Concatenation 
console.log(firstName + lastName);
console.log("Hi I Am Stallone "+" I Am From Goa")

// Escape Sequences.
var sentence = "Heyyy , He Said \"Go To The Market\" ";
console.log(sentence);

// OR 

var myStr = 'Hello "Hi" "GoodBye"'
console.log(myStr);

/*
ESCAPE SEQUENCES LIST:

\'   = Single Quote
\"   = Double Quote
\\   = Double Slash
\n   = NewLine
\r   = Return Carriage
\t   = Tab Space 
\b   = Back Space
\f   = Form Feed

*/

// String Length 

let myName = "Stallone";

myName = myName.length;
console.log(myName);

// Brackets Notation 

var myString = "Hello";
var zero = myString[0];
console.log(zero);

// 0 Order Indexing 

var negOne = myString[-1];



// String Formatting AKA Template Literal In JS

let formatvar = 100;
let strformat = `${formatvar} Stallone`;
console.log(strformat);

