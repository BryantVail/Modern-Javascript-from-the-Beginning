//01_iterators-and-generators
// app.js

function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : {
            done: true,
          };
    },
  };
}

//create an array of names
const namesArray = ["bryant", "stephanie", "lewie", "john", "shirley"];

const names = nameIterator(namesArray);

console.log(names.next()); // returns object: {value: "{name}", done: "{bool}"}
console.log(names.next().value);
console.log(names.next().value);

//GENERATORS
console.log("GENERATORS");
function* sayNames(names) {
  // '*' key to make it a generator

  yield "bryant";
  yield "lewie";
  yield "john";
  yield "stephanie";
}

const name = sayNames(namesArray);
console.log(name.next());
console.log(name.next());

// next example
//Id creator

function* createIds() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
