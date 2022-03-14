const booksSection = document.querySelector('.books');

let books = [
  {
    title: 'First Book',
    author: 'First Author',
  },
  {
    title: 'Second Book',
    author: 'Second Author',
  },
];

function newObject(bookTitle, bookAuthor) {
  books[books.length] = {
    title: bookTitle,
    author: bookAuthor,
  }
}

function deleteObject(n) {
  books.splice(n, 1);
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