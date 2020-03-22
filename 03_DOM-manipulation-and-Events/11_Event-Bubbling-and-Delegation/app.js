//11_Event-Bubbling-and-Delegation

//default is bubbling up
// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card content");
// });

// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function() {
//   console.log("col");
// });

// EVENT DELEGATION

// const deleteItem = document.querySelector(".delete-item");
// deleteItem.addEventListener("click", delItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  console.log(e.target);

  //must have full className
  //extra classes that are added don't work well with this pattern
  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete item");
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete-item");
    e.target.parentElement.parentElement.remove();
  }
}

//event delegation:
//  putting the listener on a parent, then using a conditional to find the right target & doing functionality there.
