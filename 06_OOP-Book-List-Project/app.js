// 06_OOP-Book-List-Project

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.showAlert = function(message, className) {
  //create div
  const div = document.createElement("div");
  div.className = `alert ${className}`;

  //add text
  div.appendChild(document.createTextNode(message));

  //get parent
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  //insert alert
  container.insertBefore(div, form);

  // timeout
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
};

// clearFields()
UI.prototype.clearFields = function() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
};

UI.prototype.deleteBookFromList = function(target) {
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
};

UI.prototype.addBookToList = function(book) {
  const list = document.querySelector("#book-list");
  const ui = new UI();
  // create table row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);

  ui.showAlert("Book Added", "success");
};

// Event Listeners
document.querySelector("#book-form").addEventListener("submit", function(e) {
  console.log("test");

  //get form values
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  //instantiate book
  const book = new Book(title, author, isbn);
  console.log(book);

  // instantiate UI
  const ui = new UI();

  // Validate Form Fields
  if (title === "" || author === "" || isbn === "") {
    // alert("please enter data in all fields");
    ui.showAlert("please enter data in all fields", "error");
  } else {
    // add book to list
    ui.addBookToList(book);
    ui.clearFields();
  }

  e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBookFromList(e.target);
  ui.showAlert("Book Removed", "success");

  e.preventDefault();
});
