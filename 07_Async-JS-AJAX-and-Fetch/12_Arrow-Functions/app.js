// 12_Arrow-Functions

// const sayHello = function() {
//   console.log("hello");
// };

// const sayHello = () => {
//   console.log("hello");
// };

//does not need braces on a single line
// const sayHello = () => console.log("Hello");

// returns on one line
// const sayHello = () => "Hello";

// object literals
// const sayHello = () => ({
//   msg: "say hello"
// });

// Parameters; single param doesn't need parenthesis
// const sayHello = name => console.log(`hello ${name}`);

// parameters, multiple
// const sayHello = (firstName, lastName) =>
//   console.log(`hello ${firstName} ${lastName}`);

// sayHello("Bryant", "Vail");

const usernames = ["bryant", "stephanie", "John", "Lewis", "Lora", "Shirley"];

// const nameLengths = usernames.map(function(user) {
//   return user.length;
// });

// const nameLengths = usernames.map(user => {
//   return user.length;
// });

//shortest
const nameLengths = usernames.map(username => username.length);

console.log(nameLengths);

//
