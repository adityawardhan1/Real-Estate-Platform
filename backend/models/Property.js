const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true,
    enum: ['house', 'apartment', 'condo', 'land']
  },
  status: {
    type: String,
    required: true,
    enum: ['for-sale', 'for-rent', 'sold', 'rented'],
    default: 'for-sale'
  },
  features: [{
    type: String
  }],
  images: [{
    type: String
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Property', propertySchema);
