const books = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        id: 4,
        title: "Warriors: Into the Wild",
        date: "Jan 21 2003",
        description: "Fierce cat tribes battle each other. What will the young housecat do with his new tribe?",
        imgSrc: "https://m.media-amazon.com/images/I/51QcwzCyolL.jpg",
        imgAlt: "Book cover for Warriors: Into the Wild",
        ages: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function filterBooks(filterID, dataField) {
    document.querySelectorAll(`select:not(#${filterID})`).forEach(select => select.value = "none");

    const stars = document.getElementById(filterID);
    if (stars.value !== "none") {
        let filteredBooks = books.filter(article => article[dataField] === stars.value);
        loadBooks(filteredBooks)
    } else {
        loadBooks(books)
    }
}

const filterBooksByStars = () => filterBooks("star-dropdown", "stars");
const filterBooksByAge = () => filterBooks("age-dropdown", "ages");

function loadBooks(books) {
    const detailsSection = document.getElementById("book-details")
    detailsSection.innerHTML = ""
    books.forEach(bookInfo => {
        detailsSection.innerHTML +=
        `<article>
            <div class="book-data">
                <h2>${bookInfo["date"]}</h2>
                <h3>${bookInfo["ages"]}</h3>
                <h3>${bookInfo["genre"]}</h3>
                <h3>${bookInfo["stars"]}</h3>
            </div>
            <div role="article" class="book-summary">
                <h1>${bookInfo["title"]}</h1>
                <img src="${bookInfo["imgSrc"]}" alt="${bookInfo["imgAlt"]}">
                <p>${bookInfo["description"]}<button>Read More...</button></p>
            </div>
        </article>`;
    });
}

loadBooks(books);

console.log("hello")