const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    index: true,
    required: true,
  },
  description: {
    type: String,
  },
  naughtiness: {
    type: Number,
    index: true,
    required: true,
  }
});

//compound indexing
// peopleSchema.index({name: 1, naughtiness: 1});

const People = mongoose.model('People', peopleSchema);

People.ensureIndexes((err) => {
  if(err) {
    console.log('ensureIndexes', err);
  }
});

People.on('index', (err) => {
  if(err) {
    console.log(err);
  }
});

module.exports = People;