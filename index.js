const express = require('express');
const app = express();
const bikeRoutes = require('./routes/bike.routes.js');
const storeRoutes = require('./routes/store.routes.js');
app.use(express.json())

require('./config/db.connection.js');
app.use('/', bikeRoutes)
app.use('/store', storeRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('server running at port', port));