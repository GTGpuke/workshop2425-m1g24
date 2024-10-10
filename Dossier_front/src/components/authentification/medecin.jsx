import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, TextField, Link } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CampaignIcon from '@mui/icons-material/Campaign';
import SearchIcon from '@mui/icons-material/Search';
import './medecin.css';

const Medecin = () => {
  return (
    <Box className="medecin-container">
        <div className='Medecin'>
      <Box className="search-section">
        <TextField 
          variant="outlined"
          placeholder="Recherche"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            )
          }}
          className="search-input"
        />
      </Box>

      <Typography variant="h4" className="section-title">
        Médecins
      </Typography>
      </div>
      <Box className="medecin-list">
        <Card className="medecin-card">
          <CardMedia
            component="img"
            className="medecin-image"
            image="/images/medecin1.webp"
            alt="Médecin 1"
          />
          <CardContent className="medecin-content">
            <Typography variant="h6">NOM Prénom</Typography>
            <Typography variant="body2">Spécialité</Typography>
            <Typography variant="body2" className="medecin-description">
              Présentation rapide du médecin
            </Typography>
          </CardContent>
          <Box className="medecin-actions">
            <IconButton>
              <ChatBubbleOutlineIcon className="medecin-icon" />
            </IconButton>
            <IconButton>
              <CampaignIcon className="medecin-icon" />
            </IconButton>
          </Box>
        </Card>

        <Card className="medecin-card">
          <CardMedia
            component="img"
            className="medecin-image"
            image="/images/medecin2.webp"
            alt="Médecin 2"
          />
          <CardContent className="medecin-content">
            <Typography variant="h6">NOM Prénom</Typography>
            <Typography variant="body2">Spécialité</Typography>
            <Typography variant="body2" className="medecin-description">
              Présentation rapide du médecin
            </Typography>
          </CardContent>
          <Box className="medecin-actions">
            <IconButton>
              <ChatBubbleOutlineIcon className="medecin-icon" />
            </IconButton>
            <IconButton>
              <CampaignIcon className="medecin-icon" />
            </IconButton>
          </Box>
        </Card>
      </Box>

      <Box className="footer">
        <Typography variant="body2">
          Envoyez-nous un e-mail: <Link href="mailto:contact@example.com">contact@example.com</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Medecin;
