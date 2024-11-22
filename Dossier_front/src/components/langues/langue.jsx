import React from "react";
import "./langue.css";
import { useNavigate } from 'react-router-dom';

const Langue = () => {
  const navigate = useNavigate();

  const handleCanada = () => {
    navigate('/coursCanada');
  };
  const handleAnglais = () => {
    navigate('/coursAnglais');
  };
  const handleAllemand = () => {
    navigate('/coursAllemand');
  };

  const formations = [
    {
      id: 1,
      logo: "images/angleterre.jpg",
      title: "Anglais général et professionnel - Préparation aux TOEFL et IELTS",
      offer: "Offre spéciale",
      testimonies: "Témoignages",
      description: "Cours particuliers en visio: professeurs natifs",
      location: "À distance · En entreprise",
      contact: "Nous contacter",
      financement: "Finançable CPF",
      button: "Je m'informe gratuitement",
      onClick: handleAnglais,
    },
    {
      id: 2,
      logo: "images/canada.jpg",
      title: "Préparation aux TCF, TEF Canada - DALF et DELF",
      offer: "Offre spéciale",
      testimonies: "Témoignages",
      description: "À partir de 10h en visioformation",
      location: "À distance",
      contact: "Nous contacter",
      financement: "Finançable CPF",
      button: "Je m'informe gratuitement",
      onClick: handleCanada,
    },
    {
      id: 3,
      logo: "images/Allemagne.jpg",
      title: "Allemand Général et Professionnel - Préparation aux DSH et TestDAF",
      offer: "Offre spéciale",
      testimonies: "Avis du centre",
      description: "Cours particuliers + e-learning + collectifs",
      location: "À distance",
      contact: "Nous contacter",
      financement: "Finançable CPF",
      reduction: "10 % de réduction",
      oldPrice: "1500",
      newPrice: "1350",
      button: "Je m'informe gratuitement",
      onClick: handleAllemand,
    },
    {
      id: 4,
      logo: "images/espagne.jpg",
      title: "Formation personnalisée en Espagnol",
      offer: "Offre spéciale",
      testimonies: "Avis des élèves",
      description: "Formation flexible avec des experts natifs",
      location: "À distance ou en présentiel",
      contact: "Nous contacter",
      financement: "Plusieurs Modalités",
      button: "Je m'informe gratuitement",
      onClick: null, // Pas d'action définie pour cette formation
    },
  ];

  return (
    <div className="langue-page">
      <h2 className="langue-title">Nos formations de Langues</h2>
      <div className="formation-cards">
        {formations.map((formation) => (
          <div className="formation-card" key={formation.id}>
            <img src={formation.logo} alt="Logo" className="formation-logo" />
            <h3 className="formation-title">{formation.title}</h3>
            <button className="formation-offer">{formation.offer}</button>
            <p className="formation-testimonies">{formation.testimonies}</p>
            <ul className="formation-details">
              <li>{formation.description}</li>
              <li>{formation.location}</li>
              <li>{formation.contact}</li>
            </ul>
            {formation.reduction && (
              <div className="formation-price">
                <span className="old-price">{formation.oldPrice}€</span>{" "}
                <span className="new-price">{formation.newPrice}€</span>{" "}
                <span className="reduction">{formation.reduction}</span>
              </div>
            )}
            <div className="formation-financement">{formation.financement}</div><br /><br />
            <button
              className="formation-button"
              onClick={formation.onClick} // Associe la fonction à l'événement onClick
            >
              {formation.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Langue;
