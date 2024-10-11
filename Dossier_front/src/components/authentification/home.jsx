import React, { useState } from 'react';
import './home.css';

const Accueil = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [medicaments, setMedicaments] = useState({});
  const [newMedicament, setNewMedicament] = useState({
    nom: '',
    heures: [],
    frequence: 1,
    duree: 1,
    dose: '',  // Ajout de la dose
  });

  const heures = [
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
    '20:00', '21:00', '22:00', '23:00'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedicament({ ...newMedicament, [name]: value });
  };

  const handleHeuresChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setNewMedicament({ ...newMedicament, heures: selectedOptions });
  };

  const handleAddMedicament = () => {
    const updatedMedicaments = { ...medicaments };

    // Calcul de la répartition du médicament sur plusieurs jours
    for (let jour = 0; jour < newMedicament.duree; jour++) {
      const jourSemaine = `jour-${jour + 1}`; // jour-1, jour-2, etc.
      if (!updatedMedicaments[jourSemaine]) {
        updatedMedicaments[jourSemaine] = {};
      }

      // Ajout du médicament à chaque heure sélectionnée, en tenant compte de la fréquence
      newMedicament.heures.forEach((heure) => {
        if (!updatedMedicaments[jourSemaine][heure]) {
          updatedMedicaments[jourSemaine][heure] = [];
        }
        // Ajout du médicament avec la dose uniquement une fois par heure
        const medicamentEntry = `${newMedicament.nom} (${newMedicament.dose})`;
        // Si le médicament n'est pas déjà dans la liste, on l'ajoute
        if (!updatedMedicaments[jourSemaine][heure].includes(medicamentEntry)) {
          updatedMedicaments[jourSemaine][heure].push(medicamentEntry);
        }
      });
    }

    setMedicaments(updatedMedicaments);
    setPopupOpen(false);
  };

  return (
    <div className="accueil-container">
      <h2 className="accueil-title">Mon espace</h2>

      {/* Bouton pour ouvrir le pop-up */}
      <button onClick={() => setPopupOpen(true)} className="add-treatment-btn">
        Ajouter un médicament
      </button>

      {/* Pop-up pour ajouter un médicament */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Ajouter un médicament</h3>
            <label>
              Nom du médicament:
              <input
                type="text"
                name="nom"
                value={newMedicament.nom}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Dose:
              <input
                type="text"
                name="dose"
                value={newMedicament.dose}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Heure(s) de prise :
              <select
                multiple
                name="heures"
                value={newMedicament.heures}
                onChange={handleHeuresChange}
              >
                {heures.map((heure) => (
                  <option key={heure} value={heure}>{heure}</option>
                ))}
              </select>
            </label>
            <label>
              Fréquence (combien de fois par jour):
              <input
                type="number"
                name="frequence"
                value={newMedicament.frequence}
                onChange={handleInputChange}
                min="1"
              />
            </label>
            <label>
              Durée (nombre de jours):
              <input
                type="number"
                name="duree"
                value={newMedicament.duree}
                onChange={handleInputChange}
                min="1"
              />
            </label>
            <button onClick={handleAddMedicament}>Ajouter</button>
            <button onClick={() => setPopupOpen(false)}>Annuler</button>
          </div>
        </div>
      )}

      {/* Tableau principal */}
      <table className="accueil-table">
        <thead>
          <tr>
            <th>Heures</th>
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
          {heures.map((heure) => (
            <tr key={heure}>
              <td>{heure}</td>
              {Array.from({ length: 7 }).map((_, day) => {
                const dayKey = `jour-${day + 1}`;
                return (
                  <td key={day}>
                    {medicaments[dayKey]?.[heure] ? (
                      medicaments[dayKey][heure].join(', ')
                    ) : (
                      ''
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accueil;
