import {createRoot} from "react-dom/client";
import BooksList from "./BooksList";
import React from "react";

function render2(books){
    const root = createRoot(document.getElementById("root"))
    root.render(<BooksList books={books}/>)
}

export default render2;