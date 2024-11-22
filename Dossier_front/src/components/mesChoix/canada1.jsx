import React, { useState } from "react";
import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

const Canada1 = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const sections = [
    {
      title: "Diplômes",
      content: (
        <div>
          <Typography>
            Le système d'enseignement canadien est très particulier. En général, les diplômes offerts comprennent :
          </Typography>
          <ul>
            <li>Diplômes d'études secondaires générales</li>
            <li>Diplômes d'études collégiales et universitaires : DEC, AEC, etc.</li>
            <li>1er Cycle : Baccalauréat, Certificat</li>
            <li>2ème Cycle : Masters, Maîtrise, etc.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Organisation des études au Canada Anglophone",
      content: (
        <div>
          <Typography>
            Le système d’enseignement au Canada anglophone est proche des États-Unis. Il comprend :
          </Typography>
          <ul>
            <li>Cycle Undergraduate : Diplômes en 2-4 ans</li>
            <li>Cycle Graduate : Masters et Doctorats</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Organisation des études au Québec",
      content: (
        <div>
          <Typography>
            L'organisation des études au Québec est différente. Elle inclut :
          </Typography>
          <ul>
            <li>CÉGEP : Diplôme préparatoire ou technique</li>
            <li>Université : Baccalauréat, Maîtrise, Doctorat</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Admission",
      content: (
        <Typography>
          Les universités canadiennes ont des critères précis, incluant les résultats académiques et la maîtrise de l'anglais ou du français.
        </Typography>
      ),
    },
  ];

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#FAFAFA" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="#A93D87">
        Choisissez votre programme
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Au Canada, les possibilités sont infinies ! Découvrez les possibilités qui s'offrent aux étudiants internationaux.
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src="/images/etudiantFrance.webp"
            alt="Canada Parliament"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={6}>
          {sections.map((section, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={() => toggleExpand(index)}
              sx={{
                marginBottom: "20px", // Adds spacing between elements
                border: "2px solid #004080", // Border color
                borderRadius: "6px", // Rounded corners
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
      </Grid>
    </Box>
  );
};

export default Canada1;
