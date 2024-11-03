import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, TextField, Link } from '@mui/material';

import './medecin.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'react-i18next';

import Temoignages from '../temoignages/temoignage'; 


const Medecin = () => {
  const { t } = useTranslation();

  return (
    <Box className="medecin-container">
    <div className="flou">
      <img src="/images/bureau.jpeg" alt="avion" />
      <div className="backdrop-overlay">
        <h2 className="titre">{t('accueil.title')}</h2> 
        <p className="descrire">{t('accueil.description')}</p> 
        <button className="green-button">
                NOUS CONTACTER <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
        </button>
      </div>
    </div>
    <div className="temoignage">
      <Temoignages />
    </div>
    <div className="tout-temoignage">
    <button className="green-button">
                Lire tous les témoignages <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
        </button>
    </div><br />
  </Box>
  
  );
};

export default Medecin;