import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import './brochure.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function BrochureForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      // Envoie des données à la base de données
      await axios.post('/api/enregistrer', formData);

      // Téléchargement du fichier PDF
      const link = document.createElement('a');
      link.href = "/documents/etude_cas.pdf"; // Chemin vers le fichier PDF
      link.download = "Mobiliis_brochure.pdf"; // Nom sous lequel le fichier sera téléchargé
      link.click();

      // Redirection vers une autre page (optionnel)
      navigate('/telechargeBrochure');
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
    }
  };

  return (
    <div className="brochure-container">
      {/* Image à gauche */}
      <div className="brochure-image-container">
        <img src="/images/catable.jpg" alt="Brochure" className="brochure-image" />
      </div>

      {/* Formulaire à droite */}
      <div className="brochure-form-container">
        <h2 className="brochure-form-title">Télécharger notre documentation</h2>
        <form onSubmit={handleSubmit} className="brochure-form">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="brochure-input"
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={formData.prenom}
            onChange={handleChange}
            required
            className="brochure-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="brochure-input"
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="brochure-input"
          />
          <div className="brochure-actions">
            <Button type="submit" className="submit-button" variant="contained" color="primary">
              <FileDownloadIcon /> Télécharger
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
