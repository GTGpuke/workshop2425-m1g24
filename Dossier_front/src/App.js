import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./components/authentification/accueil";
import Home from "./components/authentification/home";
import Logement from "./components/authentification/logement";
import Inscription from "./components/authentification/inscription";
import Connexion from "./components/authentification/connexion";
import ForgetPassword from "./components/authentification/forgetPassword";
import Profil from "./components/authentification/profil";
import Map from "./components/authentification/map";
import Sponsor from "./components/authentification/sponsor";
import Medecin from "./components/authentification/medecin";
import TelechargeBrochure from "./components/authentification/telechargeBrochure";
import Contact from "./components/authentification/contact";
import NotFound from './components/authentification/NotFound';
import Brochure from './components/authentification/brochure';
import Navbar from './components/authentification/navbar';
import Choix from './components/mesChoix/choix';
import Notice from './components/mesChoix/notice';
import France from './components/mesChoix/france';
import Langue from './components/langues/langue';
import France1 from './components/mesChoix/france1';
import France2 from './components/mesChoix/france2';
import France3 from './components/mesChoix/france3';
import France4 from './components/mesChoix/france4';
import Canada from './components/mesChoix/canada';
import Canada1 from './components/mesChoix/canada1';
import Canada2 from './components/mesChoix/canada2';
import CoursAnglais from './components/langues/coursAnglais';
import Presentation from "./components/mobiliis/presentation";
import Temoignage from "./components/temoignages/temoignage";
import ToutTemoignages from "./components/temoignages/toutTemoignages";
import PersonneTemoignage from "./components/temoignages/personneTemoignage";
import Admin from './components/Admins/admin';
import Layout from './components/layout/layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="*" element={<NotFound />} />
          < Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/map" element={<Map />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="/" element={<Medecin />} />
          <Route path="/telechargeBrochure" element={<TelechargeBrochure />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/temoignage" element={<Temoignage />} />
          <Route path="/toutTemoignages" element={<ToutTemoignages />} />
          <Route path="/personneTemoignage" element={<PersonneTemoignage />} />
          <Route path="/choix" element={<Choix />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/france" element={<France />} />
          <Route path="/france1" element={<France1 />} />
          <Route path="/france2" element={<France2 />} />
          <Route path="/france3" element={<France3 />} />
          <Route path="/france4" element={<France4 />} />
          <Route path="/canada" element={<Canada/>} />
          <Route path="/canada1" element={<Canada1/>} />
          <Route path="/canada2" element={<Canada2/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/langue" element={<Langue />} />
          <Route path="/coursAnglais" element={<CoursAnglais />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

