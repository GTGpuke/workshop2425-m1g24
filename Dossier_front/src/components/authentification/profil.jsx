import React, { useEffect, useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import './profil.css';

const Profil = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    mot_de_passe: '',
    authentification_carte_vitale: false,
    numero_securite_sociale: '',
    date_naissance: '',
    sexe: '',
    est_abonne: false,
    adresse_complete: '',
    description: ''
  });
  const userId = 5; // Remplacez ceci par l'ID dynamique si nécessaire

  const fetchPatientData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/patients/${userId}`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données du patient.');
      }

      const data = await response.json();
      console.log('Données récupérées:', data);
      setUserData(data);
      setFormData({
        nom: data.nom || '',
        prenom: data.prenom || '',
        email: data.email || '',
        telephone: data.telephone || '',
        mot_de_passe: '',
        authentification_carte_vitale: data.authentification_carte_vitale || false,
        numero_securite_sociale: data.numero_securite_sociale || '',
        date_naissance: data.date_naissance || '',
        sexe: data.sexe || '',
        est_abonne: data.est_abonne || false,
        adresse_complete: data.adresse_complete || '',
        description: data.description || ''
      });
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatientData();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewPassword('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangePassword = async () => {
    try {
      const response = await fetch(`http://localhost:3001/patients/${userId}/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mot_de_passe: newPassword }),
      });

      if (response.ok) {
        console.log('Mot de passe modifié avec succès !');
        handleClose();
      } else {
        console.error('Erreur lors de la modification du mot de passe.');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/patients/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          mot_de_passe: newPassword // Inclure le nouveau mot de passe
        }),
      });

      if (response.ok) {
        console.log('Données mises à jour avec succès !');
        handleClose();
        fetchPatientData(); // Recharger les données après la mise à jour
      } else {
        console.error('Erreur lors de la mise à jour des données.');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!userData) {
    return <div>Aucune donnée trouvée pour cet utilisateur.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="personal-info">
          <h2>Informations personnelles</h2>
          <form>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" value={userData.nom || ''} readOnly />
            </div>
            <div className="form-group">
              <label>Prénom</label>
              <input type="text" value={userData.prenom || ''} readOnly />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={userData.email || ''} readOnly />
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input type="text" value={userData.telephone || ''} readOnly />
            </div>
            <button type="button" className="btn" onClick={handleOpen}>
              Modifier ses informations
            </button>
          </form>
        </div>

        <div className="profile-actions">
          <h2>Actions</h2>
          <button className="action-button">Demande de récupération des informations personnelles</button>
          <button className="action-button">Demande de suppression des informations personnelles</button>
          <button className="action-button delete">Suppression définitive du compte</button>
        </div>
      </div>

      <footer>
        <a href="mailto:support@example.com">Envoyez-nous un e-mail</a>
      </footer>

      {/* Modal pour la modification des informations et du mot de passe */}
      <Modal open={open} onClose={handleClose}>
        <div className="modal-container" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
          <h2>Modifier les informations personnelles</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nom"
              variant="outlined"
              fullWidth
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Prénom"
              variant="outlined"
              fullWidth
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Téléphone"
              variant="outlined"
              fullWidth
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              type="password"
              label="Nouveau mot de passe"
              variant="outlined"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Numéro de sécurité sociale"
              variant="outlined"
              fullWidth
              name="numero_securite_sociale"
              value={formData.numero_securite_sociale}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Date de naissance (YYYY-MM-DD)"
              variant="outlined"
              fullWidth
              name="date_naissance"
              value={formData.date_naissance}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Sexe"
              variant="outlined"
              fullWidth
              name="sexe"
              value={formData.sexe}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Adresse complète"
              variant="outlined"
              fullWidth
              name="adresse_complete"
              value={formData.adresse_complete}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              name="description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
              Valider
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Annuler
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Profil;
