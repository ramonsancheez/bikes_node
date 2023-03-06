const Bike = require('../models/bike.model.js');
const Store = require('../models/store.model.js');

async function getStoreById(_id){
    return Store.findById(_id);
}

async function getBikesByStore(_id) {
    return Bike.find({store: _id});
}

async function getStores() {
    return Store.find();
}

async function createStore(bikeBody) {
    const newStore = new Store(bikeBody);
    return newStore.save();
}

async function deleteStore(_id) {
    const store = await Store.findByIdAndDelete(_id);
    await Bike.deleteMany({store: _id});
    return store;
}


module.exports = {
    createStore,
    getStores,
    getStoreById,
    getBikesByStore,
    deleteStore,
}