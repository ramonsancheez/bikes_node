const express = require('express');
const app = express();
const availabilityControllers = require('../app/controllers/availability.controllers.js')

// ENDPOINTS (AVAILABILITY)
app.put('/:id/', availabilityControllers.updateBikeAvailability)

app.get('/:id/bikes/', availabilityControllers.getByAvailability)

module.exports = app
