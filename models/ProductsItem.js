import mongoose from 'mongoose';
// import { type } from 'os'

const productItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    compare_at_price: {
        type: Number,
        required: true,
    },
    vendor: {
        type: String,
        enum: ['Puma', 'Nike', 'Lewis', 'Trends', 'Myntra', 'Other'],
        required: true,
    },
    image: {
        type: Array,
    },
}, { timestamps: true } // save the time of creation and update
);

const ProductItem = mongoose.model('ProductItem', productItemSchema, 'Product');
export default ProductItem;