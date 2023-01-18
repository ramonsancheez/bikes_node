const mongoose = require('mongoose');
const db_connection = mongoose.connection;

mongoose.connect('mongodb+srv://ramonsancheez:Rjq0cz5WeXXmCGKZ@cluster0.9rfuhuh.mongodb.net/bikestore?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db_connection.on('error', console.error.bind(console, 'connection error:'));

db_connection.once('open', function() {
  console.log('Conectado a Mongo!');
});

module.exports = mongoose;
