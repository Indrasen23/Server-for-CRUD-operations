import express from 'express'
const router = express.Router()
import ProductItem from '../models/ProductsItem.js';


// POST route to add a product
router.post('/api/createProduct', async (req, res) => {
    try {
        const data = req.body;
        const newProduct = new ProductItem(data);

        // Save the new product to the database
        const response = await newProduct.save();
        console.log('Product saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Internal Server Error, could not save the product' });
    }
})


// GET method to get the product
router.get('/api/getProduct', async (req, res) => {
    try {
        const data = await ProductItem.find();
        console.log('Product fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error, Can not fetch Product' });
    }
})


router.get('/api/getProduct/:vendor', async (req, res) => {
    try {

        const vendor = req.params.vendor;
        if (vendor == 'Puma' || vendor == 'Lewis' || vendor == 'Nike' || vendor == 'Trends' || vendor == 'Myntra' || vendor == 'Other') {

            const response = await MenuItem.find({ vendor: vendor });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Invalid vendor type" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.put('/api/updateProduct/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updateProductData = req.body;

        const response = await ProductItem.findByIdAndUpdate(productId, updateProductData, {
            new: true,  // Return the updated document
            runValidators: true,  // Run Mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Product not found' });
        }

        console.log('Product updated');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error, Can not fetch Product' });
    }
})

router.delete('/api/deleteProduct/:id', async (req, res) => {
    try {
        const productId = req.params.id;

        const response = await ProductItem.findByIdAndDelete(productId);
        if (!response) {
            res.status(404).json({ error: 'Product not found' });
        }

        console.log('data deleted');
        res.status(200).json({ message: 'Product Deleted Successfully' })
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

export default router;