import React, { useState } from 'react';
import './forgetPassword.css'; // Le fichier CSS à définir pour le style

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi de l'email pour réinitialisation
    console.log('Email envoyé à:', email);
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-title">Mot de passe oublié</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Adresse e-mail du compte"
          className="forgot-password-input"
        />
        <button type="submit" className="forgot-password-button">
          Valider
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
