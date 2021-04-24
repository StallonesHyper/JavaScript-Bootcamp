// TODO:

// Fallacy Values:
// NaN
// Null
// UnDefined
// 0
// ""
// False

var x = null;

if (x) {
  console.log("The Value Is Available");
} else {
  console.log("There Is No Value");
}
//There Is No Value

// Similarly In == And ===

var a = "2";

if (a == 2) {
  console.log("Matched");
}
//Matched Because Coercion As JS Assumes The Value To BE 2 And Doesnt Check For Type

// But

var b = "5";

if (b === 5) {
  console.log("Match Found");
} else {
  console.group("Match Not Found");
}

//Match Not Found BEcause In JS Using === Will Check For The Values As Well As The Type
