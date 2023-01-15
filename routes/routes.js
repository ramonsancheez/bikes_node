const express = require('express');
const app = express();
const controllers = require('../controllers/controllers.js')

// ENDPOINTS
app.get('/bikes', controllers.getBikes)
app.get('/bikes/:id', controllers.filterBikesById)
app.get('/store/:id/bikes', controllers.filterBikesByStore)
app.get('/store/:id/bikes/availability', controllers.filterByAvailability)

app.post('/bike', controllers.createBike)
app.post('/store', controllers.createStore)

app.put('/bike/:id', controllers.updateBike)
app.put('/store/:id', controllers.updateStore)
app.put('/bike/:id/availability', controllers.updateAvailability)

app.delete('/bike/:id', controllers.deleteBike)
app.delete('/store/:id/bikes', controllers.deleteStore)
app.delete('/bikes', controllers.deleteAllBikes)

module.exports = app