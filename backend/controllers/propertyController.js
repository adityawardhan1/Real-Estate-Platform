// Property Controller

// Get all properties
const getProperties = async (req, res) => {
    try {
        res.status(200).json({ message: 'Get all properties' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single property
const getProperty = async (req, res) => {
    try {
        res.status(200).json({ message: 'Get single property' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create property
const createProperty = async (req, res) => {
    try {
        res.status(201).json({ message: 'Create property' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update property
const updateProperty = async (req, res) => {
    try {
        res.status(200).json({ message: 'Update property' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete property
const deleteProperty = async (req, res) => {
    try {
        res.status(200).json({ message: 'Delete property' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty
}; 