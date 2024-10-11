import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer class='foot'>
      

      <div className="icones">
      <p>&copy; 2024 Mon Application</p>
  <TwitterIcon/>
  <XIcon/>
  <FacebookIcon/>
</div>
      
    </footer>
  );
};

export default Footer;

