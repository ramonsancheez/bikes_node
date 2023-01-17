const Bike = require('../models/bike.model.js.js');
const Store = require('../models/store.model.js');

// get store by id
async function getStoreById(id) {
    return Store.findById(id);
}

module.exports = {
    getStoreById,
}