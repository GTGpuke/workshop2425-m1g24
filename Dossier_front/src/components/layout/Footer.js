import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-block">
        <p>Politique de confidentialité</p>
        <p>Mentions légales</p>
      </div>

      <div className="footer2">
        <p>Rejoignez nous sur:</p>
        <div className="block-icones">
          <TwitterIcon />
          <XIcon />
          <FacebookIcon />
        </div>
      </div>

      <div className="footer-block">
        {/* <p><CallIcon /> : +33 (0)1 23 45 67 89</p> */}
        <p><MailOutlineIcon />: workshop2425.m1g24@gmail.com</p>
        <p><PlaceIcon /> : 123 Rue de l'Exemple, 75000 Paris</p>
      </div>
    </footer>
  );
};

export default Footer;