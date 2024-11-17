
import React, { useState, useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';
import BrochureButton from './Buttons/brochureButton';
import './fixeFooter.css';

const FixeFooter = () => {
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
      width: '180px',
      height: '46px',
      backgroundColor: '#A93D87',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid white',
      borderRadius: '3px',
      left: '10px',
      position: 'fixed',
       textDecoration: 'none',
      cursor: 'pointer',
    },
    icon: {
      fontSize: '24px',
    },
  };


  return (
    <div className="fixe-button">
      <div className='appellation'><a href={`tel:${phoneNumber}`} style={styles.button}>
        <CallIcon style={styles.icon} />: +237 6 55 19 62 54
      </a>
      </div>
      <div className="call"><BrochureButton /> télécharger</div>
    </div>
  );
};

export default FixeFooter;
