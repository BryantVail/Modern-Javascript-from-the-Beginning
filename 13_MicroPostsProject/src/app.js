const person = require("./Module1"); //.js file extention not needed
import { john } from "./ES5_Module";
import { sayHello } from "./ES5_Module";

//import all
import * as module from "./ES5_Module";

// default 
import greeting from "./ES5_Module";



console.log(person.name);
console.log(module.sayHello(module.john));
console.log(`default import "${greeting}"`);


