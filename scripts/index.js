const booksSection = document.querySelector('.books');
const form = document.querySelector('.form');
const books = document.createElement('div');
books.className = 'book-collection';
const allBooks = JSON.parse(localStorage.getItem('bookData')) || {};

form.addEventListener('submit', () => {
  const bookData = {
    book: form.elements.title.value,
    author: form.elements.author.value,
  };

  allBooks.push(bookData);
  localStorage.setItem('bookData', JSON.stringify(allBooks));
});

const displayData = () => {
  allBooks.forEach((e) => {
    const bookTitle = document.createElement('p');
    const authorName = document.createElement('p');
    const horizontalLine = document.createElement('hr');
    const remvoeButton = document.createElement('button');

    bookTitle.className = 'book-title';
    authorName.className = 'author-name';
    remvoeButton.className = 'remove';
    remvoeButton.textContent = 'Remove';
    bookTitle.textContent = e.book;
    authorName.textContent = e.author;
    books.append(bookTitle, authorName, remvoeButton, horizontalLine);
    booksSection.insertBefore(books, form);
  });
};

displayData();

const removeBook = (index) => {
  allBooks.splice(index, 1);
  window.localStorage.setItem('bookData', JSON.stringify(allBooks));
  for (let j = 0; j < allBooks.length; j += 1) {
    window.localStorage.setItem(j.toString(), JSON.stringify(allBooks[j]));
  }
  window.location.reload();
};

const removeButton = document.querySelectorAll('.remove');
for (let i = 0; i < allBooks.length; i += 1) {
  removeButton[i].addEventListener('click', removeBook);
}
