//What Are Arrow Functions :

// Arrow Functions Are A Shorter Way Of Writing Functions :

//Normal Functions :

function execute(a, b) {
  return a + b;
}

console.log(execute(10, 20));

// In Arrow Functions
//Replace Keyword "function" And Treat It As A Vraiable Followed By Parenthesis And => Followed By Expression

// Syntax: let name (args,args) => expression

let execution = (a, b) => console.log("The Sum Of Two Numbers Is = " + (a + b));
execution(10, 20);

//Multi-Line Arrow Functions
let idk = (a, b) => {
  result = a + b;
  return result;
};

console.log("The Output Result = " + idk(20, 30));
