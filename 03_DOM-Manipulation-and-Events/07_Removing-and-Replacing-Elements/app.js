//07_Removing-and-Replacing-Elements

//Create Element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('task list'));

//get the old heading
const oldHeading = document.getElementById('task-title');
//parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('.collection-item');
const list= document.querySelector('.collection');

//remove list item
lis[0].remove();

// remove by child
list.removeChild(lis[1]);

//CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('.collection-item:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList; //returns DOMTokenList
// val  = link.classList[0];
link.classList.add('test');


//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
val = link.hasAttribute('title');
link.setAttribute('title', 'Hello');
val = link;

console.log(val);





console.log(newHeading);