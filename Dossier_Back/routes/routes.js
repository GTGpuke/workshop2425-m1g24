const express = require('express');
const router = express.Router();

// Importer tous les contrôleurs nécessaires
const medecinController = require('../controller/medecinController');
const patientController = require('../controller/patientController');
const adresseController = require('../controller/adresseController');
// Ajoutez d'autres contrôleurs si nécessaire

// Routes pour les médecins
router.get('/medecins', medecinController.getAllMedecins);
router.get('/medecins/:id', medecinController.getMedecinById);
router.post('/medecins', medecinController.createMedecin);
router.put('/medecins/:id', medecinController.updateMedecin);
router.delete('/medecins/:id', medecinController.deleteMedecin);

// Routes pour les patients
router.get('/patients', patientController.getAllPatients);
router.get('/patients/:id', patientController.getPatientById);
router.post('/patients', patientController.createPatient);
router.put('/patients/:id', patientController.updatePatient);
router.delete('/patients/:id', patientController.deletePatient);

// Routes pour les adresses des patients
router.get('/adresses/patients', adresseController.getAllAdressesPatients); // Obtenir toutes les adresses des patients
router.get('/adresses/patients/:id', adresseController.getAdressePatientById); // Obtenir une adresse d'un patient par ID
router.post('/adresses/patients', adresseController.createAdressePatient); // Créer une nouvelle adresse pour un patient
router.put('/adresses/patients/:id', adresseController.updateAdressePatient); // Mettre à jour une adresse d'un patient
router.delete('/adresses/patients/:id', adresseController.deleteAdressePatient); // Supprimer une adresse d'un patient

// Routes pour les adresses des médecins
router.get('/adresses/medecins', adresseController.getAllAdressesMedecins); // Obtenir toutes les adresses des médecins
router.get('/adresses/medecins/:id', adresseController.getAdresseMedecinById); // Obtenir une adresse d'un médecin par ID
router.post('/adresses/medecins', adresseController.createAdresseMedecin); // Créer une nouvelle adresse pour un médecin
router.put('/adresses/medecins/:id', adresseController.updateAdresseMedecin); // Mettre à jour une adresse d'un médecin
router.delete('/adresses/medecins/:id', adresseController.deleteAdresseMedecin); // Supprimer une adresse d'un médecin

// Ajoutez d'autres routes pour les maladies, traitements, etc. selon vos besoins

module.exports = router;
