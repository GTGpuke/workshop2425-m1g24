// src/components/layout/Header.js
import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="/images/Mini.webp" // Remplace cette image par ton logo
          alt="MiniCare Logo"
          className="logoImage"
        />
        <h2 className="logoText">MiniCare</h2>
      </div>

      <ul className="nav">
        <li className="navItem">Accueil</li>
        <li className="navItem">Mon espace</li>
        <li className="navItem">Médecins</li>
        <li className="navItem">Profil</li>
      </ul>

      <div className="avatarContainer">
        {/* Tu peux décommenter et ajouter l'avatar ici */}
        {/* <Avatar alt="Profile Avatar" src="/path/to/avatar.jpg" /> */}
      </div>
    </header>
  );
};

export default Header;
