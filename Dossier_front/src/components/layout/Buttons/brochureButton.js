import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer le hook useNavigate
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './brochure.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BrochureButton() {
  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [formData, setFormData] = React.useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
  });

  const navigate = useNavigate(); // Initialiser le hook de navigation

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/enregistrer', formData);
      handleClose(); // Ferme le dialogue
      navigate('/telechargeBrochure'); // Navigation vers TelechargeBrochure
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      handleClose();
      navigate('/telechargeBrochure'); // Navigue même en cas d'erreur
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const styles = {
    button: {
      minWidth: '50px',
      height: '50px',
      backgroundColor: '#004080',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      position: 'fixed',
      top: '280px',
      right: '20px',
      border: 'none',
      zIndex: isMobile ? 1000 : 1,
    },
    icon: {
      fontSize: '24px',
    },
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} style={styles.button}>
        <FileDownloadIcon style={styles.icon} />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Télécharger notre documentation"}
          <Button onClick={handleClose} style={{ position: 'absolute', right: 16, top: 16 }}>X</Button>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogContentText>
              Veuillez remplir ce formulaire.
            </DialogContentText>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
              style={{ display: 'block', margin: '8px 0' }}
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
              style={{ display: 'block', margin: '8px 0' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ display: 'block', margin: '8px 0' }}
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
              required
              style={{ display: 'block', margin: '8px 0' }}
            />
            <DialogActions>
              <Button onClick={handleClose}>Annuler</Button>
              <Button onClick={handleSubmit} type="button">
                Valider
              </Button>
            </DialogActions>

          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
