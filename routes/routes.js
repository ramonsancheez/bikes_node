const express = require('express');
const app = express();
const bikeControllers = require('../controllers/bikeControllers.js')
const storeControllers = require('../controllers/storeControllers.js')

// ENDPOINTS
app.get('/bikes', bikeControllers.getBikes)
app.get('/bikes/:id', bikeControllers.filterBikesById)
app.get('/store/:id/bikes', storeControllers.filterBikesByStore)
app.get('/store/:id/bikes/availability', storeControllers.filterByAvailability)
app.get('/store/:id/bikes/notAvailability', storeControllers.filterByNotAvailability)

app.post('/bike', bikeControllers.createBike)
app.post('/store', storeControllers.createStore)

// app.put('/bike/:id', bikeControllers.updateBike)
app.put('/store/:id', storeControllers.updateStore)
app.put('/bike/:id/availability', bikeControllers.updateBikeAvailability)

app.delete('/bike/:id', bikeControllers.deleteBike)
app.delete('/store/:id/bikes', storeControllers.deleteStore)
app.delete('/bikes', bikeControllers.deleteAllBikes)

module.exports = app