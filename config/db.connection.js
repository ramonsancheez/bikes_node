const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conectado a Mongo!');
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('La conexión ha finalizado'); 
    process.exit(0); 
  }); 
});

module.exports = mongoose;
