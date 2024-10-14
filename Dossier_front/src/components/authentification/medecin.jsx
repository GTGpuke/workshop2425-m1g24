import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, TextField, Link } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CampaignIcon from '@mui/icons-material/Campaign';
import SearchIcon from '@mui/icons-material/Search';
import './medecin.css';
import MessageIcon from '@mui/icons-material/Message';


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

     
        <Card className="medecin-cardinal"  style={{backgroundColor: "#007dc4"}}>
           <div className="image-section">
             <img src="/images/medecin1.webp" alt="Médecin" className="accueil-image" />
             <Typography variant="h6">NOM Prénom</Typography>
            <Typography variant="body2">Spécialité</Typography>
           </div>

          <CardContent className="medecin-content">
            <Typography variant="body2" style={{color: "black", backgroundColor: "white", width: "300px", height: "200px", borderRadius: "10px", textAlign: "center"}}>
              Présentation rapide du médecin
            </Typography>
          </CardContent>

          <Box className="medecin-actions">
            <IconButton>
              <ChatBubbleOutlineIcon className="medecin-icon" />
            </IconButton>
          
          </Box>
          <div className="styles">
             <MessageIcon />
             <CampaignIcon />
           </div>
        </Card>
         <br />
       <Card className="medecin-cardinal" style={{backgroundColor: "#007dc4"}}>
           <div className="image-section">
             <img src="/images/medecin1.webp" alt="Médecin" className="accueil-image" />
             <Typography variant="h6">NOM Prénom</Typography>
            <Typography variant="body2">Spécialité</Typography>
           </div>

          <CardContent className="medecin-content">
          <Typography variant="body2" style={{color: "black", backgroundColor: "white", width: "300px", height: "200px", borderRadius: "10px", textAlign: "center", }}>
              Présentation rapide du médecin
            </Typography>
          </CardContent>
          
          <Box className="medecin-actions">
            <IconButton>
              <ChatBubbleOutlineIcon className="medecin-icon" />
            </IconButton>
          
          </Box>
          <div className="styles">
             <MessageIcon  style={{color: "black", backgroundColor: "white", width: "70px", height: "60px", borderRadius: "10px" }}/> <br />
             <CampaignIcon style={{color: "black", backgroundColor: "white", width: "70px", height: "60px", borderRadius: "10px" }} />
           </div>
        </Card>
      

      <Box className="footer">
        <Typography variant="body2">
          Envoyez-nous un e-mail: <Link href="mailto:contact@example.com">contact@example.com</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Medecin;