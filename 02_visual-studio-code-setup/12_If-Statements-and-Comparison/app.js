//12 | If Statements and Comparison Operators
let something = 0;
if (something) {
  //execute something
} else {
  //something else
}

// const id = 100;

// if (id == 100) {
//   console.log(`id check was: Correct`);
// } else {
//   console.log(`id check was: Incorrect`);
// }

// // Not Equal to
// if (id != 101) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

// //checking the type
// if (id === 100) {
//   console.log("correct and a number");
//   let variableType = typeof id;
//   console.log(`variable type is: ${variableType}`);
// } else {
//   console.log("incorrect and not a number");
// }
//5:13mins

//undefined
//preferred method in production
// if (typeof id !== "undefined") {
//   console.log(`The id is equal to: ${id}`);
// } else {
//   console.log(`No Id`);
//   // ReferenceError: id is not defined
// }
//7:45mins

//Greater or Less than
const id = 100;
if (id > 1000) {
  console.log(`Id is within valid range: ${id}`);
} else {
  console.log(`Id is within valid range: ${id}`);
}

//If else

const color = "blue";

if (color === "crimson") {
  console.log("color is red");
} else if (color === "yellow") {
  console.log("color is 'Yellow'");
} else {
  console.log("other color");
}

//Logical Operators

//&& ||

const name = "bryant";
const age = 29;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot participate in the race`);
} else {
  console.log(`${name} is registered for the race`);
}

//
//Ternary
//

console.log(id === 100 ? "correct" : "incorrect");
