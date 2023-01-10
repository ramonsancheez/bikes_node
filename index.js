const express = require('express');
const mongoose = require('./config/db.connection.js');
const bikesRouter = require('./routes/routes.js');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', bikesRouter);

app.listen(port, () => console.log('server running at port', port));