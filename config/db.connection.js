const mongoose = require('mongoose');
const uri = 'mongodb+srv://ramonsancheez:Rjq0cz5WeXXmCGKZ@cluster0.9rfuhuh.mongodb.net/bikestore?retryWrites=true&w=majority'

mongoose.connect(uri, {
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
