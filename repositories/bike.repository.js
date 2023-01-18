const Bike = require('../models/bike.model.js.js');

async function getBikes() {
    return Bike.find();
}

async function getBikeById(id){
    return Bike.findById(id);
}

async function getBikesByStore(_id) {
    return Bike.find({store: _id});
}

async function createBike(bikeBody) {
    const newBike = new Bike(bikeBody);
    return newBike.save();
}

async function updateAvailability(id, availability) {
    return Bike.findByIdAndUpdate(id, {availability: availability}, {new: true});
}

async function deleteBike(id) {
    return Bike.findByIdAndDelete(id);
}

async function deleteAllBikes() {
    return Bike.deleteMany();
}


module.exports = {
    getBikes,
    getBikeById,
    getBikesByStore,
    createBike,
    updateAvailability,
    deleteBike,
    deleteAllBikes,
}