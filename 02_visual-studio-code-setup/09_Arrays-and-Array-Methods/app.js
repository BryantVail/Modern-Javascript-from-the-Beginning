//09_ArraysAndArrayMethods

//Create Arrays
const numberSyntax1 = [1,2,3,4,5,35,22,29,54];
const numbers = new Array(22, 45, 33, 76, 12, 18, 24, 28, 22, 9, 1, 32, 79, 54, 56, 58, 54);

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
//show numbers array as it is this point in the code
console.log(`The Array named 'numbers' before 'pop()': ${numbers}`);
console.log(numbers.indexOf(val));
// indexOf returns
//      -1 when unshift is used

//{}.pop();
//  remove & return last element
console.log(`'pop()' returns the value: ${val}`);
val = numbers.pop();

//shift(), remove from front
val = numbers.shift();
console.log(`value [0] from the array is: ${val}`);

//splice(), 
val = numbers.splice(0,3);//removes part of an array, not inclusive of the ending index

//reverse()
console.log(`numbers array before 'reverse()': ${numbers}`);
val = numbers.reverse();
//      11:00mins

//sort()
//numbers before sort
console.log(`numbers array before 'sort()': ${numbers}`);

val = numbers.sort();
//numbers sorted default; ascending
console.log(`numbers array after 'sort()': ${numbers}`);

//'compare()' function
//      2 arguments
//      
val = numbers.sort(function(x, y){
    return x - y;
});

//Descending Order
val = numbers.sort(function(x, y){
    return y - x;
});
console.log(`numbers array after 'sort()' desc: ${numbers}`);

//Find
function under50(number){
    return number < 50;
}

val = numbers.find(under50);

//
//example logs 
//


console.log(`The Array named 'numbers' after 'pop()': ${numbers}`);
console.log(`returned value from 'val': ${val}`);
console.log(numbers.indexOf(val));
console.log(numbers.length);







