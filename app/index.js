const express = require('express');
const app = express();
const bikeRoutes = require('../routes/bike.routes.js');
const storeRoutes = require('../routes/store.routes.js');
const loggerMiddleware  = require('./middleware/loggerMiddleware.js.js');
require('../db/db.connection.js');

// MIDDLEWARE
    app.use(loggerMiddleware);
    app.use(express.json());

// ROUTES
    app.use('/', bikeRoutes);
    app.use('/store', storeRoutes)

// SERVER
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log('server running at port', port));