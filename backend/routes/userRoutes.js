const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// Obtenir les propriétés d'un utilisateur
router.get('/users/:userId/properties', auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('properties');
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json(user.properties);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erreur du serveur');
    }
});

// Mettre à jour les propriétés sélectionnées d'un utilisateur
router.post('/users/:userId/properties', auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        user.properties = req.body.properties; // Mettre à jour les propriétés sélectionnées
        await user.save();

        res.status(200).json({ message: 'Propriétés mises à jour avec succès' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erreur du serveur');
    }
});

module.exports = router;
