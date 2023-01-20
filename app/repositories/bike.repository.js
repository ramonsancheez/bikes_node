const Bike = require('../models/bike.model.js');

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
    deleteBike,
    deleteAllBikes,
}