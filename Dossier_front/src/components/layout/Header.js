// src/components/layout/Header.js
import React from 'react';
import './Header.css'; 
import PersonIcon from '@mui/icons-material/Person';

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
  <PersonIcon style={{ width: "60px", height: "60px", marginRight: "100px", color: "white", cursor: "pointer" }} />
</div>

    </header>
  );
};

export default Header;
