//Lesson
//  Log to console

//in the past 'alert' would be used as opposed to console

//example from console
document.querySelector("h1").style.color = "red";

//console commands
//string
console.log("Hello World");

//numbers
console.log(1234);

//bool
console.log(true);

//variable
let text = "this text";
console.log(text);

//arrays
console.log([1, 2, 3, 4, 5]);

//objects
console.log({
  firstname: "Bryant",
  lastname: "Vail",
  gender: "male"
});

//table
console.table({
  name: "bryant vail",
  birthYear: "1990",
  gender: "male",
  country: "United states"
});

//errors
console.error("This is some error");

//clear
console.clear();

//warn
console.warn("This is  a warning");

//time
const iterateAndPrint = function(iterations, printValueRate = iterations) {
  const prints = [];

  for (let i = 0; i < iterations; i++) {
    //add value to the array
    prints.push(i);

    //if modulus of printValueRate and the iterator are == 0,
    //  then
    //    printTheValue
    //This is to not bog down the console
    if (prints[i] % printValueRate == 0) {
      console.log(i + "\t" + prints[i]);
    }
    if (prints[i] == iterations - 1) {
      console.log(prints[i]);
    }
  }
};

const StopwatchForFunctions = function(
  functionToTime,
  argumentOne = null,
  argumentTwo = null
) {
  console.time("default");
  functionToTime(argumentOne, argumentTwo);

  //task complete
  console.timeEnd("default");
};

StopwatchForFunctions(iterateAndPrint, 100000000);
