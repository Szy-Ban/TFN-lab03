import React from "react";
import Book from "./Book";

function BooksList({ books }) {
    function handleChange(e) {
    

    const filteredBooks =
        selectedCategory === "Wszystkie" ? books : books.filter(book => book.category === selectedCategory);


    }

    return (
        <article>
            <header>
                <h1>Best Books</h1>
                <div className="selectDiv">
                <select onClick={(e)=>handleChange(e.target.value)}>
                    <option value="Wszystkie"> Wszystkie</option>
                    {
                        books.map((book) => (
                            <option value={book.category}>{book.category}</option>
                        ))
                    }
                </select>
                </div>
            </header>
            <div className="books">
                {books.map((book, i) => (
                    <Book key={i} {...book} />
                ))}
            </div>
        </article>
    );
}

export default BooksList;
