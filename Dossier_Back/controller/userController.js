const pool = require('../config/dbConfig');

// Exemple : récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  } finally {
    if (conn) conn.release(); // libère la connexion
  }
};

module.exports = { getAllUsers };
