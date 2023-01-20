const Bike = require('../models/bike.model.js');
let isAvailable = true;

async function updateBikeAvailability(id) {
    const bike = await getBikeById(id);
    return Bike.findByIdAndUpdate(id, {availability: !bike.availability}, {new: true});
}

async function getByAvailability(_id) {
    return Bike.find({store: _id, availability: isAvailable});
}

// EXPORTS
    module.exports = {
        isAvailable,
        updateBikeAvailability,
        getByAvailability,
    }