import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
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
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
  });

  const navigate = useNavigate();

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
    
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      await axios.post('/api/enregistrer', formData);
      handleClose();
      navigate('/telechargeBrochure');
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      handleClose();
      navigate('/telechargeBrochure'); 
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
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
      zIndex: 1000,
    },
    icon: {
      fontSize: '30px',
    },
  };

  return (
    <React.Fragment>
      {!isMobile && (
        <Button onClick={handleClickOpen} style={styles.button}>
          <FileDownloadIcon style={styles.icon} />
        </Button>
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
        fullWidth
        sx={{
          width: '580px',
          height: '500px',
          marginLeft: '700px',
          marginTop: '220px',
        }}
      >
        <DialogTitle className="dialog-title">
          {"Télécharger notre documentation"}
          <Button
            onClick={handleClose}
            style={{ position: 'absolute', left: 206, bottom: 206 }}
          >
            X
          </Button>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogContentText className="dialog-text">
              Veuillez remplir ce formulaire.
            </DialogContentText>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="dialog-input"
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="dialog-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="dialog-input"
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="dialog-input"
            />
            <DialogActions className="dialog-actions">
              <Button onClick={handleClose} className="cancel-button">
                Annuler
              </Button>
              <Button type="submit" className="submit-button">
                Valider
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
