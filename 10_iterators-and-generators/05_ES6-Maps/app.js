//05_ES6-Maps
//app.js

// holds key/value pairs
// can use ANY type as a key or value

const map1 = new Map();

//Set Keys
const key1 = "string of somekind",
  key2 = {},
  key3 = function () {
    return "do this";
  };
//__________________________________________________________________________

//set map values by key
map1.set(key1, "value of key1");
map1.set(key2, "value of key2");
map1.set(key3, "value of key3");

//Map.get()
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// count values
console.log(map1.size);

//__________________________________________________________________________
//iterating through maps

//loop using for...of
for (let [key, value] of map1) {
  console.log(`${key}=  ${value}`);
}

// return keys only
for (let key of map1.keys()) {
  console.log(key);
}

//iterate values only
for (let value of map1.values()) {
  console.log(value);
}

// forEach loop
map1.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

//convert Map to Array; multi-dimentional array
const keyValArray = Array.from(map1);
console.log(keyValArray);

//Array from values
const valArray = Array.from(map1.values());
console.log(valArray);

//Array from Keys
const keyArray = Array.from(map1.keys());
console.log(keyArray);

//
//
