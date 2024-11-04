// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {// this does not work // foreach does not return anything
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = myNums.filter((num) => num > 4); // callback function and then condition
// above function is doing an implecit return if i had used {} then i would have had to use return
console.log(newNums)

const newNums2 = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})
console.log(newNums2)


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

const userBooksHistory = books.filter( (book) => book.genre === "History")
console.log(userBooksHistory)

const userBooksAfter2000 = books.filter( (book) => { return book.publish > 2000})
console.log(userBooksAfter2000)

const userBooksAfter1995AndHistory = books.filter( (book) => { 
return book.publish > 1995 && book.genre === "History"
})
console.log(userBooksAfter1995AndHistory)