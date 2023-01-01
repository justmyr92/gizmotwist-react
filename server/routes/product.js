const express = require('express');

const router = express.Router();

const { fetchAllProducts, fetchProduct, insertProduct, deleteProduct, searchProduct } = require('../controllers/productControllers');

//router to print a message
router.get('/', (req, res) => {
    res.json({ message: 'this is a single product' });
});

//route to get all products
router.get('/fetchAllProducts', fetchAllProducts);


//route to get a single product
router.get('/fetchProduct/:id', fetchProduct);

//route to insert a product
router.post('/insertProduct', insertProduct);

//route to delete a product

router.delete('/deleteProduct/:id', deleteProduct);

//route to search a product
router.get('/searchProduct/:name', searchProduct);

module.exports = router;
