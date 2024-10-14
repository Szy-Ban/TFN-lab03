import React from "react";
import Book from "./Book";
import {createRoot} from "react-dom/client";
import data from "../data/books.json";
import render2 from "./utils";

function BooksList({ books }) {

    function handleChange(selectedCategory) {


    const filteredBooks =
        selectedCategory === "Wszystkie" ? basicBooks : books.filter(book => book.category === selectedCategory);

        render2(filteredBooks);
    }


    return (
        <article>
            <header>
                <h1>Best Books</h1>
                <div className="selectDiv">
                <select onChange={(e)=>handleChange(e.target.value)}>
                    <option value="Wszystkie"> Wszystkie</option>
                    {
                        // data.map((obj) => (
                        //     obj.category
                        // ))
                        data.map((book) => (
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