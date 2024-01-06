let books = [
    {
        author: "Chetan Bhagat",
        bookName: "Making India Awesome",
        year: 2019
    },
    {
        author: "Chetan Bhagat",
        bookName: "Half Girlfriend",
        year: 2011
    },
    {
        author: "Jhumpa Lahiri",
        bookName: "The Namesake",
        year: 2010,
    },
    {
        author: "Arundhati Roy",
        bookName: "The God of Small Things",
        year: 1997,
    },
    {
        author: "Vikram Seth",
        bookName: "A Suitable Boy",
        year: 1993,
    },
];

let filerBook = books.filter((book) => {
    return book.year >= 2010
});

let newArray = filerBook.map((element) => {
    return {
        author: element.author.toUpperCase(),
        bookName: element.bookName,
        year: element.year
    }
});

console.log(newArray);

/*  OUTPUT
    [
        { author: 'CHETAN BHAGAT', bookName: 'Making India Awesome', year: 2019 },
        { author: 'CHETAN BHAGAT', bookName: 'Half Girlfriend', year: 2011 },
        { author: 'JHUMPA LAHIRI', bookName: 'The Namesake', year: 2010 }
    ]
 */