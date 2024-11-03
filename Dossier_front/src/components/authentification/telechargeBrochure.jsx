import React from 'react';
import DownloadIcon from '@mui/icons-material/Download'; // Optionnel, pour l'icône de téléchargement

const TelechargeBrochure = () => {
  return (
    <div>
      <a
        href="/documents/etude_cas.pdf" // Chemin vers le fichier PDF
        download="Mobiliis_brochure.pdf" // Nom sous lequel le fichier sera téléchargé
        target="_blank" // Ouvre dans un nouvel onglet pour éviter de naviguer en dehors de l'application
        rel="noopener noreferrer" // Sécurité pour éviter les risques de vulnérabilités
        style={styles.button}
      >
        <DownloadIcon style={styles.icon} /> Télécharger le PDF
      </a>
    </div>
  );
};

const styles = {
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#004080',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '8px',
  },
};

export default TelechargeBrochure;
