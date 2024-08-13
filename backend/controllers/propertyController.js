const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
    try {
        const property = new Property(req.body);
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Propriété non trouvée' });
        }
        res.status(200).json({ message: 'Propriété supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
