class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
  }

  clearFields() {

  }

  showPosts(posts) {
    let output = "";

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id=${post.id}>
              <i class="fa fa-pencil"></i>
            </a>

            <a href="#" class="delete card-link" data-id=${post.id}>
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    //create div
    const div = document.createElement("div");
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));

    //get parent
    const container = document.querySelector(".postsContainer");

    //get posts
    const posts = document.querySelector("#posts");

    //insert alert div right before the '#posts' section
    container.insertBefore(div, posts);

    //timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  //Change form state
  changeFormState(type) {
    if (type == 'edit') {
      this.postSubmit.textContent = "Update Post";
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      //create cancel button
      const cancelButton = document.createElement("button");
      cancelButton.className = "update-cancel btn btn-light btn-block";
      cancelButton.appendChild(document.createTextNode("Cancel Edit"));

      //get parent
      const cardForm = document.querySelector(".card-form");

      //last element in '.card-form'
      const formEnd = document.querySelector(".form-end");

      cardForm.insertBefore(cancelButton, formEnd);
    } else {
      this.postSubmit.textContent = "post It";
      this.postSubmit.className = "post-submit btn btn-primary btn-block";

      //remove cancel button
      if (document.querySelector(".update-cancel")) {
        document.querySelector(".update-cancel").remove();
      }
      this.clearIdInput();
      this.clearFields();
    }
  }

  clearIdInput() {
    this.idInput.value = "";
  }

}

export const ui = new UI();