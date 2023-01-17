const express = require('express');
const app = express();
const routes = require('./routes/routes');
app.use(express.json())

require('./config/db.connection.js');
app.use('/', routes)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server running at port', port));