import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import Contact from './contact';
import { Link, useLocation } from 'react-router-dom';
import './layout.css';
import CloseIcon from '@mui/icons-material/Close';

const Layout = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const location = useLocation();

  // Masquer le Header, le Footer et le chatbot pour ces routes spécifiques
  const hideHeaderFooter = ['/inscription', '/connexion', '/forgetPassword'].includes(location.pathname);

  // Fonction pour ouvrir/fermer le chatbot
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="layout-container">
      {/* Affiche le Header seulement si on ne masque pas */}
      {!hideHeaderFooter && <Header />}

      {/* Le contenu principal est toujours affiché */}
      <main>
        {children} {/* Contenu principal de la page, y compris le formulaire */}
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

      {/* Affiche le Footer seulement si on ne masque pas */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
