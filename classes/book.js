export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  book2str() {
    const str = `Book --> title: ${this.title} author: ${this.author}`;
    return str;
  }
}