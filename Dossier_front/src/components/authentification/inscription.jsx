import React, { useState } from 'react';
import './inscription.css'; 

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    pseudo: '',
    motDePasse: '',
    telephone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour envoyer les données
    console.log('Données soumises:', formData);
  };

  return (
    <div className="inscription-container">
      <h2 className="inscription-title">Inscription</h2>
      <form onSubmit={handleSubmit} className="inscription-form">
        <div className="inscription-row">
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="inscription-input"
          />
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            className="inscription-input"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Adresse email"
          className="inscription-input"
        />
        <input
          type="text"
          name="pseudo"
          value={formData.pseudo}
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          className="inscription-input"
        />
        <input
          type="password"
          name="motDePasse"
          value={formData.motDePasse}
          onChange={handleChange}
          placeholder="Mot de passe"
          className="inscription-input"
        />
        <input
          type="text"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Numéro de téléphone"
          className="inscription-input"
        />
        <button type="submit" className="inscription-button">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Inscription;
