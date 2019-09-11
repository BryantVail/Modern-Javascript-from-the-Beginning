//14 | function declarations and expressions

//
//declarations
//
function fnName(firstName, lastName = "vail") {
  //console.log("fnName");
  //usually want to return something
  return `Hello ${firstName} ${lastName}`;
}
// fnName();
console.log(fnName("bryant"));
//4:50mins

//
//Expressions
//    -as a variable assignment
const sqaure = function(x = 2) {
  return x * x;
};

console.log(sqaure(8));

//
//IIFE
//    declare & run at the same time

// (function() {
//   console.log("iife ran");
// })(); //when functions run, use parenthesis

let variable = "global variable";

(function(globalVariable) {
  console.log(`Global Variable value: ${globalVariable}`);
})(variable); //pass in argument to IIFE through here
//when functions run, use parenthesis

//
//Object Function Declaration
//
const todo = {
  add: function(a = 1, b = 2) {
    console.log(a + b);
  },
  edit: function(id) {
    console.log(`edit todo ${id}`);
  }
};

todo.add();
todo.edit(1014934);

todo.delete = function() {
  console.log(`delete todo`);
};
todo.delete();
