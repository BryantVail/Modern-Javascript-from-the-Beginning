//01_task-list_p1_UI-and-Add-Task-Items

//Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".task-collection");
const taskInput = document.querySelector("#task-input");
const filterText = document.querySelector("#filter-text");
const clearBtn = document.querySelector(".clear-tasks");

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  // DOM load
  document.addEventListener("DOMContentLoaded", getTasks);
  //add task
  form.addEventListener("submit", addTask);
  //remove task
  taskList.addEventListener("click", removeTask);
  //clear tasks
  clearBtn.addEventListener("click", clearTasks);
  //filter tasks
  filterText.addEventListener("keyup", filterTasks);
}

function createDOMTaskItem(string) {
  //create li element
  const li = document.createElement("li");
  //add class
  li.className = "collection-item task-item"; //materialize class used here

  //create text node & append to li
  li.appendChild(document.createTextNode(string));

  //create new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content"; //something to the right of li, needs 'secondary-content' class

  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  return li;
}

//getTasks from localStorage
function getTasks() {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let DomList = document.querySelector(".task-collection");
  //loop to create & append li's to the dom
  tasks.forEach(function(task) {
    DomList.appendChild(createDOMTaskItem(task));
  });
}

// addTask, event: submit
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task to the textbox");
  }

  //create
  const li = createDOMTaskItem(taskInput.value);

  taskList.appendChild(li);

  //Store in localStorage
  storeTaskInLocalStorage(taskInput.value);

  console.log(li);

  //clear input
  taskInput.value = "";

  e.preventDefault();
} //end addTask()

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// removeTask, event: click
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log(e.target);
    //target the 'li' to remove it
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      //remove from localStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }

  e.preventDefault();
} //end removeTask(e)

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  //gather tasks if there are any
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index) {
    if (task == taskItem.textContent) {
      tasks.splice(index, 1);
    }
  });

  //add remaining list back into the localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//clearTasks, event: click
function clearTasks(e) {
  // taskList.innerHTML = "";

  //faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  clearTasksFromLocalStorage();

  e.preventDefault();
}

function clearTasksFromLocalStorage() {
  localStorage.removeItem("tasks");
}

//filterTasks, event: keyup
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  //get all taskItems
  //querySelector returns an array
  document.querySelectorAll(".task-item").forEach(function(task) {
    //capture text from the li
    const item = task.firstChild.textContent;

    //if there's an index of the captured text, then display it
    //-> if the index is -1, then there's no index
    if (item.toLowerCase().indexOf(text) != -1) {
      //show; assumed to be the appropriate display before the filter
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });

  e.preventDefault();
}
