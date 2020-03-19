// 08_Event-Listeners-and-the-Event-Object

// document.querySelector('.clear-tasks').addEventListener('click', 
//   function(e){ //event object
//     console.log('hello world');

//     e.preventDefault();
// });


document.querySelector('.clear-tasks').addEventListener('click', onClick);

//3:56mins
// function onClick(e){
//   e.preventDefault();
//   console.log('clicked');
// }

function onClick(e){

  e.preventDefault();
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  
  e.target.innerText = 'Hello';

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;

  // coords event relative to the window
  val = e.clientY; //clientY value of the event
  val = e.clientX; //clientX value of the event

  //coords relative to the element
  val = e.offsetY; 
  val = e.offsetX;

  console.log(val);
}



