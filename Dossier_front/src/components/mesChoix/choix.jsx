import React from 'react';
import { Box, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import './choix.css';

const Choix = () => {
  const navigate = useNavigate();

  // Fonctions de navigation pour chaque pays
  const handleFrance = () => {
    navigate('/france');
  };
  const handleCanada = () => {
    navigate('/canada');
  };
  const handleAllemagne = () => {
    navigate('/allemagne');
  };
  const handleBelgique = () => {
    navigate('/belgique');
  };

  // Sections de contenu avec les informations nécessaires et la fonction de navigation correspondante
  const sections = [
    {
      title: "Procédure pour le Canada",
      description: "ESCG-PARIS, votre école de choix.",
      image: "/images/brochure.jpeg",
      flag: "/images/canada.jpg",
      buttonText: "voir votre procédure",
      buttonColor: "#004080",
      onClick: handleCanada,
    },
    {
      title: "Procédure pour la France",
      description: "Envie de vous réorienter sans perdre.",
      image: "/images/etudiant.jpg",
      flag: "/images/france.jpg",
      buttonText: "voir votre procédure",
      buttonColor: "#004080",
      onClick: handleFrance,
    },
    {
      title: "Procédure pour l'Allemagne",
      description: "Toute l’année, des Job Dating sont organisés.",
      image: "/images/avion.jpg",
      flag: "/images/Allemagne.jpg",
      buttonText: "voir",
      buttonColor: "#004080",
      onClick: handleAllemagne,
    },
    {
      title: "Procédure pour la Belgique",
      description: "ESCG-PARIS, votre école de choix.",
      image: "/images/brochure.jpeg",
      flag: "/images/Belgique.jpg",
      buttonText: "voir votre procédure",
      buttonColor: "#004080",
      onClick: handleBelgique,
    },
    {
      title: "Procédure pour la France",
      description: "Envie de vous réorienter sans perdre.",
      image: "/images/etudiant.jpg",
      flag: "/images/france.jpg",
      buttonText: "voir votre procédure",
      buttonColor: "#004080",
      onClick: handleFrance,
    },
    {
      title: "Procédure pour l'Allemagne",
      description: "Toute l’année, des Job Dating sont organisés.",
      image: "/images/avion.jpg",
      flag: "/images/Allemagne.jpg",
      buttonText: "voir",
      buttonColor: "#004080",
      onClick: handleAllemagne,
    },
  ];

  return (
    <Box className="choix-container">
      <div className="titre">
        <h6> Découvrir toutes nos destinations pour votre voyage </h6>
      </div>
      {sections.map((section, index) => (
        <Card className="choix-card" key={index}>
          <div className="choix-image-wrapper">
            <CardMedia
              component="img"
              height="140"
              image={section.image}
              alt={section.title}
              className="choix-image"
            />
          </div>
          <CardContent className="choix-content">
            <Typography variant="h6" component="div" className="choix-title">
              {section.title}
            </Typography>
            {section.flag && (
              <div className="flag-container">
                <img src={section.flag} alt="Flag" className="choix-flag" />
              </div>
            )}
            <Typography variant="body2" color="text.secondary" className="choix-description">
              {section.description}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            className="choix-button"
            style={{ backgroundColor: section.buttonColor }}
            endIcon={<MenuIcon />}
            onClick={section.onClick} 
          >
            {section.buttonText}
          </Button>
        </Card>
      ))}
    </Box>
  );
};

export default Choix;
