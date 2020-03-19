//03_DOM-Selectors-for-Single-Elements

//
//document.getElementById();
//

console.log(document.getElementById("task-title"));

//
//document.getElementByClassName();
//

console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

//change styling
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#f4f4f4";
document.getElementById("task-title").style.padding = "3px";
// document.getElementById("task-title").style.display = "none";

//change content
taskTitle = document.getElementById("task-title");
taskTitle.textContent = "Things To Do";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = "<span> Task List </span>";


//document.querySelector("#task-title");

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("ul li"));//first li inside a ul
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "blue";

document.querySelector("li:nth-child(odd)").style.background  = "gray";//returns only a single element, and does not change all odd's in the collection of 'li's on the Document object 





