import React from 'react';
import './presentation.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';

const Presentation = () => {
    return (
        <div className="presentation-container">
            <h1 className="presentation-title">Une préoccupation</h1>
            <div className="presentation-content">
                <div className="quote-icon">
                    <span>&#x275D;</span>
                </div>
                <div className="story-card">
                    <div className="story-image">
                        <img src='../images/photo_Alex.jpeg' alt="Mergelin TAKOUMBO" />
                    </div>
                    <div className="story-text">
                        <h2>Mergelin TAKOUMBO</h2>
                        <p>fondateur de Mobiliis</p>
                        <p><strong>une anecdote :</strong> Abuser par des personnes mal-intentionées pour ma procedure de voyage.<br />
                            <strong>Une envie :</strong>faciliter le processus pour le projet de voyage à toute personne désireuse.<br />
                            <strong>Une destination :</strong> France, SKEMA Business School!
                        </p>
                        <p>
                            Mais le chemin pour m’inscrire à l’école et m’installer à Paris fut difficile. J’ai dû surmonter des obstacles administratifs, bloquer des fonds demandés par le consulat, ouvrir un compte de paiement en France, trouver un garant et un logement. À 24 ans, ces démarches ont été stressantes avant mon départ de Yaoundé et à mon arrivée en France.
                        </p>
                        <p>
                            Cependant, cette expérience m’a fait réaliser que de nombreux étudiants internationaux rencontrent les mêmes difficultés lors de leur mobilité étudiante.
                        </p>
                        <p>
                            Après avoir travaillé dans la finance, j’ai décidé de créer Studely en 2016 avec d’autres anciens étudiants qui ont vécu des situations similaires. Dans l’ère de la digitalisation des services financiers, Studely est le premier service financier dédié aux étudiants en mobilité internationale. Aujourd’hui, nous accompagnons des milliers d’étudiants en facilitant leur mobilité à l’international, pour qu’ils puissent poursuivre leurs études sereinement et oser envisager leur avenir.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="statistics-section">
                <h2>Mobiliis et ses statistiques</h2>
                <div className="statistics-container">
                    <div className="stat-item">
                        <PeopleAltIcon className="stat-icon" />
                        <h3>+100</h3>
                        <h4>étudiants accompagnés</h4>
                    </div>
                    <div className="stat-item">
                        <SchoolIcon className="stat-icon" />
                        <h3>100%</h3>
                        <h4>de projets d'études et d'immigrations concrétisés</h4>
                    </div>
                    <div className="stat-item">
                        <PublicIcon className="stat-icon" />
                        <h3>6</h3>
                        <h4>pays où nous sommes présents</h4>
                    </div>
                    <div className="stat-item">
                        <GroupsIcon className="stat-icon" />
                        <h3>+15</h3>
                        <h4>collaborateurs dans le monde</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation;
