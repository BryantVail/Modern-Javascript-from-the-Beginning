//02_Examining-the-Document-Object

let val;//initialize

val = document;

//html collection from doc
val = document.all;//collection
val = document.all[0];
val = document.all[1];

val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
//  8:00mins

val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//get all forms
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

//get links
val = document.links;
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

//get images
val = document.images;
val = document.images[0];

//get scrips
val = document.scripts;
val = document.scripts[2].src;
//http://127.0.0.1:5500/03_DOM-Manipulation-and-Events/02_Examining-the-Document-Object/app.js 
val = document.scripts[2].getAttribute("src");//app.js

//  12:35mins

//collection of scripts
let scripts = document.scripts;

//cast from collection to array
let scriptsArray = Array.from(scripts);

//foreach works with arrays only
scriptsArray.forEach(function(script){
    console.log(script.getAttribute('src'));
});


console.log(val);

