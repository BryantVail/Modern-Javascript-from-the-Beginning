//Variables: [var, let, const];

// //var
// //  since the beginning
// //  will not be used after this video
// var name = "John Doe";
// console.log(name);
// // re-assign
// name = "new name";
// console.log(name);

// //  declaration without assignment
// var greeting;
// //  undefined
// console.log(greeting);
// greeting = "hello";
// console.log(greeting);

// //variable conventions:
// //  letters, numbers, _, $
// //  cannot start a variable name with a number

// var letters = "letters";
// var numbers = "letter1";
// //  underscore is not advised
// var _global = "global";

// //  multi-word
// var firstName = "camelCase";
// var PascalCase = "PascalCase";

//LET

//CONST
//  value must be assigned
//  use as often as possible when values should not change
const name = "firstname";
console.log(name);

// name = "new name";// typeError

//const greeting;// must be initialized with value

//  how const can be changed
const person = {
  name: "John"
};
console.log(person);
//  change name of object, const is still an object
person.name = "new name";
console.log(person);

//  Arrays
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(100);
console.log(numbers);
