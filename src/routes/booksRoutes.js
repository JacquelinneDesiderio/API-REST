// create route
import { Router } from "express";
import { getBooks, getBookById, addNewBook, deleteBook, updateBook } from "../controllers/booksController";
const router = Router();


// get all books
router.get('/books', getBooks)

// get by ID book
router.get('/books/:id', (req, res) => {
    getBookById(req.params.id, function (result) {
        res.send(result);
    });
});

// create a new book
router.post('/books', addNewBook, function (req, res) {
    var data = req.body;
    const newBook = {
        nombre: data.nombre,
        autor: data.autor,
        editorial: data.editorial, 
        edicion: data.edicion
        }
// console.log(data.nombre);
    res.json(newBook)
});

// delete book
router.delete('/books/:id', (req, res) => {
    deleteBook(req.params.id, function (result) {
        res.send(result);
    });
});


// update book
router.put('/books/:id', addNewBook, function (req, res) {
    var data = req.body;
    const newBook = {
        nombre: data.nombre,
        autor: data.autor,
        editorial: data.editorial, 
        edicion: data.edicion
        }
// console.log(data.nombre);
    res.json(newBook)
});


export default router
