// 05_Using-Object.create

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const steph = Object.create(personPrototypes);

steph.firstName = "Stephanie";
steph.lastName = "Feliciano";
steph.age = 30;

steph.getsMarried("Vail");

console.log(steph);
console.log(steph.greeting());

const bry = Object.create(personPrototypes, {
  firstName: { value: "bry" },
  lastName: { value: "vail" },
  age: { value: 30 }
});

console.log(bry);
console.log(bry.greeting());
