import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import CallButton from './Buttons/callButton';
import BrochureButton from './Buttons/brochureButton'; // Utilise BrochureButton avec une majuscule
import ScrollToTop from './ScrollToTop';
import { Link, useLocation } from 'react-router-dom';
import './layout.css';
import CloseIcon from '@mui/icons-material/Close';

const Layout = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
  const location = useLocation();

  const hideElements = ['/inscription', '/connexion', '/forgetPassword'].includes(location.pathname);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      {!hideElements && <Header />}
      <ScrollToTop />

      <main>
        {children}
        <div className='call'> <ScrollToTop /></div>
        <div className='call'> <CallButton /></div>
        <div className='call'> <BrochureButton /></div> {/* Utilise BrochureButton ici */}
        <div className="chatbot-container">
          <img 
            src="/images/chatjpt-removebg.png"
            alt="MiniCare Logo"
            className="chat-icon"
            onClick={toggleChatbot}
          />
          {isChatbotOpen && (
            <div className="chatbot-popup">
              <div className="chatbot-header">
                <h4>Chat</h4>
                <CloseIcon className="close-icon" onClick={toggleChatbot} />
              </div>
              <Chatbot />
            </div>
          )}
          <ScrollToTop />
        </div>
      </main>
      
      {!hideElements && <Footer />}
    </div>
  );
};

export default Layout;
