//09_ArraysAndArrayMethods

//Create Arrays
const numberSyntax1 = [1,2,3,4,5,35,22,29,54];
const numbers = new Array(22, 45, 33, 76, 79, 54, 56, 58, 54);

//Strings
const fruit = new Array("apple", "orange", "banana", "avocado");

//Mixed?!
const mixedList = new Array("fruitString", {name: "bryant", job: "programmer"}, 24, "antoherString", new Date());
console.log(mixedList);//print Array MixedList
//returns: "Array(5)[...]"
//2:21mins
//2:44mins
//4:00mins console.log(numbers) & val
//4:15 isArray()
// 5:00mins  Get Single Value
let val;


//
//Functions of Array
//

//.length property
val = numbers.length;

//.isArray(<array*>)
val = Array.isArray(numbers);
//returns boolean

val = numbers[3]; //singular value

val = numbers[0];//zero based array

//insert
//      6:00mins
numbers[2]  =  100;
val = numbers[2];

//indexOf
val = numbers.indexOf(54);


//
//MUTATING ARRAYS
//

//.push()
numbers.push(250);//appends

//.unshift
//      add to front of array
val = numbers.unshift(56795854);//returns the new length of the list
console.log(numbers.indexOf(val));
// indexOf returns
//      -1 when unshift is used

//example logs
console.log(numbers);
console.log(val);
console.log(numbers.indexOf(val));
console.log(numbers.length);







