//12_Local-and-Session-Storage

//set local storage item
//-> local storage stays until removed
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

//Session storage
//-> stays when session is closed/browser closed
// sessionStorage.setItem("name", "Lewis");

// //Remove from storage
// // localStorage.removeItem("name");

// // Get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name);

// localStorage.clear();
// console.log(name, age);

document.querySelector("#task-form").addEventListener("submit", getTasks);

function getTasks(e) {
  const task = document.querySelector("#task-input").value;
  console.log(task);
  // document.querySelector("#task-input").textContent.;
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert(`Task Saved: ${task}`);

  e.preventDefault();
}

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function(task) {
  console.log(task);
});
//end doc
