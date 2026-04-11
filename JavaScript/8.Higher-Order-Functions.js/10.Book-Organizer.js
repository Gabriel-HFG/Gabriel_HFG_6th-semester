let books = [
  {
    title: "test",
    authorName: "test test",
    releaseYear: 1000,
  },
  {
    title: "test2",
    authorName: "test test2",
    releaseYear: 4000,
  },
  {
    title: "test3",
    authorName: "test test3",
    releaseYear: 3000,
  },
]

function sortByYear(book1,book2) {
  if (book1.releaseYear < book2.releaseYear) {return -1}
  if (book1.releaseYear > book2.releaseYear) {return 1}
  else {return 0}
}

let filteredBooks = books.filter(book => book.releaseYear <= 1950)
filteredBooks.sort(sortByYear)

console.log(filteredBooks)
