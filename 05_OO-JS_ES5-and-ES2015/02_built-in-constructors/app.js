//02_built-in-constructors

//Strings

//primitive value
const nameLiteral = "Jeff";
const nameConstructor = new String(nameLiteral);

console.log(nameConstructor);

console.log(typeof nameLiteral); //string
console.log(typeof nameConstructor); //object
console.log("--------------");

if (nameLiteral === "Jeff") {
  console.log("string");
} else {
  console.log("object");
} //returns string

if (nameConstructor === "Jeff") {
  console.log("string");
} else {
  console.log("object");
} //returns object

//Numbers
const numberLiteral = 5;
console.log(`numberLiteral type: ${typeof numberLiteral}`);

const numberConstructor = new Number(numberLiteral);
console.log(numberConstructor);
console.log(`numberConstructor type: ${typeof numberConstructor}`);

//Boolean

const boolLiteral = true;
const boolConstructor = new Boolean(boolLiteral);

// Function
const getSumLiteral = function(x, y) {
  return x + y;
};

const getSumConstructor = new Function("x", "y", "return x+y;");

console.log(getSumConstructor);
console.log(getSumConstructor(1, 1));

// OBJECT
const john = { name: "john" };
console.log(john);
const bry = new Object(john);
console.log(bry);

//ARRAY
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4);

//REGEX

const re1 = /\w+/;
console.log(re1);
const re2 = new RegExp("\\w+"); //must escape the '/' when using the constructor
console.log(re2);
