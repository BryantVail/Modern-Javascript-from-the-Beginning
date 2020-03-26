//06_OOP-Book-List-Project

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UIBookList {
  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    //create table row
    const row = document.createElement("tr");

    //create table data
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;

    //add new book to the list
    list.appendChild(row);
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;

    //add text
    div.appendChild(document.createTextNode(message));

    //get parent
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    //insert alert
    container.insertBefore(div, form);

    // disappear after 3000ms
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static deleteBook(target) {
    if (target.classList.contains("delete")) {
      // a > td > tr
      target.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

//localStorage class
class StorageBooks {
  static getBooks() {
    let books;

    if (localStorage.getItem("books") === null) {
      let books = [];
      return books;
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static displayBooks() {
    const books = StorageBooks.getBooks();

    books.forEach(function(book) {
      UIBookList.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = StorageBooks.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(book) {
    let books = StorageBooks.getBooks();

    // loop through to match the isbn
    books.forEach(function(bookFromList, index) {
      if (bookFromList.isbn === book.isbn) {
        //remove item from index, only remove 1 value
        books.splice(index, 1);
      }
      localStorage.setItem("books", JSON.stringify(books));
    });
  }

  static clearBooks() {
    localStorage.removeItem("books");
  }
}

//EVENT LISTENERS
document.querySelector("#book-form").addEventListener("submit", function(e) {
  //get form values
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

  const book = new Book(title, author, isbn);
  console.log(book);

  //validate form fields
  if (title === "" || author === "" || isbn === "") {
    UIBookList.showAlert("Please enter data in all relevant fields", "error");
  } else {
    UIBookList.addBookToList(book);
    //pass in book object
    StorageBooks.addBook(book);
    UIBookList.showAlert("Book Added", "Success");
    UIBookList.clearFields();
  }

  e.preventDefault();
});

//delete book
//-> delegate
document.querySelector("#book-list").addEventListener("click", function(e) {
  //pass in the target to delete at the parent level
  const row = e.target.parentElement.parentElement;
  // get td elements from row
  const tableDatas = row.querySelectorAll("td");
  // retrieve attributes from tableDatas
  const title = tableDatas[0].textContent;
  const author = tableDatas[1].textContent;
  const isbn = tableDatas[2].textContent;
  const book = new Book(title, author, isbn);
  UIBookList.deleteBook(e.target);
  StorageBooks.removeBook(book);
  UIBookList.showAlert("Book Removed", "Success");

  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function() {
  StorageBooks.displayBooks();
});
