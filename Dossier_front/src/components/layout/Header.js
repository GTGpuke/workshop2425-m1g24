import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMobiliisMenu, setShowMobiliisMenu] = useState(false);
  const [showOffersMenu, setShowOffersMenu] = useState(false);
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

  // gestion des sous-menus
  const handleMouseEnter = () => {
    setShowServicesMenu(true);
  };
  const handleMouseLeave = () => {
    setShowServicesMenu(false);
  };

  const handleMobiliisMouseEnter = () => {
    setShowMobiliisMenu(true);
  };
  const handleMobiliisMouseLeave = () => {
    setShowMobiliisMenu(false);
  };

  const handleOffersMouseEnter = () => {
    setShowOffersMenu(true);
  };
  const handleOffersMouseLeave = () => {
    setShowOffersMenu(false);
  };
  return (

    <>

      {menuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      <header className='head'>
        <div className="header-infos">
          <div className="tel">
            <div className="phone-numbers">
            <span> <CallIcon className="phone-icon" />  </span>
              <span>{t('header.phone1')}</span>
              <span>{t('header.phone2')}</span>
              <span>{t('header.phone3')}</span>

            </div>
          </div>
          <div className="informat">
            <div className="email" sytle={{ color: 'white' }}><p><MailOutlineIcon /> {t('header.email')}</p></div>
            <div className="lieu"><p><PlaceIcon /> {t('header.position')}</p></div>
          </div>
        </div>

        <div className="header-main">
          <div className="logo">
            <img src="/images/Manitour.png" alt="MiniCare Logo" className="logoImage" />
            <h4 className="slogan">Mobiliis Project Agency</h4>
          </div>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>

            <CloseIcon className="close-icon" onClick={toggleMenu} />

            <ul className="nav-list">
              <li className="navItem">
                <Link to="/" className="navLink" onClick={toggleMenu}>{t('header.home')}</Link>
              </li>


              <li
                className="navItem"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}
              >
                <Link to="/home" className="navLink">
                  {t('header.services')} <KeyboardArrowDownIcon />
                </Link>
                {showServicesMenu && (
                  <ul className="subMenu">
                    <li><Link to="/services/immigration">Services d'immigration</Link></li>
                    <li><Link to="/services/accompagnement">Services d'accompagnement</Link></li>
                    <li><Link to="/services/formation">Formation linguistique</Link></li>
                    <li><Link to="/services/informations">Tarifs prestations</Link></li>
                    <li><Link to="/services/avantages">Avantages Mobiliis</Link></li>
                  </ul>
                )}
              </li>


              <li
                className="navItem"
                onMouseEnter={handleMobiliisMouseEnter}
                onMouseLeave={handleMobiliisMouseLeave}
                style={{ position: 'relative' }}
              >
                <Link to="#" className="navLink">
                  {t('header.mobiliis')} <KeyboardArrowDownIcon />
                </Link>
                {showMobiliisMenu && (
                  <ul className="subMenu">
                    <li><Link to="/presentation">Présentation</Link></li>
                    <li><Link to="/mobiliis/avantages">Nos avantages employés</Link></li>
                    <li><Link to="/mobiliis/partenariats">Nos partenariats</Link></li>
                  </ul>
                )}
              </li>

              <li
                className="navItem"
                onMouseEnter={handleOffersMouseEnter}
                onMouseLeave={handleOffersMouseLeave}
                style={{ position: 'relative' }}
              >
                <Link to="#" className="navLink">
                  {t('header.offers')} <KeyboardArrowDownIcon />
                </Link>
                {showOffersMenu && (
                  <ul className="subMenu">
                    <li><Link to="/offers/offer1">Offres d'emploi</Link></li>
                    <li><Link to="/offers/offer2">Processus recrutement</Link></li>
                    <li><Link to="/offers/offer3">témoignages</Link></li>
                  </ul>
                )}
              </li>

              <li className="navItem">
                <Link to="/medecin" className="navLink" >{t('header.destinations')}<KeyboardArrowDownIcon />
                </Link>
              </li>
              <li className="navItem">
                <Link to="/contact" className="navLink" >Contact
                </Link>
              </li>
            </ul>
          </nav>
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

            <div className="burger-container">
              {menuOpen ? (
                <CloseIcon className="burger-icon" onClick={toggleMenu} style={{ color: "#004080" }} />
              ) : (
                <MenuIcon className="burger-icon" onClick={toggleMenu} style={{ color: "#004080" }} />
              )}
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
