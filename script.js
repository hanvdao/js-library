let myLibrary = [
  // { title: "Hello", author: "Han", pages: 432, isRead: true },
  // { title: "Book2", author: "Dao", pages: 264, isRead: false },
];

let bookDivs = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(event) {
  event.preventDefault();

  const title = document.getElementById("title-input").value;
  const author = document.getElementById("author-input").value;
  const pages = document.getElementById("pages-input").value;
  const status = document.getElementById("status-input").checked;

  if (title == "" || author == "" || pages == 0) {
    if (event.submitter.classList[0] != "close-btn") {
      alert("Please complete all fields.");
      return;
    }
    return;
  }

  const book = new Book(title, author, pages, status);
  myLibrary.push(book);

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book-div");

  const titleSpan = document.createElement("h1");
  titleSpan.textContent = title;
  bookDiv.appendChild(titleSpan);

  const authorSpan = document.createElement("h3");
  authorSpan.textContent = `By ${author}`;
  bookDiv.appendChild(authorSpan);

  const pagesSpan = document.createElement("h3");
  pagesSpan.textContent = `${pages} pages`;
  bookDiv.appendChild(pagesSpan);

  const statusBox = document.createElement("input");
  statusBox.setAttribute("type", "checkbox");
  if (status) statusBox.setAttribute("checked", status);
  statusBox.setAttribute("id", "status-box");
  statusBox.addEventListener("change", () => {
    book.status = statusBox.checked;
  });
  const statusDiv = document.createElement("div");
  statusDiv.classList.add("status-div");
  const statusText = document.createElement("h3");
  statusText.textContent = "Mark as read:";
  statusDiv.appendChild(statusText);
  statusDiv.appendChild(statusBox);

  bookDiv.appendChild(statusDiv);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    let index = myLibrary.indexOf(book);
    myLibrary = myLibrary.filter((item) => item != book);
    bookDivs.splice(index, 1);
    displayLibrary();
  });
  bookDiv.appendChild(deleteButton);

  bookDivs.push(bookDiv);

  displayLibrary();
  form.reset();
  closeForm();
}

const bookContainer = document.querySelector(".book-container");
const newBookButton = document.querySelector(".new-book-btn");
const formDiv = document.querySelector(".form-popup");
newBookButton.addEventListener("click", openForm);

const form = document.getElementById("form");
form.addEventListener("submit", addBookToLibrary);

function displayLibrary() {
  bookContainer.innerHTML = "";
  bookDivs.forEach((div) => {
    bookContainer.appendChild(div);
  });
}

function openForm() {
  formDiv.style.display = "block";
}

function closeForm() {
  formDiv.style.display = "none";
}
