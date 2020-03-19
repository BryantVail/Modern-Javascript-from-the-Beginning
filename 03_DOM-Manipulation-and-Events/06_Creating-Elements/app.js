//06_Creating-Elements

// create the element
const li = document.createElement('li');

li.className = "collection-item";
li.id = "new-item";

//add attribute
li.setAttribute('title', 'New Item');

//CREATE TEXT NODE and append
li.appendChild(document.createTextNode('Hello World'));

//APPEND LI as child to ul
document.querySelector('ul.collection').appendChild(li);

//Create New Link element
const link = document.createElement('a');

//Add Classes
link.className = "delete-item secondary-content";
link.innerHTML = '<i class="fa fa-remove"></li>';

//add li with link
document.querySelector('ul.collection').appendChild(li).appendChild(link);












console.log(li);