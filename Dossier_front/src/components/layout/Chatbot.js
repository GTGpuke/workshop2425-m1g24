import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Définir un thème personnalisé
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#A93D87',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#007dc4',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// Les étapes de la conversation
const steps = [
  {
    id: '1',
    message: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'questions', label: 'J\'ai des questions', trigger: '3' },
      { value: 'aide', label: 'J\'ai besoin d\'aide', trigger: '4' },
    ],
  },
  {
    id: '3',
    message: 'Quelest votre questions ?',
    trigger: '5',
  },
  {
    id: '4',
    message: 'Je suis là pour vous aider ! Quelle est votre question ?',
    trigger: '5',
  },
  {
    id: '5',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    message: 'Pouvez-vous me donner plus de détails sur "{previousValue}" ?',
    trigger: '7',
  },
  {
    id: '7',
    user: true,
    trigger: '8',
  },
  {
    id: '8',
    message: 'Merci pour ces informations concernant "{previousValue}", je vais revenir vers vous bientôt.',
    end: true, // Fin de la conversation après avoir demandé plus de détails
  },
];

const Chatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
};

export default Chatbot;
