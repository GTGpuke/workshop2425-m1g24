import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 
  const [showLangMenu, setShowLangMenu] = useState(false); 
  const [showProfileMenu, setShowProfileMenu] = useState(false); 
  const { i18n, t } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch('/api/check-session', {
        method: 'GET',
        credentials: 'include'
      });
      if (response.ok) {
        setIsLoggedIn(true); 
      } else {
        setIsLoggedIn(false); 
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include'
    });
    setIsLoggedIn(false); 
    console.log('Déconnexion réussie');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-infos">
        <p><CallIcon /> {t('header.phone')}</p>
        <p><MailOutlineIcon /> {t('header.email')}</p>
      </div>

      <div className="header-main">
        <div className="logo">
          <img src="/images/Manitour.png" alt="MiniCare Logo" className="logoImage" />
          <h4 className="slogan">Mobiliis Project Agency</h4>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="navItem">
              <Link to="/" className="navLink" onClick={toggleMenu}>{t('header.home')}</Link>
            </li>
            <li className="navItem">
              <Link to="/home" className="navLink" onClick={toggleMenu}>{t('header.services')} <KeyboardArrowDownIcon /></Link>
            </li>
            <li className="navItem">
              <Link to="/medecin" className="navLink" onClick={toggleMenu}>{t('header.mobiliis')}</Link>
            </li>
            <li className="navItem">
              <Link to="/destinations" className="navLink" onClick={toggleMenu}>{t('header.destinations')}<KeyboardArrowDownIcon /></Link>
            </li>
            <li className="navItem">
              <Link to="/profil" className="navLink" onClick={toggleMenu}>{t('header.offers')}</Link>
            </li>
          </ul>
        </nav>

        <div className="burger-container">
          {menuOpen ? (
            <CloseIcon className="burger-icon" onClick={toggleMenu} style={{ color: "#004080" }} />
          ) : (
            <MenuIcon className="burger-icon" onClick={toggleMenu} style={{ color: "#004080" }} />
          )}
        </div>

        <div className="avatarContainer">
          <div 
            className="langIconContainer" 
            onMouseEnter={() => setShowLangMenu(true)} 
            onMouseLeave={() => setShowLangMenu(false)}
          >
            <LanguageIcon style={{ width: "40px", height: "40px", marginRight: "10px", color: "#004080", cursor: "pointer" }} />
            
            {showLangMenu && (
              <div className="langMenu">
                <p onClick={() => changeLanguage('fr')}>FRA</p>
                <p onClick={() => changeLanguage('en')}>ANG</p>
              </div>
            )}
          </div>

          <div 
            className="profileIconContainer" 
            onMouseEnter={() => setShowProfileMenu(true)} 
            onMouseLeave={() => setShowProfileMenu(false)}
          >
            <PersonIcon style={{ width: "60px", height: "60px", marginRight: "10px", color: "#004080", cursor: "pointer" }} />
            
            {showProfileMenu && (
              <div className="dropdownMenu">
                {isLoggedIn ? (
                  <span className="logoutLabel" onClick={handleLogout}>
                    {t('header.logout')}
                  </span>
                ) : (
                  <Link to="/connexion" className="navLink" onClick={() => setShowProfileMenu(false)}>
                    {t('header.login')}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
