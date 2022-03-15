// index.js

import Book from './classes/book.js';
import Store from './classes/store.js';
import UI from './classes/ui.js';

// Events

document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event: Add book
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const titleI = document.querySelector('#new-title').value;
  const authorI = document.querySelector('#new-author').value;

  // Validate
  if (titleI === '' || authorI === '') {
    // console.log('title and author must not be empty!');
  } else {
    const books = Store.getBooks();
    const book = new Book(titleI, authorI);
    books.push(book);
    Store.setBooks(books);
    UI.addBookToUI(book);
  }
  document.querySelector('#new-title').value = '';
  document.querySelector('#new-author').value = '';
});

// Event: remove
document.querySelector('#bookList').addEventListener('click', (e) => {
  e.preventDefault();

  const classes = e.target.className;
  const classesArray = classes.split(' ');
  // console.log(classesArray);

  const ulList = document.querySelector('#bookList');
  const item2BeRemoved = e.target.parentElement;
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(item2BeRemoved);

  if (classesArray.indexOf('rmv') !== -1) {
    const books = Store.getBooks();
    books.splice(index, 1);
    Store.setBooks(books);
    item2BeRemoved.remove();
  }
});