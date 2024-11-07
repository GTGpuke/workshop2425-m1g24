import React from 'react';
import { Box, Grid, Typography, Button, IconButton, Stack, Link } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#004080', color: 'white', py: 4 }}>
      <Grid container spacing={4} justifyContent="center" sx={{ height: '290px', bgcolor: '#004080' }}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>ESCG PARIS</Typography>
          <Typography>ÉCOLE SUPÉRIEURE DE COMMERCE ET DE GESTION</Typography>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ gap: '10px' }}>
          <Typography variant="h6" gutterBottom>CONTACTEZ-NOUS</Typography>
          <Stack spacing={2}>
            <Typography>+33 (0)1 56 02 00 50</Typography>
            <Typography>contact@escg-paris.com</Typography>
            <Typography>166 Bd du Montparnasse 75014 PARIS</Typography>
            <Typography>Du lundi au vendredi de 8h30 à 18h00</Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>ESCG-PARIS</Typography>
          <Typography>L'école</Typography>
          <Typography>Témoignages</Typography>
          <Typography>Informations pratiques</Typography>
          <Typography>Financement</Typography>
          <Typography>Frais de scolarité</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>INFORMATIONS LÉGALES</Typography>
          <Stack spacing={2}>
            <Link href="/mentions-legales" color="inherit" underline="hover">
              <Typography>Mentions Légales</Typography>
            </Link>

            <Link href="/politique-confidentialite" color="inherit" underline="hover">
              <Typography>Politique de confidentialité</Typography>
            </Link>

            <Link href="/cookies-consentement" color="inherit" underline="hover">
              <Typography>Cookies et consentement</Typography>
            </Link>

            <Link
              href="/conditions-generales-ventes"
              color="inherit"
              sx={{ textDecoration: 'none',
                '&:hover': {
                  color: '#A93D87',
                  textDecoration: 'none',
                },
              }}
            >
              <Typography>Conditions Générales de Ventes</Typography>
            </Link>

            <Link href="/reglement-interieur" color="inherit" underline="hover">
              <Typography>Règlement Intérieur de l'ESCG-PARIS</Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: '#fff', color: '#004080', py: 4, textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#004080',
            color: 'white',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          📄 TÉLÉCHARGER LE CERTIFICAT QUALIOPI
        </Button>
      </Box>

      <Box sx={{ bgcolor: '#A93D87', py: 2, color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">
          Copyright © 2024 | Alex KUETCHE. EasyTech solution WebSite
        </Typography>
        <Typography variant="body2">Mise à jour : le 31 Octobre 2024</Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            mt: 2,
            color: 'white',
          }}
        >
          <IconButton>
            <LinkedInIcon sx={{ color: 'white', fontSize: 32 }} /> {/* Augmente la taille à 32px */}
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: 'white', fontSize: 32 }} />
          </IconButton>
          <IconButton>
            <YouTubeIcon sx={{ color: 'white', fontSize: 32 }} />
          </IconButton>
          <IconButton>
            <FacebookIcon sx={{ color: 'white', fontSize: 32 }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: 'white', fontSize: 32 }} />
          </IconButton>
        </Box>
      </Box>


    </Box>
  );
}
