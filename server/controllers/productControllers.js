const Product = require('../models/productModel');
const mongoose = require('mongoose')

// fetch all products

const fetchAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ message: 'Server Error' });
    }
};



// fetch single product
const fetchProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ product });
    } catch (err) {
        res.status(400).json({ message: 'Server Error' });
    }
};


// insert a product

const insertProduct = async (req, res) => {

    const { name, price, description, image, rating } = req.body;
    try {
        const product = Product.create({
            name,
            price,
            description,
            image,
            rating
        });
        res.status(200).json({ product });
    } catch (err) {
        res.status(400).json({ message: 'Server Error' });
    }
    res.json({ message: 'this is a single product' });

};

//delete a product by product_id

const deleteProduct = async (req, res) => {
    try {
        //delete by mongo db object _id
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Server Error' });
    }
};

//search a product by name and matches the letters even in uppercase or by phrase\
const searchProduct = async (req, res) => {
    try {
        const product = await Product.find({ name: { $regex: new RegExp(`${req.params.name}`, "i") } });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ product });
    } catch (err) {
        res.status(400).json({ message: 'Server Error' });
    }
};

module.exports = { fetchAllProducts, fetchProduct, insertProduct, deleteProduct, searchProduct };