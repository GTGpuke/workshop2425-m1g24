import React, { useState } from 'react';
import './contact.css';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Map from './map';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    ville: '',
    pays: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici le code pour envoyer les données à votre backend
  };

  return (
    <div className="contact-container">
      <div className="infos-contact">
        <div className="localisation">
          <p> <PlaceIcon className="icone" style={{ fontSize: '60px' }} /></p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Ndogbong-Douala Rue du commissariat 10ème</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}> Horaires: lundi-vendredi 08h-17h30</p>

        </div>
        <div className="phone">
          <p><CallIcon className="icone" style={{ fontSize: '60px' }} /></p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>+237 675 07 00 50 / +237 6 55 19 62 54</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}> +33 7 58 10 31 17</p>
        </div>
        <div className="mail">
          <p > <MailOutlineIcon className="icone" style={{ fontSize: '60px' }} /></p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}> akuetche55@gmail.com</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>wwww.mobiliis.com</p>
        </div>
      </div>
      <div className="bloc-contact">
        <div className="map"><Map /></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 style={{ color: '#1976d2' }}>Nous Contacter</h2>

          <div className="form-row">
            <div>
              <label>Nom<span>*</span></label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
            </div>
            <div>
              <label>Prénom<span>*</span></label>
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Email<span>*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Téléphone<span>*</span></label>
              <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Ville<span>*</span></label>
              <input type="text" name="ville" value={formData.ville} onChange={handleChange} required />
            </div>
            <div>
              <label>Pays<span>*</span></label>
              <input type="text" name="pays" value={formData.pays} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-full">
            <label>Message<span>*</span></label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit">Envoyer Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
