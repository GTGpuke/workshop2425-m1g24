import React from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const France4 = () => {
  const reasons = [
    "Un enseignement supérieur d'excellence (3ème Mondial)",
    "Universalité de la langue française (7ème Mondiale)",
    "Frais de scolarité parmi les moins élevés dans le monde",
    "7ème puissance économique mondiale",
    "Cadre de vie agréable au cœur de l’Europe",
    "Perspectives d’embauche post formation",
  ];

  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#FAFAFA" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Texte principal */}
        <Grid item xs={12} md={7}>
         
          <Typography variant="h4" fontWeight="bold" gutterBottom color='#A93D87'>
            Choisissez la France pour vos études à l’étranger !
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            La France est très attractive pour les étudiants étrangers ! Elle est le 4ème pays d’accueil des étudiants étrangers dans le monde.
          </Typography>
          <Typography variant="body1" paragraph>
            Ce succès tient à plusieurs raisons :
          </Typography>
          <ul>
            {reasons.map((reason, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <ThumbUpIcon sx={{ color: "red", marginRight: "10px" }} />
                <Typography>{reason}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="body1" paragraph>
            Détenir un diplôme d’une université Française est devenu synonyme d’excellence !
          </Typography>
        </Grid>

        {/* Images */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <img
              src="/images/catable.jpg"
              alt="Modern Building"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
      </Grid>

    
    </Box>
  );
};

export default France4;
