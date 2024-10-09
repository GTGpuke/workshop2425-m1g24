const express = require('express');
const router = express.Router();

// Importer tous les contrôleurs nécessaires
const userController = require('../controller/userController');

// Routes pour les utilisateurs
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
