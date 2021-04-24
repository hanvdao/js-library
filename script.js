let myLibrary = [
  // { title: "Hello", author: "Han", pages: 432, isRead: true },
  // { title: "Book2", author: "Dao", pages: 264, isRead: false },
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const title = document.getElementById("title-input").value;
  const author = document.getElementById("author-input").value;
  const pages = document.getElementById("pages-input").value;
  const status = document.getElementById("status-input").checked;

  //console.log(status);
  myLibrary.push(new Book(title, author, pages, status));
  displayLibrary();
}

const bookContainer = document.querySelector(".book-container");
const newBookButton = document.querySelector(".new-book-btn");
const formDiv = document.querySelector(".form-popup");
const addButton = document.querySelector(".add-btn");
newBookButton.addEventListener("click", openForm);
addButton.addEventListener("click", addBookToLibrary);
//formDiv.addEventListener("submit", addBookToLibrary);

//addBookToLibrary("Book3", "Trieu", 342, true);
function displayLibrary() {
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    const titleSpan = document.createElement("h2");
    titleSpan.textContent = book.title;
    bookDiv.appendChild(titleSpan);

    const authorSpan = document.createElement("h3");
    authorSpan.textContent = book.author;
    bookDiv.appendChild(authorSpan);

    const pagesSpan = document.createElement("h3");
    pagesSpan.textContent = book.pages;
    bookDiv.appendChild(pagesSpan);

    const statusSpan = document.createElement("h3");
    statusSpan.textContent = book.isRead;
    bookDiv.appendChild(statusSpan);

    bookContainer.appendChild(bookDiv);
  });
}

function openForm() {
  formDiv.style.display = "block";
}

function closeForm() {
  formDiv.style.display = "none";
}
