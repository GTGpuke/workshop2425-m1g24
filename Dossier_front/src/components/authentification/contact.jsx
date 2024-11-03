import React, { useState } from 'react';
import './contact.css';

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
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Nous Contacter</h2>
      
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
  );
};

export default ContactForm;
