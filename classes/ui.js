// UI class: ecampsulates all methods related to displayin info

import Store from './store.js';
// import Book from './book.js';

export default class UI {
  static addBookToUI(book) {
    const list = document.querySelector('#bookList');
    const item = document.createElement('li');
    const pTitle = document.createElement('p');
    pTitle.textContent = book.title;
    const pAuthor = document.createElement('p');
    pAuthor.textContent = book.author;
    const rmvBtn = document.createElement('button');
    rmvBtn.textContent = 'Remove';
    rmvBtn.className = 'rmv';

    item.appendChild(pTitle);
    item.appendChild(pAuthor);
    item.appendChild(rmvBtn);

    list.appendChild(item);
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => this.addBookToUI(book));
  }
}