// 07_Sub-Classes

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membershipType) {
    super(firstName, lastName);
    this.phone = phone;
    this.membershipType = membershipType;
  }

  greeting() {
    return `Welcome to the store ${this.firstName} ${this.lastName}!`;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("john", "vail", "4076974422", "gold");
console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
//
