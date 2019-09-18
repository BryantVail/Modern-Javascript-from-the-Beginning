//10 | Object Literals

const person = {
  firstName: "bryant",
  lastName: "vail",
  email: "bryantvail@gmail.com",
  birthYear: 1990,
  age: function() {
    return Number(new Date().getUTCFullYear) - this.birthYear;
  },
  address: {
    city: "deland",
    state: "florida"
  },
  hobbies: ["sports", "programming", "web dev", "exercise"],
  getBirthYear: function() {
    return this.birthYear;
  }
};

let val;

//print basic object
val = person;

console.log(val["birthYear"]);
console.log(val.birthYear);

//print property
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.hobbies;
val = person.address.state;
val = person["address"]["city"];
val = person.getBirthYear();

//
//console
//

console.log(`returned value of 'val.toString()': ${val}`);
console.log(val);

//
//iterations
//

const people = [
  {
    name: "john",
    age: 27
  },
  {
    name: "lewie",
    age: 32
  },
  {
    name: "bryant",
    age: 29
  }
];

//iterate people
for (let i = 0; i < people.length; i++) {
  console.log(`Name: ${people[i].name}, age: ${people[i].age}`);
}
