const mongoose = require('mongoose');
const db_connection = mongoose.connection;

mongoose.connect(process.env.MONGO_URI);

db_connection.on('error', console.error.bind(console, 'connection error:'));

db_connection.once('open', function() {
  console.log('Conectado a Mongo!');
});

module.exports = mongoose;