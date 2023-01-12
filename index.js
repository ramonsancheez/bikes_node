const express = require('express');
const mongoose = require('./config/db.connection.js');
const app = express();
const routes = require('./routes/routes');
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/', routes)

app.listen(port, () => console.log('server running at port', port));