const express = require('express');
const router = express.Router();

// Import controllers (to be created)
// const { getProperties, createProperty, getProperty, updateProperty, deleteProperty } = require('../controllers/propertyController');

// Routes
router.get('/', (req, res) => {
    res.json({ message: 'Property routes working' });
});

// router.get('/', getProperties);
// router.post('/', createProperty);
// router.get('/:id', getProperty);
// router.put('/:id', updateProperty);
// router.delete('/:id', deleteProperty);

module.exports = router; 