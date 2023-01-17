const Bike = require('../models/bike.model.js.js');
const Store = require('../models/store.model.js');

// all crud verbs
async function getBikes() {
    return Bike.find();
}

async function getBikeById(id) {
    return Bike.findById(id);
}

async function getBikesByStore(id) {
    return Bike.find({store: id});
}

async function createBike(bikeBody) {
    const bike = new Bike(bikeBody);
    return bike.save();
}

async function updateBike(id, bike) {
    return Bike.findByIdAndUpdate(id, bike);
}

async function deleteBike(id) {
    return Bike.findByIdAndDelete(id);
}


module.exports = {
    getBikes,
    getBikeById,
    getBikesByStore,
    createBike,
    updateBike,
    deleteBike,
}