import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './connexion.css';

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: '',
    mot_de_passe: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si l'email et le mot de passe correspondent aux informations de l'admin
    if (formData.email === 'akuetche55@gmail.com' && formData.mot_de_passe === '2024') {
      navigate('/admin'); 
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', 
      });
      
      const result = await response.json(); 
      console.log(result); 
      
      if (response.ok) {
        console.log(result.message); 
        navigate('/home'); 
      } else {
        setErrorMessage(result.message);
        console.error(result.message);
      }
    } catch (error) {
      setErrorMessage('Erreur lors de la connexion.'); 
      console.error('Erreur lors de la connexion:', error);
    }
  };
  
  return (
    <div className="connexion-container">
      <h2 className="connexion-title">Connexion</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} 
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
          <p>Pas encore inscrit ? <a href="/inscription" style={{color: '#A93D87'}}>Inscrivez-vous</a></p>
          <p><a href="/motdepasseoublie" style={{color: '#A93D87'}}>Mot de passe oublié ?</a></p>
        </div>
        <button type="submit" className="connexion-button">
          Valider
        </button>
      </form>

    </div> 
  );
};

export default Connexion;
