const express = require('express');
const mongoose = require('./config/db.connection.js');
const bikesRouter = require('./routes/routes.js');
const app = express();

app.use('/', bikesRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});