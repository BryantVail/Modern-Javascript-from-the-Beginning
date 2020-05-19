import { http } from './Http';
import { ui } from './ui';

const baseUrl = 'http://localhost:3000/posts';

//EVENT LISTENERS
//EVENT LISTENERS
//EVENT LISTENERS

//Get posts on DOM Load
document.addEventListener('DOMContentLoaded', getPosts);

//Add Post
document.querySelector(".post-submit").addEventListener("click", submitPost);

//Edit Post
document.querySelector("#posts").addEventListener("click", enableEdit);

//Delete Post
document.querySelector("#posts").addEventListener('click', deletePost);

//Cancel
document.querySelector(".card-form").addEventListener("click", cancelEdit);

//FUNCTIONS
//FUNCTIONS
//FUNCTIONS

//Get
function getPosts() {

  //returns a promise
  http.get(`${baseUrl}`)
    .then(data => ui.showPosts(data))
    .catch(e => console.log(e));
  ui.clearFields();

}

//Add post
function submitPost() {
  //get data from ui
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector("#id").value;

  const data = {
    title: title,
    body: body
  };

  //validate input fields
  if (title == "" || body == "") {
    ui.showAlert("Please fill in all fields", "alert alert-danger");
  } else {
    //check for id; check to see if its in 'update' state
    if (id == "") {
      //create post
      http.post(`${baseUrl}`, data)
        .then(data => {
          ui.showAlert("Post Added", 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch(e => console.log(e));
    }//end (id == "")
    else {
      // update post 
      http.put(`${baseUrl}/${id}`, data)
        .then(data => {
          ui.showAlert('Post Updated', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
        })
    }
  }

  e.prevent
}//end addPost

//Edit Post
function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    };

    //fill form
    ui.fillForm(data);

  }
  e.preventDefault();
}

function cancelEdit(e) {
  if (e.target.classList.contains('update-cancel')) {
    ui.changeFormState('add');
  }
  e.preventDefault();
}

//Delete Post
function deletePost(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are You Sure?")) {
      http.delete(`${baseUrl}`, id)
        .then(data => {
          ui.showAlert("Post Removed", 'alert alert-success');
          getPosts();
        })
        .catch(e => console.log(e));
    }
  }
  e.preventDefault();
}






















