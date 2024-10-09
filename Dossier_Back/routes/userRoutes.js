const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Route pour obtenir tous les utilisateurs
router.get('/', userController.getAllUsers);

// Route pour obtenir un utilisateur par son ID
router.get('/:id', userController.getUserById);

// Route pour créer un nouvel utilisateur
router.post('/', userController.createUser);

// Route pour mettre à jour un utilisateur existant
router.put('/:id', userController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/:id', userController.deleteUser);

module.exports = router;
