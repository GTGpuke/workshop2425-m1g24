import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';

// La configuration de i18next
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next) // Passer i18next à React-i18next
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr', // Si la langue choisie n'est pas disponible, utiliser le français

    interpolation: {
      escapeValue: false, // React déjà sécurisé
    },
  });

export default i18n;
