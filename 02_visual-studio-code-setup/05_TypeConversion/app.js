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

// Output
console.log(value);
console.log(typeof value);
// console.log(value.length);//comment out after 'String' Section (the first section of examples)

// ().toFixed can fix decimal points
//      ONLY works with typeof 'Number'
console.log(value.toFixed(2));



