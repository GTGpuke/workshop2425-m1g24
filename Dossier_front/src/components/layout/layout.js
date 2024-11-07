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

  // Pages où le chatbot, le header, et le footer doivent être masqués
  const hideElements = ['/inscription', '/connexion', '/forgetPassword'].includes(location.pathname);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      <div className="layout-container">
        {!hideElements && <Header />}

        <main>
          {children}
          {!hideElements && (
            <>
              <div className="call"><ScrollToTop /></div>
              <div className="call"><CallButton /></div>
              <div className="call"><BrochureButton /></div>
            </>
          )}

          {/* Chatbot Toggle */}
          {!hideElements && (
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
                  <Chatbot /> {/* Un seul Chatbot rendu ici */}
                </div>
              )}
            </div>
          )}
        </main>

        <FixeFooter />
        {!hideElements && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
