const express = require('express');
const app = express();
const storeControllers = require('../app/controllers/store.controllers.js')

// ENDPOINTS (STORE)
    app.get('/:id/bikes', storeControllers.getBikesByStore)

    app.post('/', storeControllers.createStore)

    app.delete('/:id/bikes', storeControllers.deleteStore)

module.exports = app