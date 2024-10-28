import React from 'react';
import { useTranslation } from 'react-i18next';
import './accueil.css'; 

const Accueil = () => {
  const { t } = useTranslation();

  return (
    <div className="accueil-container">
      <div className="content">
        {/* <div className="section">
          <img src="/images/medecin.webp" alt="Médecin" className="accueil" />
        </div> */}
        <div className="text-section">
          <h1 className="title">{t('accueil.title')}</h1> {/* Traduction du titre */}
          <p className="description">{t('accueil.description')}</p> {/* Traduction de la description */}
        </div>
      </div>
    </div>
  );
};

export default Accueil;
