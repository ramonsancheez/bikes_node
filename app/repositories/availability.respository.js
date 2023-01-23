const Bike = require('../models/bike.model.js');
const bikeRepository = require('../services/bike.service.js');

let isAvailable = true;

async function updateBikeAvailability(id) {
    const bike = await bikeRepository.getBikeById(id);
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