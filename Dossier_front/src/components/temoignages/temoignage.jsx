import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './temoignage.css';

const Temoignages = () => {
  const temoignages = [
    {
      nom: 'Bojer KINZONZI',
      message: "La formation à l'ESCG Paris s’est donc avérée pertinente, puisque j’ai réalisé ma dernière année en alternance ainsi qu’un mémoire professionnel sur une problématique liée à mon entreprise d’accueil.",
      image: '/images/photo_Alex.jpeg',
    },
    {
      nom: 'Hubert CASTELNAU',
      message: "Grâce à l'ESCG Paris j’ai pu faire mon alternance au sein de mon entreprise. Le programme est adapté aux difficultés que je rencontre au quotidien et les professeurs sont d’une grande qualité d’écoute.",
      image: '/images/avion.jpg',
    },
    {
      nom: 'Marie DUPONT',
      message: "J'ai signé mon CDI quelques mois avant la fin de mon contrat de professionnalisation avec un statut cadre. Tout cela n’aurait pas été possible sans le soutien de mon tuteur et le corps professoral de l'ESCG Paris.",
      image: '/images/avion.jpg',
    },
    {
      nom: 'Jean MARTIN',
      message: "L'ESCG Paris est selon moi une école qui sait accompagner ses élèves dans leur parcours et les aide à avancer. Elle m’a donné les outils nécessaires pour réussir et avec beaucoup d'efforts et de motivation j’y suis arrivé.",
      image: '/images/avion.jpg',
    },
    // {
    //   nom: 'Yannick NGUEKE',
    //   message: "L'ESCG Paris est selon moi une école qui sait accompagner ses élèves dans leur parcours et les aide à avancer. Elle m’a donné les outils nécessaires pour réussir et avec beaucoup d'efforts et de motivation j’y suis arrivé.",
    //   image: '/images/avion.jpg',
    // },
    // {
    //   nom: 'Alex KUETCHE',
    //   message: "L'ESCG Paris est selon moi une école qui sait accompagner ses élèves dans leur parcours et les aide à avancer. Elle m’a donné les outils nécessaires pour réussir et avec beaucoup d'efforts et de motivation j’y suis arrivé.",
    //   image: '/images/avion.jpg',
    // },
  ];

  return (
    <div className="temoignons">
      <h3 className="title">Ils nous ont fait confiance</h3><br />
      <div className="temoignages-grid">
        {temoignages.map((temoin, index) => (
          <div className="temoignage-card" key={index}>
            <div className="temoignage-image-container">
              <img src={temoin.image} alt={temoin.nom} className="temoignage-image" />
            </div>
            <div className="temoignage-content">
              <p className="temoignage-message">{temoin.message}</p>
              <h5 className="temoignage-nom">{temoin.nom}</h5>
              <br /><br />
              <button className="read-button">
                LIRE SON TÉMOIGNAGE <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Temoignages;
