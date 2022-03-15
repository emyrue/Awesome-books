class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
  
class Array {
  constructor() {
    this.books = [];
  }

  add(book) {
    this.books[this.books.length] = book;
  }

  delete(index) {
    this.books.splice(index, 1);
    window.localStorage.setItem('bookArray', JSON.stringify(this.books));
    for (let i = 0; i < this.books.length; i += 1) {
      window.localStorage.setItem(i.toString(), JSON.stringify(this.books[i]));
    }
    window.location.reload();
  }

  checkStorage() {
    if (window.localStorage.getItem('bookArray') !== null) {
      const newBooks = [];
      const array = JSON.parse(window.localStorage.getItem('bookArray'));
      for (let j = 0; j < array.length; j += 1) {
        newBooks[j] = JSON.parse(window.localStorage.getItem(j.toString()));
      }
      this.books = newBooks;
    }
  }

  store() {
    window.localStorage.setItem('bookArray', JSON.stringify(this.books));
    for (let i = 0; i < this.books.length; i += 1) {
      window.localStorage.setItem(i.toString(), JSON.stringify(this.books[i]));
    }
  }

  display(index) {
    return `  
      <div class="title">${this.books[index].title}</div>
      <div class="author">${this.books[index].author}</div>
      <button type="button" class="remove">Remove</button>
      <hr>
    `;
  }
}
  
const booksSection = document.querySelector('.books');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const add = document.getElementById('add');
let book1 = new Book('First Book', 'First Author');
let book2 = new Book('Second Book', 'Second Author');
let book3 = new Book('Third Book', 'Third Author');
let bookList = new Array();
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.checkStorage();

for (let k = 0; k < bookList.books.length; k += 1) {
  const newElement = document.createElement('section');
  newElement.innerHTML = bookList.display(k);
  booksSection.appendChild(newElement);
}

for (let i = 0; i < bookList.books.length; i += 1) {
  const removeButton = document.querySelectorAll('.remove');
  removeButton[i].addEventListener('click', () => { 
    bookList.delete(i);
  });
}

add.addEventListener('click', () => {
  bookList.add(new Book(newTitle.value, newAuthor.value));
  bookList.store();
});  