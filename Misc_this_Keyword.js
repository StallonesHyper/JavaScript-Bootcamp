let x = {
  name: "Stallone",
  age: 19,

  print: function () {
    console.log(this.name);
  },
};

console.log(x.name);
console.log(x.print());
