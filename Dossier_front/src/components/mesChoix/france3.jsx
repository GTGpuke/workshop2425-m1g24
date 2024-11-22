import React from 'react';
import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const France3 = () => {
  const section = {
    title: "Types de logements étudiant en France",
    content: (
      <div>
        <Typography paragraph>
          En France, deux possibilités de se loger s’offrent aux étudiants internationaux :
        </Typography>
        <ul>
          <li>Les résidences universitaires gérées par les CROUS, et</li>
          <li>Les logements privés possédés par des particuliers, associations ou des organismes privés.</li>
        </ul>
        <Typography paragraph>
          Mais généralement, les résidences universitaires CROUS sont les plus recherchées par les étudiants vu leurs nombreux avantages :
        </Typography>
        <ul>
          <li>Très proches des universités ;</li>
          <li>Loyer plus ou moins très bas ;</li>
          <li>Possibilité de bénéficier des aides au logement.</li>
        </ul>
        <Typography paragraph>
          Leur seul inconvénient est que leurs capacités d’accueil sont très limitées en face à la forte demande.
        </Typography>
        <Typography paragraph variant="body2" color="#003366" fontWeight="bold">
          <strong>NB :</strong> N’attendez surtout pas d’être en France pour chercher votre logement étudiant ! Entamez, le plus tôt possible, vos demandes à distance !
        </Typography>
      </div>
    ),
  };

  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#FAFAFA" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Image */}
        <Grid item xs={12} md={5}>
          <img
            src="/images/etudiantFrance.webp"
            alt="Hébergement étudiant en France"
            style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
          />
        </Grid>

        {/* Texte principal */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color='#A93D87'>
            Hébergement – Logement étudiant
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Trouver le bon type de logement étudiant est la clé de votre intégration académique et sociale !
          </Typography>

          {/* Accordéon */}
          <Accordion sx={{ marginBottom: "10px", border: "1px solid #E7C56F" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ backgroundColor: "#FFF" }}
            >
              <Typography fontWeight="bold" sx={{ color: "#1976D2" }}>{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{section.content}</AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default France3;
