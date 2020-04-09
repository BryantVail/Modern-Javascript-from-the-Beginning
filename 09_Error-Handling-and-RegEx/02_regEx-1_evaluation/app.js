//02_regEx-1_evaluation-functions

let regEx;

//face value
regEx = /hello/i; //i flags for case 'i'nsensitive
// regEx = /hello/g; // global search

console.log(regEx);
console.log(regEx.source);

//exec() = returns result in array or null for no match
// const result = regEx.exec("hello world hello");
// console.log(result.index);
// -> returns:
//  0: "hello"
//  index: 0
//  input: "hello world"
//  length: 1

//test() - returns true/false
let result = regEx.test("Hello"); //case insensitive
console.log(result);

// match - result array or null
let str = `Hello there hello`;
result = str.match(regEx);
console.log(result);

//search() - returns index of the first match - else returns -1
str = "hello there";
result = str.search(regEx);
console.log(result);

//replace() - return new string with some or all matches of a pattern
str = "Bryant, Hello, how is everyone else's hello?";
let newStr = str.replace(regEx, "Hi");
console.log(newStr);

//
