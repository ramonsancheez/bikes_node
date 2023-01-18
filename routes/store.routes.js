const express = require('express');
const app = express();
const storeControllers = require('../controllers/store.controllers.js')

// ENDPOINTS (STORE)
    app.get('/:id/bikes', storeControllers.filterBikesByStore)
    app.get('/:id/bikes/availability', storeControllers.filterByAvailability)
    app.get('/:id/bikes/notAvailability', storeControllers.filterByNotAvailability)

    app.post('/', storeControllers.createStore)

    app.delete('/:id/bikes', storeControllers.deleteStore)

module.exports = app