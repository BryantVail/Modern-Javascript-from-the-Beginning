//11 | Date and Time

let val;

let today = new Date(); //default is today
val = today;

const birthday = new Date(1990, 2, 1);
val = birthday;

//dates
let day = new Date("1990/3/1");
day = new Date("3/1/1990");

console.log(`'day' is equal to: ${day}`);

//getters of Date()
val = today.getMonth();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

val = today.getTime();
//time value in milliseconds since "jan, 1, 1970"

val = today.getDate();
val = today.setHours(12);
val = today.setMonth(4);
// 1552322464031
// 1552322511400
// 1557592937265

val = today.setMonth(8);
val = today.setDate(12);
val = today.setFullYear(2019);
val = today.setHours(11);
val = today.setMinutes(44);

//
//console log
//

console.log(val);
console.log(typeof val);
