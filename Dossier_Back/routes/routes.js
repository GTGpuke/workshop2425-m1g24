const express = require('express'); // Importer Express
const router = express.Router(); // Créer un routeur Express

// Importer tous les contrôleurs nécessaires
const medecinController = require('../controller/medecinController'); // Contrôleur pour les médecins
const patientController = require('../controller/patientController'); // Contrôleur pour les patients
const adresseController = require('../controller/adresseController'); // Contrôleur pour les adresses

// Ajoutez d'autres contrôleurs si nécessaire

// Routes pour les médecins
router.get('/medecins', medecinController.getAllMedecins); // Obtenir toutes les informations des médecins
router.get('/medecins/:id', medecinController.getMedecinById); // Obtenir un médecin par ID
router.post('/medecins', medecinController.createMedecin); // Créer un nouveau médecin
router.put('/medecins/:id', medecinController.updateMedecin); // Mettre à jour un médecin par ID
router.delete('/medecins/:id', medecinController.deleteMedecin); // Supprimer un médecin par ID

// Routes pour les patients
router.get('/patients', patientController.getAllPatients); // Obtenir toutes les informations des patients
router.get('/patients/:id', patientController.getPatientById); // Obtenir un patient par ID
router.post('/patients', patientController.createPatient); // Créer un nouveau patient
router.put('/patients/:id', patientController.updatePatient); // Mettre à jour un patient par ID
router.delete('/patients/:id', patientController.deletePatient); // Supprimer un patient par ID

// Routes pour les adresses des patients
router.get('/adresses/patients', adresseController.getAllAdressesPatients); // Obtenir toutes les adresses des patients
router.get('/adresses/patients/:id', adresseController.getAdressePatientById); // Obtenir une adresse d'un patient par ID
router.post('/adresses/patients', adresseController.createAdressePatient); // Créer une nouvelle adresse pour un patient
router.put('/adresses/patients/:id', adresseController.updateAdressePatient); // Mettre à jour une adresse d'un patient
router.delete('/adresses/patients/:id', adresseController.deleteAdressePatient); // Supprimer une adresse d'un patient

// Routes pour les adresses des médecins
router.get('/adresses/medecins', adresseController.getAllAdressesMedecin); // Obtenir toutes les adresses des médecins
router.get('/adresses/medecins/:id', adresseController.getAdresseMedecinById); // Obtenir une adresse d'un médecin par ID
router.post('/adresses/medecins', adresseController.createAdresseMedecin); // Créer une nouvelle adresse pour un médecin
router.put('/adresses/medecins/:id', adresseController.updateAdresseMedecin); // Mettre à jour une adresse d'un médecin
router.delete('/adresses/medecins/:id', adresseController.deleteAdresseMedecin); // Supprimer une adresse d'un médecin

// Ajoutez d'autres routes pour les maladies, traitements, etc. selon vos besoins

// Exporter le routeur pour l'utiliser dans l'application principale
module.exports = router;
