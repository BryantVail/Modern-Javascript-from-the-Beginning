//05 | type conversion

//use 1 variable for entire example
let value;

//Number to String
value  = String(555);//converting a number to a 'String' type
//555, String, 3

value = String(4+4);
//8, String, 1

value = String(true);
//true, string, 4

value = String(new Date());
//Sat Sep 07 2019 13:28:17 GMT-0400 (Eastern Daylight Time)
//String
//57

value = String([1,2,3,4,5]);
//"1,2,3,4,5"
//String
//9

//
//().toString();
//
value = (5).toString();
//  5, String, 1

value = (true).toString();
//  true, String, 4


//
//NUMBERS; Convert to Numbers
//
value = "5";
value = Number(value);
//5, number, 5.00

value = Number("100");
//100, number, 100.00

value = Number(true);
// 1, number, 1.00

value = Number(false);
//0, number, 0.00

value = Number(null);
//0, number, 0.00

value = Number("String of Characters");
//NaN, number, NaN

value = Number([1,2,3,4]);
//NaN, number, NaN

//parseInt()
value = parseInt("100");
//100, number, 100.00

value = parseInt("100.30");
//100, number, 100.00

//parseFloat()
value = parseFloat("100.33400");
//100.334, number, 100.33

// Output
console.log(value);
console.log(typeof value);
// console.log(value.length);//comment out after 'String' Section (the first section of examples)

// ().toFixed can fix decimal points
//      ONLY works with typeof 'Number'
console.log(value.toFixed(2));

let value1 = 5;
const value2 = 6;
const sum = value1 + value2;//sum of value1 & value2

console.log(sum);
console.log(typeof sum);


const value1String = String(5);
// value2 = 6;

const sumStringWithNumber = value1String + value2;

console.log(sumStringWithNumber);//'56', concatenation
console.log(typeof sumStringWithNumber);

