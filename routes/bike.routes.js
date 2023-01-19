const express = require('express');
const app = express();
const bikeControllers = require('../app/controllers/bike.controllers.js')

// ENDPOINTS (BIKE)
    app.get('/', bikeControllers.getBikes)
    app.get('/:id', bikeControllers.filterBikesById)

    app.post('/', bikeControllers.createBike)

    app.put('/:id/availability', bikeControllers.updateBikeAvailability)

    app.delete('/:id', bikeControllers.deleteBike)
    app.delete('/', bikeControllers.deleteAllBikes)

module.exports = app