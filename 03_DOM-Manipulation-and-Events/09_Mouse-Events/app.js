// 09_Mouse-Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('#task-title')

//click
// clearBtn.addEventListener('click', runEvent);
// doubleClick
// clearBtn.addEventListener('dblclick', runEvent);
// mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// mouseenter
// clearBtn.addEventListener('mouseenter', runEvent);
// mouseleave
// clearBtn.addEventListener('mouseleave', runEvent);
// mouseover
// clearBtn.addEventListener('mouseover', runEvent);
// mouseout
// clearBtn.addEventListener('mouseout', runEvent);
// mousemove
card.addEventListener('mousemove', runEvent);





//event handler
function runEvent(e){
  e.preventDefault();

  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}








