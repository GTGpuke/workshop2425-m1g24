import React from 'react';
import { Box, Button, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'react-bootstrap-icons';
import './choix.css';

const Choix = () => {
  const navigate = useNavigate();

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
    <Box className="choix-container" sx={{ padding: '20px' }}>
      {/* Titre centré */}
      <Typography
        variant="h4"
        component="h3"
        className="choix-title-with-bars"
        sx={{ marginBottom: '20px' }}
      >
        Découvrir nos destinations pour votre voyage !
      </Typography>


      {/* Grille des cards */}
      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="choix-card" sx={{ height: '470px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="choix-image-wrapper" style={{ height: '270px', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="270"
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
                endIcon={<PlusCircle />}
                onClick={section.onClick}
              >
                {section.buttonText}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Choix;
