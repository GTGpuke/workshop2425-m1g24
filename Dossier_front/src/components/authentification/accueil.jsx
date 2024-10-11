import React from 'react';
import './accueil.css'; 

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="content">
        <div className="section">
          <img src="/images/medecin.webp" alt="Médecin" className="accueil" />
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