import React from 'react';
import './home.css'; // CSS pour la mise en forme

const Accueil = () => {
  return (
    <div className="accueil-container">
      <h2 className="accueil-title">Mon espace</h2>
      
      <div className="accueil-content">
        {/* Tableau principal */}
        <table className="accueil-table">
          <thead>
            <tr>
              <th></th>
              <th>Lundi</th>
              <th>Mardi</th>
              <th>Mercredi</th>
              <th>Jeudi</th>
              <th>Vendredi</th>
              <th>Samedi</th>
              <th>Dimanche</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Niveau de glucose</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Pression arterielle</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tension</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/* Calendrier des semaines */}
        <div className="accueil-weeks">
          <div className="week">Semaine 35</div>
          <div className="week">Semaine 36</div>
          <div className="week">Semaine 37</div>
          <div className="week">Semaine 38</div>
        </div>
      </div>

     
    </div>
  );
};

export default Accueil;