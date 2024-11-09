import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'react-i18next';
import Temoignages from '../temoignages/temoignage';
import Choix from '../mesChoix/choix';
import './medecin.css';

const Medecin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); 
  };
  const handleTemoignageClick = () => {
    navigate('/toutTemoignages'); 
  };
 
  return (
    <Box className="medecin-container">
      <div className="flou">
        <img src="/images/bureau.jpeg" alt="avion" />
        <div className="backdrop-overlay">
          <h2 className="titre">{t('accueil.title')}</h2>
          <p className="descrire">{t('accueil.description')}</p>
          <button className="green-button" onClick={handleContactClick}>
            NOUS CONTACTER <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>
      <div className="choisir">
        <Choix />
      </div>
      <div className="temoignage">
        <Temoignages />
      </div>
      <div className="tout-temoignage">
        <button className="green-button" onClick={handleTemoignageClick}>
          Lire tous les témoignages <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
        </button>
      </div><br />
      <div className="temoignage">
      <img src="/images/download.jpeg" alt="avion" />
      </div>
    </Box>
  );
};

export default Medecin;
