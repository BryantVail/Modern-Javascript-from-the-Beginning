//06 | Numbers and the Math Object

const num1 = 100;
const num2 = 50;
let val;

//Simple Math with Numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2; //modulous; remainder


//
//Math Object
//

val = Math.PI;
val = Math.E;//euler's number
val = Math.round(2.8);//3
val = Math.ceil(2.4);//3
val = Math.floor(2.8);//2
val = Math.sqrt(64);//8
val = Math.pow(2, 8);
val = Math.min(22, 79, 56, 58, 1, 44);//minimum number of a series
val = Math.max(22, 79, 56, 58, 1, 44);//maximum number of a series
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);//random number between 1-19
//Math.floor() rounds down, 
//Math.random() gives a random number between 0 & 1
//Multiplying by a number raises the 

//result
console.log(val);




