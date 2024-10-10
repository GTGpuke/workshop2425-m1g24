import React, { useState } from 'react';
import './connexion.css';

const Connexion = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:3000/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }); 
      const result = await response.json(); 
      if (response.ok) {
        console.log(result.message); 
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };
  

  return (
    <div className="connexion-container">
      <h2 className="connexion-title">Connexion</h2>
      <form onSubmit={handleSubmit} className="connexion-form">
        <div className="connexion-row">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nom d'utilisateur :"
            className="connexion-input"
          />
        </div>
        <div className="connexion-row">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mot de passe :"
            className="connexion-input"
          />
        </div>
        <div className="connexion-links">
          <p>Pas encore inscrit ? <a href="/inscription">Inscrivez-vous</a></p>
          <p><a href="/motdepasseoublie">Mot de passe oublié ?</a></p>
        </div>
        <button type="submit" className="connexion-button">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Connexion;
