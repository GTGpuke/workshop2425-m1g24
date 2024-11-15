import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FixeFooter from './fixeFooter';
import Chatbot from './Chatbot';
import CallButton from './Buttons/callButton';
import BrochureButton from './Buttons/brochureButton';
import ScrollToTop from './ScrollToTop';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './layout.css';

const Layout = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const location = useLocation();

  // Vérifie si la page est admin
  const isAdminPage = location.pathname === '/admin';
  const hideElements = ['/inscription', '/connexion', '/forgetPassword', '/admin'].includes(location.pathname);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div>
      <div className="layout-container">
        {/* Masque uniquement le Header et autres éléments supplémentaires sur la page admin */}
        {!isAdminPage && <Header />}

        <main>
          {children} {/* Affiche le contenu de la page admin ou d'autres pages */}

          {/* Affiche uniquement ces éléments si on n'est pas sur la page admin */}
          {!isAdminPage && !hideElements && (
            <>
              <div className="call"><ScrollToTop /></div>
              <div className="call"><CallButton /></div>
              <div className="call"><BrochureButton /></div>
            </>
          )}

          {/* Chatbot Toggle */}
          {!isAdminPage && !hideElements && (
            <div className="chatbot-container">
              {/* Icone pour ouvrir le Chatbot */}
              <img
                src="/images/chatjpt-removebg.png"
                alt="Chatbot"
                className="chat-icon"
                onClick={toggleChatbot}
              />
              {/* Affiche le chatbot avec l'icône de fermeture */}
              {isChatbotOpen && (
                <div className="chatbot-popup">
                  <div className="chatbot-header">
                    <h4>Mobiliis</h4>
                    <CloseIcon className="close-icon" onClick={closeChatbot} />
                  </div>
                  <Chatbot closeChat={closeChatbot} />
                </div>
              )}
            </div>
          )}
        </main>
        {!isAdminPage && <FixeFooter />}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
