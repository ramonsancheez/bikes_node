const express = require('express');
const mongoose = require('./config/db.connection.js');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
const controllers = require('./controllers/controllers.js')

// app.use('/', controllers);
app.get('/bikes', controllers.getBikes)
app.get('/bikes/:id', controllers.filterBikesById)
app.get('store/:id/bikes', controllers.filterBikesByStore)

app.post('/bike', controllers.createBike)
app.post('/store', controllers.createStore)

app.put('/bike/:id', controllers.updateBike)
app.put('/store/:id', controllers.updateStore)

app.delete('/bike/:id', controllers.deleteBike)
app.delete('/store/:id/bikes', controllers.deleteStore)

app.listen(port, () => console.log('server running at port', port));