// 06_ES6-Classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const steph = new Person("stephanie", "feliciano", "1990-01-15");

console.log(steph);
console.log(steph.greeting());
console.log(steph.calculateAge());
steph.getsMarried("vail");
console.log(steph.greeting());

// console.log(steph.addNumbers(1, 1)); // error: typeError
console.log(Person.addNumbers(1, 1));
