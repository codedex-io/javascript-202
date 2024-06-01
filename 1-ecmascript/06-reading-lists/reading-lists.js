// Reading Lists 📖
// Codédex

const goodreadsInfo = {
  read: [
    {
      title: "Make It Stick",
      author: "Peter C. Brown, Henry Roediger, & Mark McDaniel"
    }
  ],

  currentlyReading: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien"
    }
  ],

  wantToRead: [
    {
      title: "The Art of Language Invention",
      author: "David Peterson"
    }
  ]
}

const addNewBook = (books, ...additionalBookObjects) => {
  return [...books, ...additionalBookObjects];
}

goodreadsInfo.read = addNewBook(goodreadsInfo.read, { title: "Zero to One", author: "Peter Thiel"});
goodreadsInfo.currentlyReading = addNewBook(goodreadsInfo.currentlyReading, { title: "The Two Towers", author: "J.R.R. Tolkien" }, { title: "The MOM Test", author: "Rob Fitzpatrick"});
goodreadsInfo.wantToRead = addNewBook(goodreadsInfo.wantToRead, { title: "Looking for Alaska", author: "John Green"});

const showGoodreadsInfo = (info) => {
  const { read, currentlyReading, wantToRead } = info;

  console.log("Read:");
  for (let i = 0; i < read.length; i++) {
    console.log(`${read[i].title} by ${read[i].author}`)
  }
  
  console.log();
  console.log("Currently Reading:");
  for (let i = 0; i < currentlyReading.length; i++) {
    console.log(`${currentlyReading[i].title} by ${currentlyReading[i].author}`)
  }

  console.log();
  console.log("Want to Read:");
  for (let i = 0; i < wantToRead.length; i++) {
    console.log(`${wantToRead[i].title} by ${wantToRead[i].author}`)
  }
}

showGoodreadsInfo(goodreadsInfo);