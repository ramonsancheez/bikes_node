const express = require('express');
const app = express();
const bikeControllers = require('../controllers/bike.controllers.js')

// ENDPOINTS (BIKE)
    app.get('/bikes', bikeControllers.getBikes)
    app.get('/bikes/:id', bikeControllers.filterBikesById)

    app.post('/bike', bikeControllers.createBike)

    app.put('/bike/:id/availability', bikeControllers.updateBikeAvailability)

    app.delete('/bike/:id', bikeControllers.deleteBike)
    app.delete('/bikes', bikeControllers.deleteAllBikes)

module.exports = app