//app.js, 04_DOM-Selectors-for-multiple-elements

//getElementsByClassName
// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);// the first one
// // items[0].style.color = 'red'; 
// items[0].textContent = "hello";

// //grab all 'ul' elements, then get the elements from that where they have the className "collection-item"
// const listItems = document.querySelector("ul").getElementsByClassName('collection-item');
// console.log(listItems);


let lis = document.getElementsByTagName("li");
console.log(lis);
lis[0].style.color = "red";
lis[0].textContent  = "first item";

lis[2].textContent = "Listier Item";


// HTMLCollection is NOT an array

//convert lis to an array
// lis = Array.from(lis);

// //reverse the array
// lis.reverse();
// console.log(lis);

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}. List Item`;
// });


// document.querySelectorAll()
// returns 'NodeList' type
const items  = document.querySelectorAll("ul.collection li.collection-item");

console.log(items);

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(item, index){
  item.style.background = "#ccc";
});

const liEven = document.querySelectorAll('li:nth-child(even)');
//will work with HTMLCollection || array
for(let i = 0; i< liEven.length; i++){
  liEven[i].style.background = "lightblue";
}














