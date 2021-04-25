//TODO:

//Comparing Arrays And Objects
//Objects

let Student1 = {
  Name: "Stallone",
  Age: 19,
};

let Student2 = {
  Name: "Stallone",
  Age: 19,
};

if (Student1 === Student2) {
  console.log("True");
} else {
  console.log("Fasle");
}
//OUTPUT: False
if (Student1 == Student2) {
  console.log("True");
} else {
  console.log("False");
}
//OUTPUT: Fasle

// But

let Student3 = Student1;

if (Student3 == Student1) {
  console.log("True");
} else {
  console.log("Fasle");
}
//OUTPUT: True
