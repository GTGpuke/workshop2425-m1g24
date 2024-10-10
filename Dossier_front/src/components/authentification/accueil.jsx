import React from 'react';
import './accueil.css'; // N'oublie pas d'ajouter le fichier CSS correspondant

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="content">
        <div className="image-section">
          <img src="/images/medecin.webp" alt="Médecin" className="accueil-image" />
        </div>
        <div className="text-section">
          <h1 className="title">Accueil</h1>
          <p className="description">
            Le sanctuaire d'e-santé pour orchestrer son calendrier de bien-être.
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-icons">
          <i className="fas fa-home"></i>
          <i className="fas fa-envelope"></i>
          <i className="fas fa-phone"></i>
        </div>
        <a href="mailto:support@example.com" className="email-link">Envoyez-nous un e-mail</a>
      </footer>
    </div>
  );
};

export default Accueil;
