const express = require('express');
const BookController = require('./BookController');
const { authenticate } = require('../middleware/auth.js');

const router = express.Router();
const bookController = new BookController();

router.post('/', authenticate, bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', authenticate, bookController.updateBook);
router.delete('/:id', authenticate, bookController.deleteBook);

module.exports = router;