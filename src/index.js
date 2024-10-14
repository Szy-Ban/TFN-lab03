import React from "react";
import { createRoot } from "react-dom/client";
import data from "./data/books.json";
import BooksList from "./components/BooksList";
import './styles.css'

const root = createRoot(document.getElementById("root"))
root.render(<BooksList books={data}/>)
