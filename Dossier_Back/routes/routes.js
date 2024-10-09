const express = require('express');
const router = express.Router();

// Importer tous les contrôleurs nécessaires
const medecinController = require('../controller/medecinController');
const patientController = require('../controller/patientController');
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

// Ajoutez d'autres routes pour les maladies, traitements, etc. selon vos besoins

module.exports = router;
