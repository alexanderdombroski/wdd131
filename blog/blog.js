const articles = [
    {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description:
        "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
    },
    {
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description:
        "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc:
        "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
    }
];

(function loadBooks(booksDicts) {
    const detailsSection = document.getElementById("book-details")
    const summarySection = document.getElementById("book-info")
    booksDicts.forEach(bookInfo => {
        detailsSection.innerHTML +=
        `<article role="article">
            <h2>${bookInfo["date"]}</h2>
            <h3>${bookInfo["ages"]}</h3>
            <h3>${bookInfo["genre"]}</h3>
            <h3>${bookInfo["stars"]}</h3>
        </article>`;
        
        summarySection.innerHTML += 
        `<article role="article">
            <h1>${bookInfo["title"]}</h1>
            <img src="${bookInfo["imgSrc"]}" alt="${bookInfo["imgAlt"]}">
            <p>${bookInfo["description"]}<button>Read More...</button></p>
        </article>`;
    });
})(articles);