//04_Prototypal-Inheritance

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("john", "vail");
console.log(person1);
console.log(person1.greeting());

// Customer
function Customer(firstName, lastName, phone, membershipType) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membershihpType = membershipType;
}

// Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make Customer.prototype return Customer
Customer.prototype.constructor = Customer;

//Create Customer
const customer1 = new Customer("bryant", "vail", "4076974422", "gold");

console.log(customer1);

//Customer Greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}, Welcome to our store`;
};

console.log(customer1.greeting());
