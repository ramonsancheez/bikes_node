const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
}, { versionKey: false });

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;
