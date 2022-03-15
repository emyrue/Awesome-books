// store class: encapsulates all the locacl storage related functions
export default class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static setBooks(books) {
    if (books.length > 0) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
}