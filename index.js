// index.js

import Book from './classes/book.js';
import Store from './classes/store.js';
import UI from './classes/ui.js';

// Events

document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event: Add book
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values inputs 
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

const menuList = document.querySelector('.menu-item1');
const menuAdd = document.querySelector('.menu-item2');
const menuContact = document.querySelector('.menu-item3');
const listSection = document.querySelector('.primaryContent');
const formSection = document.querySelector('.forForm');
const contactSection = document.querySelector('.contact');
let theDate = new Date();
document.querySelector('.date').innerHTML = theDate;

menuList.addEventListener('click', () => {
  if (listSection.classList.contains('none')) {
    listSection.classList.remove('none');
    if (formSection.classList.contains('none')) {
      contactSection.classList.add('none');
    }
    else {
      formSection.classList.add('none');
    }
  }
});

menuAdd.addEventListener('click', () => {
  if (formSection.classList.contains('none')) {
    formSection.classList.remove('none');
    if (listSection.classList.contains('none')) {
      contactSection.classList.add('none');
    }
    else {
      listSection.classList.add('none');
    }
  }
});

menuContact.addEventListener('click', () => {
  if (contactSection.classList.contains('none')) {
    contactSection.classList.remove('none');
    if (listSection.classList.contains('none')) {
      formSection.classList.add('none');
    }
    else {
      listSection.classList.add('none');
    }
  }
});