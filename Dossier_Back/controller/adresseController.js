const pool = require('../config/dbConfig'); // Importation de la configuration de la base de données

// Obtenir toutes les adresses des patients
const getAllAdresses = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [rows] = await conn.query("SELECT * FROM Adresses"); // Exécuter la requête SQL pour récupérer toutes les adresses
        res.status(200).json(rows); // Retourner les résultats sous forme de JSON
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la récupération des adresses' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Obtenir une adresse par ID
const getAdresseById = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    const id = req.params.id; // Récupérer l'ID de l'adresse depuis les paramètres de la requête
    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [rows] = await conn.query("SELECT * FROM Adresses WHERE id = ?", [id]); // Exécuter la requête SQL pour récupérer l'adresse par ID
        if (rows.length === 0) { // Vérifier si l'adresse existe
            return res.status(404).json({ message: 'Adresse non trouvée' }); // Retourner un message d'erreur si l'adresse n'existe pas
        }
        res.status(200).json(rows[0]); // Retourner l'adresse sous forme de JSON
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'adresse' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Créer une nouvelle adresse
const createAdresse = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    const { adresse_1, adresse_2, ville, code_postal, pays, id_patient } = req.body; // Récupérer les données de l'adresse depuis le corps de la requête

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const result = await conn.query(
            "INSERT INTO Adresses (adresse_1, adresse_2, ville, code_postal, pays, id_patient) VALUES (?, ?, ?, ?, ?, ?)",
            [adresse_1, adresse_2, ville, code_postal, pays, id_patient] // Insérer la nouvelle adresse dans la base de données
        );
        res.status(201).json({ id: result[0].insertId, message: 'Adresse créée avec succès' }); // Retourner l'ID de la nouvelle adresse
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la création de l\'adresse' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Mettre à jour une adresse
const updateAdresse = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    const id = req.params.id; // Récupérer l'ID de l'adresse depuis les paramètres de la requête
    const { adresse_1, adresse_2, ville, code_postal, pays, id_patient } = req.body; // Récupérer les données à mettre à jour depuis le corps de la requête

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [result] = await conn.query(
            "UPDATE Adresses SET adresse_1 = ?, adresse_2 = ?, ville = ?, code_postal = ?, pays = ?, id_patient = ? WHERE id = ?",
            [adresse_1, adresse_2, ville, code_postal, pays, id_patient, id] // Mettre à jour l'adresse dans la base de données
        );

        if (result.affectedRows === 0) { // Vérifier si l'adresse a été trouvée et mise à jour
            return res.status(404).json({ message: 'Adresse non trouvée' }); // Retourner un message d'erreur si l'adresse n'existe pas
        }

        res.status(200).json({ message: 'Adresse mise à jour avec succès' }); // Retourner un message de succès
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'adresse' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Supprimer une adresse
const deleteAdresse = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    const id = req.params.id; // Récupérer l'ID de l'adresse depuis les paramètres de la requête

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [result] = await conn.query("DELETE FROM Adresses WHERE id = ?", [id]); // Exécuter la requête SQL pour supprimer l'adresse

        if (result.affectedRows === 0) { // Vérifier si l'adresse a été trouvée
            return res.status(404).json({ message: 'Adresse non trouvée' }); // Retourner un message d'erreur si l'adresse n'existe pas
        }

        res.status(200).json({ message: 'Adresse supprimée avec succès' }); // Retourner un message de succès
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'adresse' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Obtenir toutes les adresses des médecins
const getAllAdressesMedecin = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [rows] = await conn.query("SELECT * FROM Adresses_Medecin"); // Exécuter la requête SQL pour récupérer toutes les adresses de médecins
        res.status(200).json(rows); // Retourner les résultats sous forme de JSON
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la récupération des adresses des médecins' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Obtenir une adresse de médecin par ID
const getAdresseMedecinById = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    const id = req.params.id; // Récupérer l'ID de l'adresse depuis les paramètres de la requête
    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [rows] = await conn.query("SELECT * FROM Adresses_Medecin WHERE id = ?", [id]); // Exécuter la requête SQL pour récupérer l'adresse de médecin par ID
        if (rows.length === 0) { // Vérifier si l'adresse existe
            return res.status(404).json({ message: 'Adresse de médecin non trouvée' }); // Retourner un message d'erreur si l'adresse n'existe pas
        }
        res.status(200).json(rows[0]); // Retourner l'adresse sous forme de JSON
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'adresse de médecin' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Créer une nouvelle adresse de médecin
const createAdresseMedecin = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    const { adresse_1, adresse_2, ville, code_postal, pays, id_medecin } = req.body; // Récupérer les données de l'adresse de médecin depuis le corps de la requête

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const result = await conn.query(
            "INSERT INTO Adresses_Medecin (adresse_1, adresse_2, ville, code_postal, pays, id_medecin) VALUES (?, ?, ?, ?, ?, ?)",
            [adresse_1, adresse_2, ville, code_postal, pays, id_medecin] // Insérer la nouvelle adresse de médecin dans la base de données
        );
        res.status(201).json({ id: result[0].insertId, message: 'Adresse de médecin créée avec succès' }); // Retourner l'ID de la nouvelle adresse
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la création de l\'adresse de médecin' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Mettre à jour une adresse de médecin
const updateAdresseMedecin = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    const id = req.params.id; // Récupérer l'ID de l'adresse depuis les paramètres de la requête
    const { adresse_1, adresse_2, ville, code_postal, pays, id_medecin } = req.body; // Récupérer les données à mettre à jour depuis le corps de la requête

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [result] = await conn.query(
            "UPDATE Adresses_Medecin SET adresse_1 = ?, adresse_2 = ?, ville = ?, code_postal = ?, pays = ?, id_medecin = ? WHERE id = ?",
            [adresse_1, adresse_2, ville, code_postal, pays, id_medecin, id] // Mettre à jour l'adresse de médecin dans la base de données
        );

        if (result.affectedRows === 0) { // Vérifier si l'adresse a été trouvée et mise à jour
            return res.status(404).json({ message: 'Adresse de médecin non trouvée' }); // Retourner un message d'erreur si l'adresse n'existe pas
        }

        res.status(200).json({ message: 'Adresse de médecin mise à jour avec succès' }); // Retourner un message de succès
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'adresse de médecin' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Supprimer une adresse de médecin
const deleteAdresseMedecin = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion
    const id = req.params.id; // Récupérer l'ID de l'adresse depuis les paramètres de la requête

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [result] = await conn.query("DELETE FROM Adresses_Medecin WHERE id = ?", [id]); // Exécuter la requête SQL pour supprimer l'adresse de médecin

        if (result.affectedRows === 0) { // Vérifier si l'adresse a été trouvée
            return res.status(404).json({ message: 'Adresse de médecin non trouvée' }); // Retourner un message d'erreur si l'adresse n'existe pas
        }

        res.status(200).json({ message: 'Adresse de médecin supprimée avec succès' }); // Retourner un message de succès
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'adresse de médecin' }); // Gérer les erreurs
    } finally {
        if (conn) conn.release(); // Libérer la connexion si elle existe
    }
};

// Exporter les fonctions du contrôleur pour les utiliser dans les routes
module.exports = { 
    getAllAdresses, 
    getAdresseById, 
    createAdresse, 
    updateAdresse, 
    deleteAdresse,
    getAllAdressesMedecin,
    getAdresseMedecinById,
    createAdresseMedecin,
    updateAdresseMedecin,
    deleteAdresseMedecin
};
