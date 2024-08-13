const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post(
    '/register',
    [
        check('username', 'Le nom d\'utilisateur est requis').not().isEmpty(),
        check('email', 'Veuillez inclure un email valide').isEmail(),
        check('password', 'Le mot de passe doit contenir au moins 6 caractères').isLength({ min: 6 })
    ],
    registerUser
);

router.post(
    '/login',
    [
        check('email', 'Veuillez inclure un email valide').isEmail(),
        check('password', 'Le mot de passe est requis').exists()
    ],
    loginUser
);

router.get('/user', auth, getUser);

module.exports = router;
