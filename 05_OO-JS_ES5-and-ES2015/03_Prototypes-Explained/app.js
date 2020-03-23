// 03_Prototypes-Explained

// Object.prototype
//-> Person.prototype

// Person constructor
function Person(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = new Date(dateOfBirth);
  this.height = null;

  // this.calculateAge = function(dateOfBirth) {
  //   const diff = Date.now() - this.dateOfBirth.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

const john = new Person("John", "Vail", "1993-10-09");
const stephanie = new Person("Stephanie", "Feliciano", "1990-01-16");

console.log(stephanie);

Person.prototype.calculateAge = function(dateOfBirth) {
  const diff = Date.now() - this.dateOfBirth.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

stephanie.getsMarried("Vail");
console.log(stephanie.getFullName());

console.log(stephanie.hasOwnProperty("firstName"));
console.log(stephanie.hasOwnProperty("getFullName"));
