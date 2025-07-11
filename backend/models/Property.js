// models/Property.js
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: String,
  location: String, // e.g., "Gurgaon"
  city: String,     // for city-based filtering
  price: String,
  status: String,   // "Ready to move-in" / "Under Construction"
  completionDate: String,
  returns: String,
  imageUrl: String,
  developerSite: String
});

module.exports = mongoose.model('Property', propertySchema);
