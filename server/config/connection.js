const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pokerdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;