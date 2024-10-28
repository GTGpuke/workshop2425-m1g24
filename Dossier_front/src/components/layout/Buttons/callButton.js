import React from 'react';

const CallButton = () => {
  const phoneNumber = "+237655196254"; 

  return (
    <a href={`tel:${phoneNumber}`} style={styles.button}>
      Appeler
    </a>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#004080', // Couleur de fond
    color: 'white', // Couleur du texte
    borderRadius: '5px', // Arrondir les coins
    textDecoration: 'none', // Retirer le soulignement
    fontSize: '16px', // Taille du texte
    textAlign: 'center',
    display: 'inline-block', // Afficher comme un bouton
  }
};

export default CallButton;
