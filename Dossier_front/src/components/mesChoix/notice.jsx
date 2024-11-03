import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './notice.css';

const Notice = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="notice-container">
        
      <div className="notice-header">
        <h2>L’Entrepreneuriat et l’Intrapreneuriat au cœur de l’enseignement de l’école</h2>
        <p>Grâce à ses liens privilégiés, entretenus depuis des dizaines d’années sur la région, l’ESCG-PARIS s’appuie sur un réseau très important d’entreprises...</p>
        {isExpanded && (
          <div className="notice-content">
            <p>
              Ce positionnement et cet ancrage régional ont permis, non seulement d’asseoir la notoriété des différentes filières, d’assurer l’insertion professionnelle de nos étudiants, mais aussi et surtout de toujours mieux les former à devenir des hommes et des femmes responsables, pragmatiques et capables de s’intégrer et de s’adapter dans un monde en perpétuelle évolution.
            </p>
            <p>
              Une façon de penser, et un <strong>esprit d’entreprise qui apporte une valeur ajoutée significative</strong>. La proximité et l’échange permanent avec des cadres et des dirigeants d’entreprise, tout au long de sa scolarité, permet à l’étudiant d’acquérir de l’expérience, au-delà des connaissances.
            </p>
            <p>
              « Tu veux un job ? Crée-le ! » ou « Comment devenir Entreprenautre » ? Un leitmotiv que l’ESCG-PARIS cultive depuis 50 ans, en proposant 5 portes d’entrée (parcours pédagogique) afin de devenir Entreprenautre, c’est-à-dire <strong>entrepreneur, repreneur, franchisé, intrapreneur</strong> ou encore cadre agile expression de la responsabilité métabolisée.
            </p>
          </div>
        )}
      </div>
      <div className="toggle-button" onClick={handleToggle}>
        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
    </div>
  );
};

export default Notice;
