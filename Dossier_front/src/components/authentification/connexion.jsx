import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './connexion.css';

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: '',
    mot_de_passe: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // État pour le message d'erreur
  const navigate = useNavigate(); // Initialiser useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(''); // Réinitialiser le message d'erreur lors de la modification des champs
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Inclure les cookies de session si nécessaire
      }); 
      
      const result = await response.json(); 
      console.log(result); // Log la réponse pour débogage
      
      if (response.ok) {
        console.log(result.message); 
        navigate('/home'); // Rediriger vers /home en cas de succès
      } else {
        setErrorMessage(result.message); // Afficher le message d'erreur
        console.error(result.message);
      }
    } catch (error) {
      setErrorMessage('Erreur lors de la connexion.'); // Message d'erreur générique
      console.error('Erreur lors de la connexion:', error);
    }
  };
  
  return (
    <div className="connexion-container">
      <h2 className="connexion-title">Connexion</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Afficher le message d'erreur en rouge */}
      <form onSubmit={handleSubmit} className="connexion-form">
        <div className="connexion-row">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email :"
            className="connexion-input"
          />
        </div>
        <div className="connexion-row">
          <input
            type="password"
            name="mot_de_passe"
            value={formData.mot_de_passe}
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
