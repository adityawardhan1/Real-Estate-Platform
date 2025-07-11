const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const staticProperties = require('../data/properties'); // Import static list

// GET all (DB + static)
router.get('/', async (req, res) => {
  try {
    const dbProperties = await Property.find();
    const all = [...staticProperties, ...dbProperties];
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// POST new dynamic property to DB
router.post('/', async (req, res) => {
  const { title, location, price, image } = req.body;
  try {
    const newProperty = new Property({ title, location, price, image });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add property' });
  }
});

module.exports = router;
