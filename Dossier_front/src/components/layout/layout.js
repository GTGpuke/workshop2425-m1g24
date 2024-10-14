import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import Contact from './contact';
import { Link, useLocation } from 'react-router-dom'; // masquer les éléments qu'on ne souhaite pas afficher
import './layout.css';
import CloseIcon from '@mui/icons-material/Close';

const Layout = ({ children }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
  // Utiliser le hook useLocation directement dans le composant Layout
  const location = useLocation();

  // Masquer les éléments pour certaines routes
  const hideElements = ['/inscription', '/connexion', '/forgetPassword'].includes(location.pathname);

  // Fonction pour ouvrir/fermer le chatbot
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      {!hideElements && <Header />}


      <main>
        {children} {/* Contenu principal de la page */}
        <div className="chatbot-container">
          <img 
            src="/images/chatjpt-removebg.png" // Remplace cette image par ton logo
            alt="MiniCare Logo"
            className="chat-icon"
            onClick={toggleChatbot}
          />
          {isChatbotOpen && (
            <div className="chatbot-popup">
              <div className="chatbot-header">
                <h4>Chat</h4>
                <CloseIcon className="close-icon" onClick={toggleChatbot} /> {/* Ferme le chatbot */}
              </div>
              <Contact />
              <Chatbot /> {/* Le composant du chatbot */}
            </div>
          )}
          <Link to="/" style={{position:"fixed", bottom: "95px", left: "1370px"}}>Envoyez-nous un email</Link> {/* Lien vers la page Accueil */}
        </div>
      </main>
      
      {!hideElements && <Footer />}
    </div>
  );
};

export default Layout;
