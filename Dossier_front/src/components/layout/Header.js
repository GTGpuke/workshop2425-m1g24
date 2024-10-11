import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import './Header.css'; 
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre la connexion
  const [menuOpen, setMenuOpen] = useState(false); // État pour contrôler le menu déroulant

  useEffect(() => {
    // Appel d'une API pour vérifier l'état de la session
    const checkSession = async () => {
      const response = await fetch('/api/check-session', {
        method: 'GET',
        credentials: 'include' // Inclure les cookies de session
      });
      if (response.ok) {
        setIsLoggedIn(true); // L'utilisateur est connecté
      } else {
        setIsLoggedIn(false); // L'utilisateur n'est pas connecté
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include' // Inclure les cookies de session
    });
    setIsLoggedIn(false); // Mettre à jour l'état de connexion
    console.log('Déconnexion réussie'); // Log pour déboguer
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Inverser l'état du menu
  };

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
        <li className="navItem"><Link to="/" className="navLink">Accueil</Link></li>
        <li className="navItem"><Link to="/home" className="navLink">Mon espace</Link></li>
        <li className="navItem"><Link to="/medecin" className="navLink">Médecins</Link></li>
        <li className="navItem"><Link to="/profil" className="navLink">Profil</Link></li>
      </ul>

      <div className="avatarContainer">
        <PersonIcon 
          style={{ width: "60px", height: "60px", marginRight: "10px", color: "white", cursor: "pointer" }} 
          onClick={toggleMenu} // Ouvrir le menu
        />
        {menuOpen && (
          <div className="dropdownMenu">
            {isLoggedIn ? (
              <span className="logoutLabel" onClick={handleLogout}>Déconnexion</span>
            ) : (
              <Link to="/connexion" className="navLink" onClick={() => setMenuOpen(false)}>
                Connexion
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
