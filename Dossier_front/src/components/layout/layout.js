import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children} {/* Contenu principal de la page */}
      </main>
      <div><Footer/></div>
    </div>
  );
};

export default Layout;

