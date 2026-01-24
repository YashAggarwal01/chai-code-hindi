const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//user want all book of history



user_books=books.filter((book_in)=>book_in.genre==='History')
console.log(user_books);
console.log("=====================");
//user want all books having edition >200
user_books1=books.filter((in_book)=>in_book.publish>=2000)
console.log(user_books1);
console.log("=====================");
//user want books of history and 1995 edition
user_books2=books.filter((in_buk)=>{
    return in_buk.genre=='history' && in_buk.publish>=1995
})

console.log(user_books2);

