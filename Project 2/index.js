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

//Add submit event listener to AddBookButton

let addBtn = document.getElementById("AddBook");
addBtn.addEventListener("click", (event) => {
  let bookName = document.getElementById("bookName");
  let bookAuthor = document.getElementById("bookAuthor");
  let bookCategory = document.getElementById("bookCategory");
  console.log(bookName.value);
  console.log(bookAuthor.value);
  console.log(bookCategory.value);
  let book = new Book(bookName.value, bookAuthor.value, bookCategory.value);
  console.log(book);
  let display = new Display(book);
  display.addToUI(book);
  display.clear();
  event.preventDefault();
});

function addBook(e) {}
