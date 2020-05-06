const express = require('express');
const router = express.Router();
const authTolen = require('../middleware/auth');

const productController = require('../controllers/productController');

router.get('/:id',authTolen, productController.findProduct);

router.get('',authTolen, productController.getProducts);


router.post('',authTolen, productController.createProduct);

router.put('/:id',authTolen, productController.updatProduct);

router.delete('/:id',authTolen, productController.deleteProduct);

module.exports = router;
