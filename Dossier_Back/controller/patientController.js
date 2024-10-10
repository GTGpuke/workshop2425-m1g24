const pool = require('../config/dbConfig'); // Importation de la configuration de la base de données

// Obtenir tous les patients
const getAllPatients = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion à la base de données
    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const [rows] = await conn.query("SELECT * FROM Patients"); // Exécuter la requête SQL pour sélectionner tous les patients
        res.status(200).json(rows); // Retourner les résultats sous forme de JSON avec un statut 200 (OK)
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la récupération des patients' }); // Gérer les erreurs avec un statut 500 (Erreur interne du serveur)
    } finally {
        if (conn) conn.release(); // Libérer la connexion à la base de données
    }
};

// Obtenir un patient par ID
const getPatientById = async (req, res) => {
    let conn;
    const id = req.params.id;

    try {
        conn = await pool.getConnection();
        const [rows] = await conn.query("SELECT * FROM Patients WHERE id = ?", [id]);


        if (rows.length === 0) {
            return res.status(404).json({ message: 'Patient non trouvé' });
        }

        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de la récupération du patient' });
    } finally {
        if (conn) conn.release();
    }
};


// Créer un nouveau patient
const createPatient = async (req, res) => {
    let conn; // Déclaration de la variable pour la connexion à la base de données
    const { nom, prenom, email, mot_de_passe, authentification_carte_vitale, numero_securite_sociale, date_naissance, sexe, telephone, est_abonne, adresse_complete, description } = req.body; // Récupérer les données du patient à partir du corps de la requête

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const result = await conn.query(
            "INSERT INTO Patients (nom, prenom, email, mot_de_passe, authentification_carte_vitale, numero_securite_sociale, date_naissance, sexe, telephone, est_abonne, adresse_complete, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [nom, prenom, email, mot_de_passe, authentification_carte_vitale, numero_securite_sociale, date_naissance, sexe, telephone, est_abonne, adresse_complete, description] // Insérer le nouveau patient dans la base de données
        );
        res.status(201).json('Patient créé avec succès' ); // Retourner l'ID du nouveau patient avec un statut 201 (Créé)
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la création du patient' }); // Gérer les erreurs avec un statut 500
    } finally {
        if (conn) conn.release(); // Libérer la connexion à la base de données
    }
};

// Mettre à jour un patient
const updatePatient = async (req, res) => {
    let conn;
    const id = req.params.id;
    const { nom, prenom, email, mot_de_passe, authentification_carte_vitale, numero_securite_sociale, date_naissance, sexe, telephone, est_abonne, adresse_complete, description } = req.body;

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const result = await conn.query(
            "UPDATE Patients SET nom = ?, prenom = ?, email = ?, mot_de_passe = ?, authentification_carte_vitale = ?, numero_securite_sociale = ?, date_naissance = ?, sexe = ?, telephone = ?, est_abonne = ?, adresse_complete = ?, description = ? WHERE id = ?",
            [nom, prenom, email, mot_de_passe, authentification_carte_vitale, numero_securite_sociale, date_naissance, sexe, telephone, est_abonne, adresse_complete, description, id]
        );

        // Vérifier si aucune ligne n'a été affectée par la mise à jour
        if (result.affectedRows === 0) { 
            return res.status(404).json({ message: 'Patient non trouvé' }); // Retourner un statut 404 si le patient n'est pas trouvé
        }

        res.status(200).json({ message: 'Patient mis à jour avec succès' }); // Retourner un message de succès avec un statut 200 (OK)
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la mise à jour du patient' }); // Gérer les erreurs avec un statut 500
    } finally {
        if (conn) conn.release(); // Libérer la connexion à la base de données
    }
};


// Supprimer un patient
const deletePatient = async (req, res) => {
    let conn;
    const id = req.params.id;

    try {
        conn = await pool.getConnection(); // Obtenir une connexion à la base de données
        const result = await conn.query("DELETE FROM Patients WHERE id = ?", [id]); // Exécuter la requête SQL pour supprimer le patient

        // Vérifier si aucune ligne n'a été affectée par la suppression
        if (result.affectedRows === 0) { 
            return res.status(404).json({ message: 'Patient non trouvé' }); // Retourner un statut 404 si le patient n'est pas trouvé
        }

        res.status(200).json({ message: 'Patient supprimé avec succès' }); // Retourner un message de succès avec un statut 200 (OK)
    } catch (err) {
        console.error(err); // Afficher l'erreur dans la console
        res.status(500).json({ error: 'Erreur lors de la suppression du patient' }); // Gérer les erreurs avec un statut 500
    } finally {
        if (conn) conn.release(); // Libérer la connexion à la base de données
    }
};

// Exporter les fonctions du contrôleur pour les utiliser dans les routes
module.exports = { getAllPatients, getPatientById, createPatient, updatePatient, deletePatient };