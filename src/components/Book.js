import React from "react";

function Book({title, author, category, description }) {
    return (
        <section>
            <h1>{title}</h1>
            <p>Autor - {author}</p>
            <p>Gatunek - {category}</p>
            <p>Opis - {description}</p>
        </section>
    );
}

export default Book;
