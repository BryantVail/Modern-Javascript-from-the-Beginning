//15 | General Loops and Iteration

// kevin wecare example
// if (dropDownOptions !== "undefined") {
//   return;
// } else {
//   //append text "%1%";
// }

for(let i = 0; i< 10; i++){
    
    if( i == 2 ){
        console.log(`${i} is my favorite number!`);
        continue;//step out of iteration
    }

    if(i === 5){
        break;//step out of loop
    }
    console.log(`number ${i}`);

}


//
//while
//
let i = 0;
 while(i< 10){
     console.log(`While will run, i is equal to: ${i}`);
     i++;
 }


//
//do while
//      runs at least One time

i = 0;
do{
    console.log(`"Do-While will run, i equals: ${i}`);
    i++;
}while(i<10);

//      before: 10:40mins
//foreach
//
const carMakes = ["ford", "chevy", "toyota", "jeep", "chrystler"];

for(let i = 0; i< carMakes.length; i++){
    console.log(carMakes[i]);
}


carMakes.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

//      12:00mins
//map
//
const users = [
    {
        id: 1,
        name: "john"
    },
    {
        id: 2,
        name:"Bryant"
    },
    {
        id: 3,
        name: "lewis"
    },
    {
        id: 4,
        name: "stephanie"
    }
]

//  13:45mins
const ids = users.map(function(user){
    return user.id;
});

//
//forin
//  key-value pairs
const user = {
    firstName: "bryant",
    lastName: "vail",
    age: 29
};

for(let x in user){
    console.log(x);
    console.log(user[x]);
}
 