console.log("hello world");

// Constructor

function Book(name, author, category) {
  this.name = name;
  this.author = author;
  this.category = category;
}

// Display Constructor
function Display() {}

//Add method to display prototype
Display.prototype.addToUI = function (book) {
  let bookTemplate = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.category}</td>
  </tr>`;
  document.getElementById("tableBody").innerHTML += bookTemplate;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

Display.prototype.validate = function (book) {
  if (
    book.name.length < 2 ||
    book.author.length < 2 ||
    book.category.length < 2
  ) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (message) {
  let parent = document.getElementById("customNavbar");
  // parent.removeChild(parent.lastChild);
  let className = message === "Success" ? "alert-success" : "alert-danger";
  let message2 =
    message === "Success"
      ? "Book has been added successfully!"
      : "Invalid Input!";
  let div = document.createElement("div");
  div.innerHTML = `<div class="alert ${className} alert-dismissible" role="alert">
                      <strong> ${message} : </strong> ${message2}
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>`;
  parent.insertBefore(div, parent.lastElementChild.nextSibling);
  setTimeout(() => {
    div.innerHTML="";
  }, 2000);
};

//Add submit event listener to AddBookButton

let addBtn = document.getElementById("AddBook");
addBtn.addEventListener("click", (event) => {
  let bookName = document.getElementById("bookName");
  let bookAuthor = document.getElementById("bookAuthor");
  let bookCategory = document.getElementById("bookCategory");
  // console.log(bookName.value);
  // console.log(bookAuthor.value);
  // console.log(bookCategory.value);
  let book = new Book(bookName.value, bookAuthor.value, bookCategory.value);
  console.log(book);
  let display = new Display(book);

  if (display.validate(book)) {
    display.addToUI(book);
    display.clear();
    display.show("Success");
  } else {
    display.show("Error");
  }

  event.preventDefault();
});

function addBook(e) {}
