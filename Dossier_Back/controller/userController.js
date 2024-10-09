const pool = require('../config/dbConfig');

// Obtenir tous les utilisateurs
const getAllUsers = async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection(); // Obtenir une connexion à la base de données
      const rows = await conn.query("SELECT * FROM Utilisateurs"); // Exécuter la requête SQL
      res.status(200).json(rows); // Retourner les résultats sous forme de JSON
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' }); // Gérer les erreurs
    } finally {
      if (conn) conn.release(); // Libérer la connexion
    }
};

// Obtenir un utilisateur par ID
const getUserById = async (req, res) => {
  // Logique pour obtenir un utilisateur par ID
};

// Créer un nouvel utilisateur
const createUser = async (req, res) => {
  // Logique pour créer un nouvel utilisateur
};

// Mettre à jour un utilisateur
const updateUser = async (req, res) => {
  // Logique pour mettre à jour un utilisateur
};

// Supprimer un utilisateur
const deleteUser = async (req, res) => {
  // Logique pour supprimer un utilisateur
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
