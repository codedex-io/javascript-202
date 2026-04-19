// Reading Lists 📖
// Codédex

const goodreadsInfo = {
  currentlyReading: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
    },
  ],

  wantToRead: [
    {
      title: "The Art of Language Invention",
      author: "David Peterson",
    },
  ],
};

const addNewBook = (books, ...additionalBookObjects) => {
  return [...books, ...additionalBookObjects];
};

goodreadsInfo.currentlyReading = addNewBook(
  goodreadsInfo.currentlyReading,
  { title: "The Two Towers", author: "J.R.R. Tolkien" },
  { title: "The MOM Test", author: "Rob Fitzpatrick" }
);
goodreadsInfo.wantToRead = addNewBook(goodreadsInfo.wantToRead, {
  title: "Looking for Alaska",
  author: "John Green",
});

const showGoodreadsInfo = (info) => {
  const currentlyReading = info.currentlyReading;
  const wantToRead = info.wantToRead;

  console.log("Currently Reading:");
  for (let book of currentlyReading) {
    console.log(`${book.title} by ${book.author}`);
  }

  console.log();
  console.log("Want to Read:");
  for (let book of wantToRead) {
    console.log(`${book.title} by ${book.author}`);
  }
};

showGoodreadsInfo(goodreadsInfo);
