import React from 'react';
import './toutTemoignage.css';
import PersonneTemoignage from '../temoignages/personneTemoignage';

const Temoignages = () => {
  return (
    <div className="temoignages-page">
      <div className="background-section">
        <img src="/images/bureau.jpeg" alt="Background" className="background-image" />
        <div className="breadcrumb">
          Accueil »  <p style={{fontWeight: 'bold', fontSize: '40px', marginLeft: '50px'}}>Témoignages</p> 
        </div>
      </div>
      <div className="content-section">
        <div className="overlay">
          <h1>Mobiliis, ce sont nos anciens clients qui en parlent le mieux !</h1>
        </div>
        <p>
          Choisir une <strong>École Supérieure de Commerce et de Gestion</strong> n’est pas une décision facile.
          Il faut prendre en compte de nombreux critères : la <strong>qualité des enseignements</strong>, la reconnaissance
          des diplômes, les opportunités de stage et d’emploi, l’ouverture internationale, la vie associative…
        </p>
        <p>
          Pour vous aider à faire le bon choix, rien de mieux que d’<strong>écouter les témoignages des étudiants et diplômés
            de l’ESCG Paris</strong>. Ils vous racontent leur parcours, leurs motivations, <strong>leurs expériences</strong>
          et <strong>leurs réussites</strong>. Ils vous font découvrir <span className="highlighted">les programmes</span> et
          les débouchés des différents cursus proposés par l’école.
        </p>
        <p>
          En lisant <strong>leurs témoignages</strong>, vous pourrez vous faire une idée plus précise de ce qui vous attend à
          l’ESCG Paris. <strong>Vous pourrez aussi vous projeter dans votre avenir professionnel</strong> et trouver le cursus
          qui correspond le mieux à vos aspirations.
        </p>
        <p>
          L’ESCG Paris est <span className="highlighted">une École Supérieure de Commerce et de Gestion</span> qui forme des
          managers responsables, innovants et ouverts sur le monde. Elle bénéficie d’une <strong>forte notoriété auprès des
            entreprises</strong> et des partenaires académiques. Elle offre à ses étudiants un <span className="highlighted">accompagnement
              personnalisé</span> tout au long de leur scolarité et leur <span className="highlighted">alternance</span>.
        </p>
        <p>
          L’ESCG Paris est plus qu’une école : c’est une <strong>communauté soudée et dynamique</strong> qui partage les mêmes
          valeurs et la même ambition. <strong>Rejoignez-nous !</strong>
        </p>
      </div>
      <div className="temoignage">
      <PersonneTemoignage />
    </div>
    </div>
  );
};

export default Temoignages;
