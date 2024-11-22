import React from 'react';
import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const France2 = () => {
  const sections = [
    {
      title: "Conditions d'obtention du visa étudiant",
      content: (
        <div>
          <Typography paragraph>
            Pour prétendre à ce visa étudiant, vous devez :
          </Typography>
          <ul>
            <li>Être inscrit ou réinscrit dans un établissement d’enseignement supérieur ou dans un organisme de formation professionnelle supérieure.</li>
            <li>Justifier d’un projet d’étude cohérent.</li>
            <li>Prouver votre capacité à financer votre projet d’études.</li>
          </ul>
          <Typography paragraph variant="body2" color="textSecondary">
            NB : Si votre objectif est de passer un concours ou un examen d’accès dans l’enseignement supérieur ou encore une grande école, c’est le visa court-séjour « étudiant-concours » qu’il vous faut !
          </Typography>
        </div>
      ),
    },
    {
      title: "Travailler pendant les études en France",
      content: (
        <Typography>
          Les étudiants internationaux peuvent travailler en France à temps partiel (jusqu'à 964 heures par an), tout en respectant les lois et réglementations locales. Cela permet de financer partiellement leurs études et de s'intégrer dans le marché du travail français.
        </Typography>
      ),
    },
  ];

  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#FAFAFA" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Texte principal */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color='#A93D87'>
            Visa étudiant pour la France
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Vous êtes <strong>étudiant étranger</strong> et décidez de poursuivre vos études supérieures en France, vous devez demander un visa de long séjour valant le <strong>titre de séjour (VLS-TS)</strong> mention étudiant (valable 4 mois à 1 an) ! Ce <strong>visa étudiant</strong> est obligatoire pour toute formation supérieure à 3 mois.
          </Typography>

          {/* Accordions */}
          {sections.map((section, index) => (
            <Accordion key={index} sx={{ marginBottom: "10px", border: "1px solid #E7C56F" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ backgroundColor: "#FFF" }}
              >
                <Typography fontWeight="bold" sx={{ color: "#1976D2" }}>{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {section.content}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={4}>
          <img
            src="/images/etudiantFrance.webp"
            alt="Visa étudiant pour la France"
            style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default France2;
