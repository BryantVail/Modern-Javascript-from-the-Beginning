// 01_Constructors-and-the-this-keyword

// Person constructor
function Person(name, dateOfBirth) {
  this.name = name;
  this.dateOfBirth = new Date(dateOfBirth);
  this.height = null;

  this.calculateAge = function(dateOfBirth) {
    const diff = Date.now() - this.dateOfBirth.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const Bryant = new Person("bryant");
const John = new Person("john", "1993-10-09");
const Lewis = new Person("lewis");
console.log(Bryant);
//do not need to pass in a value bc the function is defined using a value from the object
console.log(John.calculateAge());

// 'this' in the global
console.log(this); //window object
// this.alert(1); //alert with the text of '1'
