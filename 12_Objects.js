const personEntity = {
  //This Is A Object Which Contains The Following DataTypes
  myName: "Stallone", //String
  age: 19, //Integer
  state: "Goa", //String
};

console.log(
  `Hello ${personEntity.myName} Nice To Meet A ${personEntity.age} Year Old Grown Up Person , From ${personEntity.state}`
); //Printing Out The Object Information.

// OR

console.log(
  "Hello " +
    personEntity.myName +
    " A " +
    personEntity.age +
    "Year Old Grown Up Man " +
    "From , " +
    personEntity.state
);

//Accessing Object Data:

// In Order To Access The DataMembers Of An Object We Do The Following:

/*let ObjectName{
    DataMemberName: "Data",

}*/

// Where DatamemberName Is A Key And Data Is Value Which Works In A Pair

//ObjectName.DataMemberName

let Student = {
  name: "Stallone",
  age: 19,
  location: "Goa Siolim",
  company: "Amazon",
};

console.log(Student);

console.log(Student.name);
console.log(Student.age);
console.log(
  "The Student's Name Is " +
    Student.name +
    " And He Is From " +
    Student.location
);

console.log("The Student Is Working For " + Student.company);
