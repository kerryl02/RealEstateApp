const express = require('express');
const { createProperty, getProperties, deleteProperty } = require('../controllers/propertyController');

const router = express.Router();

router.post('/properties', createProperty);
router.get('/properties', getProperties);
router.delete('/properties/:id', deleteProperty);

module.exports = router;
