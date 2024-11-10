
import React, { useState, useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';
//import BrochureButton from './Buttons/brochureButton';
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
      width: '200px',
      height: '50px',
      backgroundColor: '#004080',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
      textDecoration: 'none',
      cursor: 'pointer',    
    },
    icon: {
      fontSize: '24px',
    },
  };


  return (
    <div className="fixe-button">
      <div className='appel'><a href={`tel:${phoneNumber}`} style={styles.button}>
      <CallIcon style={styles.icon} />: +237 6 55 19 62 54
    </a></div>
      {/* <div className='appel'><BrochureButton /></div>
      h1 */}
    </div> 
  );
};

export default FixeFooter;
