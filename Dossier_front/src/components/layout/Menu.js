// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Menu = ({ menuOpen, toggleMenu, t }) => {
  return (
    <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
      <ul className="nav-list">
        <li className="navItem">
          <Link to="/" className="navLink" onClick={toggleMenu}>{t('header.home')}</Link>
        </li>
        <li className="navItem">
          <Link to="/home" className="navLink" onClick={toggleMenu}>
            {t('header.services')} <KeyboardArrowDownIcon />
          </Link>
        </li>
        <li className="navItem">
          <Link to="/medecin" className="navLink" onClick={toggleMenu}>{t('header.mobiliis')}</Link>
        </li>
        <li className="navItem">
          <Link to="/destinations" className="navLink" onClick={toggleMenu}>
            {t('header.destinations')} <KeyboardArrowDownIcon />
          </Link>
        </li>
        <li className="navItem">
          <Link to="/profil" className="navLink" onClick={toggleMenu}>{t('header.offers')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
