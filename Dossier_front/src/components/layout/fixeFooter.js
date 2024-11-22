import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './fixeFooter.css';

const FixeFooter = () => {
  const navigate = useNavigate(); // Hook pour la navigation
  const phoneNumber = "+237655196254";
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    button: {
      width: '170px',
      height: '49px',
      backgroundColor: '#A93D87',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid white',
      borderRadius: '3px',
      left: '15px',
      position: 'fixed',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    icon: {
      fontSize: '24px',
    },
    navigateButton: {
      width: '170px',
      height: '49px',
      backgroundColor: '#A93D87',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid white',
      borderRadius: '3px',
      textDecoration: 'none',
      cursor: 'pointer',
      left: '210px',
      position: 'fixed',
    },
  };

  return (
    <div className="fixe-button">
      <div className='appellation'>
        <a href={`tel:${phoneNumber}`} style={styles.button}>
          <CallIcon style={styles.icon} />: +237 6 55 19 62 54
        </a>
      </div>
      <div className="telechargement">
        <button
          style={styles.navigateButton}
          onClick={() => navigate('/brochure')} // Navigue vers la page brochure
        >  <FileDownloadIcon />Télécharger la brochure
          
        </button>
      </div>
    </div>
  );
};

export default FixeFooter;
