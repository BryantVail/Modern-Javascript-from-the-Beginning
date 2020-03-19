// 10_Keyboard-and-Input-Events

const form = document.querySelector('#task-form');
const taskInput = document.querySelector("#task");
const heading = document.querySelector('h5');
const select = document.querySelector('#selectorList')

form.addEventListener('submit', runEvent);

//clear input
taskInput.value = '';

//keydown
// taskInput.addEventListener('keydown', runEvent);

//keyup
// taskInput.addEventListener('keyup', runEvent);

//keypress
// taskInput.addEventListener('keypress', runEvent);

//focus
// taskInput.addEventListener('focus', runEvent);

//blur; opposite of focus or leaving an element
// taskInput.addEventListener('blur', runEvent);

//cut
// taskInput.addEventListener('cut', runEvent);

//paste
// taskInput.addEventListener('paste', runEvent);

//input; fires on all input actions
// taskInput.addEventListener('input', runEvent);

//change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(taskInput.value);
  
  
  console.log(`EVENT TYPE: ${e.type}`);
  // e.preventDefault();

  console.log(e.target.value);
  //capture current value by using the event's target
  // heading.innerText = e.target.value;


}











