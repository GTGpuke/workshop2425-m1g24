import React from 'react';
import './france.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

const France = () => {  
    const navigate = useNavigate();
    const handleContactClick = () => {
        navigate('/contact'); 

      };
  return (
    <div className="temoignages-page">
      <div className="france-section">
        <img src="/images/bureau.jpeg" alt="Background" className="france-image" />
        <div className="breadcrumb">
          Accueil »  <p style={{fontWeight: 'bold', fontSize: '40px', marginLeft: '380px'}}>étudier en France à titre d'étudiant étranger</p> 
          <button className="green-button" onClick={handleContactClick}>
            RESERVEZ VOTRE RENDEZ-VOUS <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>
      <div className="content-section">
        <div className="overlay">
          <h1>étudier en France</h1>
        </div>
        <p>
  Vous êtes à la recherche d’un <strong>logement étudiant</strong> pour y vivre ou pour vos études ? Mais vous ne savez pas par quoi commencer ni comment trouver un logement étudiant décent dans la mesure de vos moyens ?
</p>
<p>
  Que choisir ! <span className="highlighted">Une résidence universitaire, une résidence étudiante privée, auberges, chambre chez l’habitant, foyers, colocation ou un logement indépendant</span> ? Faire votre choix est bien difficile et délicat surtout si vous n’y connaissez pas. D’autant plus que tous ces logements se valent en fonction de votre budget.
</p>
<p>
  Les logements dans les <strong>résidences universitaires</strong>, rattachés aux universités, généralement pratiques pour les étudiants internationaux à un prix raisonnable, présentent des avantages et des inconvénients. Toutefois, les logements privés qui semblent plus confortables peuvent également vous confronter aux mêmes réalités.
</p>
<p>
  La première attitude à adopter est celle de ceux qui savent développer <strong>la mentalité de vainqueur</strong>. Dites-vous qu’il y a une solution à tout problème. Abordez ainsi cette situation, c’est réussir à prendre le dessus sur tous les autres challenges d’intégration face auxquels vous serez demain (responsabilité, autonomie, etc.…).
</p>
<p>
  Pour mieux vous accompagner, <span className="highlighted">BRIDGE TO STUDY</span> s’assure du fait que votre cadre d’habitation soit propice à vos études en vous faisant, en amont, éviter :
</p>
        <p>
        Notre cabinet prend en compte vos <span className="highlighted">réservations de résidences universitaires</span> Notre service client met également à votre
         disposition une liste de sites internet fiables qui vous permettront de trouver un logement dans votre prochain pays d’accueil.
         Des conseils vous seront donnés en plus pour vous informer de la procédure à suivre lors de la signature de votre contrat de bail.
         
        </p>
        <p>
  Afin de vous accompagner pour bien faire votre choix d’un <strong>espace de vie</strong> qui vous est propre pour y vivre ou pour vos études, 
  nous veillons à vous assurer un <span className="highlighted">juste confort</span> pour votre <strong>insertion académique et sociale</strong>.
</p>
      </div>
     
    </div>
  );
};

export default France;
