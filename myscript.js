const booksSection = document.querySelector('.books');
let newBooks = [];
let books = [
  {
    title: 'First Book',
    author: 'First Author',
  },
  {
    title: 'Second Book',
    author: 'Second Author',
  },
  {
    title: 'Third Book',
    author: 'Third Author',
  },
];

if (window.localStorage.getItem('bookArray') !== null) {
  let array = JSON.parse(window.localStorage.getItem('bookArray'));
  for (let m = 0; m < array.length; m += 1) {
  newBooks[m] = JSON.parse(window.localStorage.getItem(m.toString()));
}
  books = newBooks;
}

function newObject(bookTitle, bookAuthor) {
  books[books.length] = {
    title: bookTitle,
    author: bookAuthor,
  }
}

function deleteObject(n) {
  books.splice(n, 1);
  window.localStorage.setItem('bookArray', JSON.stringify(books));
  for (let k = 0; k < books.length; k += 1) {
    window.localStorage.setItem(k.toString(), JSON.stringify(books[k]));
  }
  location.reload();
}

function displayObject(n) {
  return `  
    <div class="title">${books[n].title}</div>
    <div class="author">${books[n].author}</div>
    <button type="button" class="remove">Remove</button>
    <hr>
  `;
}

for (let i = 0; i < books.length; i += 1) {
  let newElement = document.createElement('section');
  newElement.innerHTML = displayObject(i);
  booksSection.appendChild(newElement);
}

for (let j = 0; j < books.length; j += 1) {
  let removeButton = document.querySelectorAll('.remove');
  removeButton[j].addEventListener('click', function() {deleteObject(j);});
}

const form = document.getElementById('form');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const add = document.getElementById('add');
let newBook = {
  title: '',
  author: '',
}

add.addEventListener('click', function() {
  newBook.title = newTitle.value;
  newBook.author = newAuthor.value;

  books[books.length] = newBook;

  window.localStorage.setItem('bookArray', JSON.stringify(books));
  for (let k = 0; k < books.length; k += 1) {
    window.localStorage.setItem(k.toString(), JSON.stringify(books[k]));
  }
})

window.localStorage.clear();

window.localStorage.setItem('bookArray', JSON.stringify(books));
for (let k = 0; k < books.length; k += 1) {
  window.localStorage.setItem(k.toString(), JSON.stringify(books[k]));
}