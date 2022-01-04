const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Provider = require('./provider');

const objectSchema = {
    name: String,
    rating: Number,
    price: Number,
    picture: String,
    provider_id: { type: Schema.ObjectId, ref: Provider }
}

const productSchema = mongoose.Schema(objectSchema);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;