//04_Destructuring
// app.js

let a, b;

[a, b] = [100, 200];

console.log(a); //100
console.log(b); //200

//Rest Pattern, Spread Operator: ...rest
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(rest); // [ 300, 400, 500 ]

// OBJECTS
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a, b);
console.log(rest);

//____________________________________________________________
//Array Destructuring

const people = ["Bryant", "John", "Lewie", "Stephanie"];

const [person1, person2, person3, person4] = people;

console.log(person1, person2, person3, person4);

//____________________________________________________________
//Parse Array returned from function

function getPeople() {
  return ["Bryant", "John", "Lewie", "Stephanie"];
}

let person11, person22, person33, person44;
[person11, person22, person33, person44] = getPeople();

console.log(person11, person22, person33, person44);

//____________________________________________________________
//Object Destructuring

const person = {
  name: "john vail",
  age: "27",
  city: "Orlando",
  gender: "male",
  sayHello: function () {
    return `Hello my name is ${this.name}`;
  },
};

//ES5
// const name = person.name,
//     age = person.age,
//     city = person.city,
//     gender = person.gender;

//ES6
const { name, age, city, sayHello } = person;
console.log(name, age, city);
console.log(sayHello()); //hello my name is
//
