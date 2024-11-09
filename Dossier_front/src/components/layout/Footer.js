import React from 'react';
import { Box, Grid, Typography, Button, IconButton, Stack, Link, TextField } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#004080', color: 'white', py: 4 }}>
      <Grid container spacing={4} justifyContent="center" sx={{ bgcolor: '#004080' }}>
        <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom>SUIVEZ NOS ACTUALITES !</Typography>
          <Stack spacing={1}>
            <Typography variant="h6" gutterBottom>Abonnez-vous à notre Newsletter</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Email"
                sx={{ bgcolor: 'white', flexGrow: 1, height: '100%' }}
                InputProps={{
                  sx: { height: 40 } // Hauteur du champ d'entrée
                }}
              />
              <Button
                variant="contained"
                color="warning"
                sx={{ height: 40, ml: -1, bgcolor: '#C90076' }} // Hauteur du bouton pour correspondre à celle du champ, et marge négative pour coller au champ
              >
                S'ABONNER
              </Button>
            </Box>
            <Typography>Nous suivre sur :</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mt: 1, ml: '55px' }}>
  <IconButton>
    <LinkedInIcon sx={{ color: 'white', fontSize: 32 }} />
  </IconButton>
  <IconButton>
    <YouTubeIcon sx={{ color: 'white', fontSize: 32 }} />
  </IconButton>
  <IconButton>
    <FacebookIcon sx={{ color: 'white', fontSize: 32 }} />
  </IconButton>
</Box>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom>CONTACTEZ-NOUS</Typography>
          <Stack spacing={2}>
            <Typography>+33 (0)1 56 02 00 50</Typography>
            <Typography>contact@escg-paris.com</Typography>
            <Typography>166 Bd du Montparnasse 75014 PARIS</Typography>
            <Typography>Du lundi au vendredi de 8h30 à 18h00</Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom>MOBILIIS</Typography>
          <Typography>Nos offres</Typography>
          <Typography>Parainage</Typography>
          <Typography>Informations pratiques</Typography>
          <Typography>Financement</Typography>
          <Typography>Frais de scolarité</Typography>
        </Grid>

        <Grid item xs={12} sm={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant="h6" gutterBottom>INFORMATIONS LÉGALES</Typography>
          <Stack spacing={2}>
            <Link href="/mentions-legales" color="inherit" underline="hover" sx={{ '&:hover': { color: '#A93D87' } }}>
              <Typography>Mentions Légales</Typography>
            </Link>
            <Link href="/politique-confidentialite" color="inherit" underline="hover" sx={{ '&:hover': { color: '#A93D87' } }}>
              <Typography>Politique de confidentialité</Typography>
            </Link>
            <Link href="/cookies-consentement" color="inherit" underline="hover" sx={{ '&:hover': { color: '#A93D87' } }}>
              <Typography>Cookies et consentement</Typography>
            </Link>

          </Stack>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: '#004080', py: 5, color: 'white', textAlign: 'center', paddingTop: '40px', }}>
        <Typography variant="body2">
          Copyright © 2024 | Alex KUETCHE. EasyTech solution WebSite
        </Typography>
        <Typography variant="body2">Mise à jour : le 31 Octobre 2024</Typography>
      </Box>
    </Box>
  );
}
