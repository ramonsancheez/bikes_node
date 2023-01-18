const Bike = require('../models/bike.model.js');
const Store = require('../models/store.model.js');

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

//createStore
async function createStore(bikeBody) {
    const newStore = new Store(bikeBody);
    return newStore.save();
}

// delete store and bikes associated repository
async function deleteStore(_id) {
    const store = await Store.findByIdAndDelete(_id);
    await Bike.deleteMany({store: _id});
    return store;
}


module.exports = {
    createStore,
    getStoreById,
    filterBikesByStore,
    filterByAvailability,
    filterByNotAvailability,
    deleteStore,
}