let val; 

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Properties attached to these nodes
//get child nodes
val = list.childNodes; //returns NodeList
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;


// 6:00mins

// 1 - Element 
// 2 - Attribute (deprecated)
// 3 - Text node 
// 8 - Comment 
// 9 - Document itself 
// 10 - DocType


//LOOP through to find all comments from the children of 'list'
// let elements = Array.from(val);
// let arrayOfComments = new Array();

// for(let i = 0; i < elements.length; i++){
//   if(elements[i].nodeType == 8){
//     arrayOfComments.push(elements[i]);
//   }
// }

// console.log(arrayOfComments);

//get children element nodes only
val = list.children; //returns HTMLCollection
val = list.children[0];
list.children[1].textContent = 'Hello';

// children of children
val = list.children[3].children;
val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';

// FIRST child
val = list.firstChild; //#text
val = list.firstElementChild; //element, not text

// LAST child
val = list.lastChild; //#text
val = list.lastElementChild;

//COUNT
val = list.childElementCount; //5, not including text

val = listItem.parentNode; //<ul class="collection"></ul>
val = listItem.parentElement; //
val = listItem.parentElement.parentElement; //<div class="card-action"></div>

//GET next SIBLING
val = listItem.nextSibling; //#text
val = listItem.nextElementSibling;// <li class="collection-item"></li> 

//GET PREVIOUS Sibling
val = listItem.previousSibling; // #text
val = listItem.previousElementSibling; //null, no previous siblings












console.log(val);