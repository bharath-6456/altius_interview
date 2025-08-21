const express = require('express');
const ProductController = require('./ProductController');
const { authenticate } = require('../middleware/auth.js');

const router = express.Router();
const productController = new ProductController();

router.post('/', authenticate, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', authenticate, productController.updateProduct);
router.delete('/:id', authenticate, productController.deleteProduct);

module.exports = router;