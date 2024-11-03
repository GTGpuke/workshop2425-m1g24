import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./components/authentification/accueil";
import Home from "./components/authentification/home";
import Inscription from "./components/authentification/inscription";
import Connexion from "./components/authentification/connexion";
import ForgetPassword from "./components/authentification/forgetPassword";
import Profil from "./components/authentification/profil";
import Medecin from "./components/authentification/medecin";
import TelechargeBrochure from "./components/authentification/telechargeBrochure";
import Contact from "./components/authentification/contact";
import NotFound from './components/authentification/NotFound';
import Presentation from "./components/mobiliis/presentation";
import Temoignage from "./components/temoignages/temoignage";
import ToutTemoignages from "./components/temoignages/toutTemoignages";
import PersonneTemoignage from "./components/temoignages/personneTemoignage";
import Layout from './components/layout/layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/home" element={<Home />} />
          <Route path="/medecin" element={<Medecin />} />
          <Route path="/telechargeBrochure" element={<TelechargeBrochure />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/temoignage" element={<Temoignage />} />
          <Route path="/toutTemoignages" element={<ToutTemoignages />} />
          <Route path="/personneTemoignage" element={<PersonneTemoignage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

