const mongoose = require('mongoose');
const Store = require('./store.model');

const BikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true,
        onDelete: 'CASCADE'
    }
});

const Bike = mongoose.model('Bike', BikeSchema);

module.exports = Bike;
