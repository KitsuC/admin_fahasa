const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/fahasa_prod', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect successfully!!!');
  } catch (err) {
    console.log('Connection error');
  }
}

module.exports = { connect };
