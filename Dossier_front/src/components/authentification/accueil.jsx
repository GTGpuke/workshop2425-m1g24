import React from 'react';
import { useTranslation } from 'react-i18next';
import './accueil.css';
import Temoignages from '../temoignages/temoignage'; // Import du composant Temoignages

const Accueil = () => {
  const { t } = useTranslation();

  return (
    <div className="accueil-container" style={{ backgroundColor: 'green' }}>
      <div className="content">
        <div className="image-acceuil">
          <img src="/images/avion.jpg" alt="avion" />
        </div>
        <div className="text-section">
          <h1 className="title">{t('accueil.title')}</h1> 
          <p className="description">{t('accueil.description')}</p> 
        </div>
      </div>
      {/* Ajout du composant Temoignages */}
      <Temoignages />
    </div>
  );
};

export default Accueil;
