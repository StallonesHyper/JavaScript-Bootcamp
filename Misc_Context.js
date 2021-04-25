sayHello();

function sayHello() {
  console.log("Hello And Welcome");
}

//This Will Work And Not Give An Error As In C++

//Will Check On This Later

// Function Declarations Are Scanned And Then Made Available
// Variable Declarations Are Scanned And Made UnDefined

counter(200);

function counter(x) {
  var i = x;
  console.log(i + 10);
}

counter(5); //Execution Context Kicks In

// As Soon As Execution Context Is Done With The Scope Moves To The Global Context

//bouncer(20); //This Will Not Work

var bouncer = function bouncer(x) {
  var y = x;
  console.log(y + 200);
};

bouncer(200); //This Will Work

