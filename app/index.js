const express = require('express');
const app = express();
const bikeRoutes = require('../routes/bike.routes.js');
const storeRoutes = require('../routes/store.routes.js');
const availabilityRoutes = require('../routes/availability.routes.js');
const loggerMiddleware  = require('./middleware/loggerMiddleware.js');
require('dotenv').config();
require('../db/db.connection.js');

// MIDDLEWARE
    app.use(loggerMiddleware);
    app.use(express.json());

// ROUTES
    app.use('/bike', bikeRoutes);
    app.use('/store', storeRoutes);
    app.use('/availability', availabilityRoutes)

// SERVER
    const port = process.env.PORT;
    app.listen(port, () => console.log('server running at port', port));