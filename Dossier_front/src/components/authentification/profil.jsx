import React from 'react';
import './profil.css'; // Assurez-vous d'inclure le fichier CSS

const Profil = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="personal-info">
          <h2>Informations personnelles</h2>
          <form>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" placeholder="Nom" />
            </div>
            <div className="form-group">
              <label>Prénom</label>
              <input type="text" placeholder="Prénom" />
            </div>
            <div className="form-group">
              <label>Nom d'utilisateur</label>
              <input type="text" placeholder="Nom d'utilisateur" />
            </div>
            <button type="button" className="btn">Modifier son mot de passe</button>
          </form>
        </div>

        <div className="profile-actions">
          <h2>Profil</h2>
          <button className="action-button">Demande de récupération des informations personnelles</button>
          <button className="action-button">Demande de suppression des informations personnelles</button>
          <button className="action-button delete">Suppression définitive du compte</button>
        </div>
      </div>

      <footer>
        <a href="mailto:support@example.com">Envoyez-nous un e-mail</a>
      </footer>
    </div>
  );
};

export default Profil;
