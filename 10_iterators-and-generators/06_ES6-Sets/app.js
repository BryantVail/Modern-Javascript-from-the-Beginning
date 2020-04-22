//06_ES6-Sets
//app.js

// list of non-repeating values
const set1 = new Set();

//Add values to set
set1.add(100);
set1.add("string of some kind");
set1.add({ name: "John" });
set1.add(true);

console.log(set1);

set1.add(100);
console.log(set1); //did not add duplicate

// const set2 = new Set([1, 2, 3, {}, true, false, "string here"]);
// console.log(set2);

//Get count
console.log(set1.size);

//check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // still true
console.log({ name: "John" }); // false, // a reference object, not a distinct object; pointing to a different place in memory

//Delete from the Set
// set1.delete(100);
// console.log(set1);

//_________________________________________________________
// Iterate through sets
console.log("ITERATING THROUGH Sets--------------------------");

//for...of
console.log("let item of set1      --------------------------");
for (let item of set1) {
  console.log(item);
}

//set1.values()
console.log("let item of set1.values()--------------------------");
for (let item of set1.values()) {
  console.log(item);
}

//set1.keys()
console.log("let item of set1.keys()--------------------------");
for (let item of set1.keys()) {
  console.log(item);
}

// forEach
console.log("set1.forEach((item) => {} --------------------------");
set1.forEach((item) => {
  console.log(item);
});

//Convert to an array
console.log("set to Array.from()");
const setArray = Array.from(set1);
console.log(setArray);
