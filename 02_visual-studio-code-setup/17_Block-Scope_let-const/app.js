// 17 | Block Scope with 'let' and 'const'

//
//Global Scope
//

var a = 1;
let b = 2;
const c = 3;


//
//function scope
//
function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function Scope: `, a, b, c);
}
test();

//
//block scope
//

if(true != 'undefined'){
    //var persists to the global scope
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`Block Scope: `, a, b, c);

}

listA = [1,2,3,4,5,6,7,8,9,10];
for(let b = 0;b< listA.length; b++){
    console.log(listA[b]);
}

//var, persists to global
for(var a = 0; a< listA.length; a++){
    console.log(listA[a]);
}


console.log(`Global Scope: `, a, b, c);






