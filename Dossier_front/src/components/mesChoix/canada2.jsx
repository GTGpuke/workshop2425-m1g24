import React, { useState } from "react";
import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

const Canada2 = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const sections = [
    {
      title: "Conditions d'obtention du visa étudiant",
      content: (
        <div>
          <Typography>
            Pour faire une demande pour un permis d’études au Canada, vous devez :
          </Typography>
          <ul>
            <li>Avoir et justifier un projet d’étude cohérent ;</li>
            <li>Détenir une admission dans un établissement d’enseignement désigné ;</li>
            <li>Prouver qu’on est en mesure de financer vos études ;</li>
            <li>
              Obtenir un certificat d’acceptation du Québec (CAQ) si vous prévoyez
              fréquenter un établissement au Québec ;
            </li>
            <li>
              Assurer l’agent d’immigration de votre départ du Canada, une fois vos études
              terminées.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Travail des étudiants internationaux",
      content: (
        <Typography>
          Le permis d’études canadien vous permet de travailler en parallèle de vos
          études jusqu’à 20 heures par semaine pendant les trimestres scolaires et à temps
          plein pendant les vacances.
        </Typography>
      ),
    },
  ];

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#FAFAFA" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="#001A57">
        Permis d'études canadiennes
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Pour pouvoir partir et vous installer au Canada en tant qu’étudiant international,
        vous aurez besoin d’un permis d’études, connu également sous l’appellation « visa
        étudiant canadien ». Le permis d’études est obligatoire pour toute formation
        supérieure à 6 mois.
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Left Content Section */}
        <Grid item xs={12} md={6}>
          {sections.map((section, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={() => toggleExpand(index)}
              sx={{
                marginBottom: "20px", // Adds spacing between elements
                border: "2px solid #004080", // Border color
                borderRadius: "4px", // Rounded corners
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index ? (
                    <DashCircle size={24} color="#004080" />
                  ) : (
                    <PlusCircle size={24} color="#004080" />
                  )
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: "#FFF",
                  padding: "10px 15px",
                }}
              >
                <Typography fontWeight="bold" sx={{ color: "#1976D2" }}>
                  {section.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "15px" }}>{section.content}</AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {/* Right Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src="/images/catable.jpg"
            alt="Canada Visa"
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              borderRadius: "8px",
              margin: "auto",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Canada2;
