const Bike = require('../models/bike.model.js.js');
const Store = require('../models/store.model.js');

// getStoreById
async function getStoreById(_id){
    return Store.findById(_id);
}

//filterBikesByStore
async function filterBikesByStore(_id) {
    return Bike.find({store: _id});
}

//filterByAvailability
async function filterByAvailability(_id) {
    return Bike.find({store: _id, availability: true});
}

async function filterByNotAvailability(_id) {
    return Bike.find({store: _id, availability: false});
}

module.exports = {
    getStoreById,
    filterBikesByStore,
    filterByAvailability,
    filterByNotAvailability,
}