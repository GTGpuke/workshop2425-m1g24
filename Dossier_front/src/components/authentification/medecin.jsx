import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'react-i18next';
import Temoignages from '../temoignages/temoignage';
import Choix from '../mesChoix/choix';
import Sponsor from './sponsor';
import Langue from '../langues/langue';
import './medecin.css';

const Medecin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  const handleTemoignageClick = () => {
    navigate('/toutTemoignages');
  };

  return (
    <Box className="medecin-container">
      <div className="flou">
        <img src="/images/bureau.jpeg" alt="avion" />
        <div className="backdrop-overlay">
          <h2 className="titre">{t('accueil.title')}</h2>
          <p className="descrire">{t('accueil.description')}</p>
          <button className="green-button" onClick={handleContactClick}>
            NOUS CONTACTER <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>
      <div className="choisir">
        <Choix />
      </div>
      <div className="presen-story">
      <div class="title-container">
  <h1 class="styled-title">QUI SOMMES-NOUS ?</h1>
  <p class="subtitle">Cabinet spécialisé dans l'accompagnement des individus souhaitant immigrer et étudier à l'étranger !</p>
</div>

<div className="entete-container">
  <div className="entete">
    <div className="stori-text">
      <p>Créé en 2009, Bridge To Study est un cabinet spécialisé dans le conseil en stratégie de formation et d’orientation des étudiants dans leur projet d’études à l’étranger. Plaçant l’avenir des étudiants au cœur de sa mission. Notre cabinet s’est, depuis le début, engagé à satisfaire au mieux leurs inquiétudes, boostant de faite leur carrière de sorte à lui donner une dimension internationale. C’est pourquoi nous avons noué des partenariats soudés avec les plus prestigieuses universités et grandes écoles du monde pour garantir un avenir sûr et des chances de succès réelles à nos étudiants.</p>
    </div>
    <div className="stori-text">
      <p>Notre démarche novatrice de l’orientation scolaire permet, suite à un bilan de compétence, de repérer chez les étudiants, marocains ou étrangers,
        d’avoir une vision globale et claire des futures perspectives universitaires et les différentes possibilités d’emploi associées à chaque choix académique,
        en se basant surtout sur ses traits de personnalité, ses motivations et ses souhaits.
        Notre cabinet met à la disposition de chaque élève et étudiant toute son expertise (plus de 15000 étudiants accompagnés) ainsi qu’une panoplie d’outils d’aide...
      </p>
      <button className="learn-more-button">En savoir plus</button>
    </div>
  </div>
</div>

        <div className="stori-video">
          <iframe
            width="1230"
            height="520"
            src="https://www.youtube.com/embed/LTAhX568Esk"
            title="Bridge To Study Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="temoignage">
        <Temoignages />
      </div>
      <div className="tout-temoignage">
        <button className="green-button" onClick={handleTemoignageClick}>
          Lire tous les témoignages <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
        </button>
      </div>
      <div className="langue">
        <Langue/>
      </div>
      <div className="temoignage">
        <img src="/images/download.jpeg" alt="avion" />
      </div>
      <div className="sponsor">
        <Sponsor/>
      </div>
    </Box>
  );
};

export default Medecin;
