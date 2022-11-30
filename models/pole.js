const mongoose = require('mongoose');

const PoleSchema = new mongoose.Schema({
  sim_no: {
    type: String,
    required: [true, 'sim number is required'],
    unique: true
  },

  location: {
    type: String,
    unique: false
  },
  notes: {
    type: String
    // required: [true, 'plate number is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pole', PoleSchema);
