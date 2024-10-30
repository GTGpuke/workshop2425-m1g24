import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

import CallButton from './Buttons/callButton';
import BrochureButton from './Buttons/brochureButton'; // Utilise BrochureButton avec une majuscule
import ScrollToTop from './ScrollToTop';

import Contact from './contact';

import { Link, useLocation } from 'react-router-dom';
import './layout.css';
import CloseIcon from '@mui/icons-material/Close';

const Layout = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Utilisez une seule fois `useLocation()`
  const location = useLocation();

  // Utilisez `location` dans les constantes
  const hideElements = ['/inscription', '/connexion', '/forgetPassword'].includes(location.pathname);
  const hideHeaderFooter = ['/inscription', '/connexion', '/forgetPassword'].includes(location.pathname);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      {!hideElements && <Header />}
      <div className="layout-container">
        {!hideHeaderFooter && <Header />}

        <main>
          {children}
          <div className='call'> <ScrollToTop /></div>
          <div className='call'> <CallButton /></div>
          <div className='call'> <BrochureButton /></div>
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

          {!hideHeaderFooter && (
            <div className="chatbot-container">
              <img
                src="/images/chatjpt-removebg.png"
                alt="Chatbot"
                className="chat-icon"
                onClick={toggleChatbot}
              />
              {isChatbotOpen && (
                <div className="chatbot-popup">
                  <div className="chatbot-header">
                    <h4>Chat</h4>
                    <CloseIcon className="close-icon" onClick={toggleChatbot} />
                  </div>
                  <Contact />
                  <Chatbot />
                </div>
              )}
              <Link to="/" className="email-link">Envoyez-nous un email</Link>
            </div>
          )}
        </main>

        {!hideHeaderFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
