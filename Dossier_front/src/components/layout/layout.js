import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { Link } from 'react-router-dom';
import './layout.css';
import CloseIcon from '@mui/icons-material/Close';

const Layout = ({ children }) => {

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Fonction pour ouvrir/fermer le chatbot
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };
  return (
    <div>
      <Header />
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
          <Chatbot /> {/* Le composant du chatbot */}
        </div>
      )}
    
          <Link to="/" style={{position:"fixed", bottom: "95px", left: "1370px"}}>Envoyez nous un email</Link> {/* Lien vers la page Accueil */}
         
        </div>
      </main> 
      <Footer />
    </div>
  );
};

export default Layout;