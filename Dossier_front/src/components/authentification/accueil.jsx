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
    </div>
  );
};

export default Accueil;
