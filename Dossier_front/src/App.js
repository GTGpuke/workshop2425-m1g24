import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./components/authentification/accueil";
import Home from "./components/authentification/home";
import Inscription from "./components/authentification/inscription";
import Connexion from "./components/authentification/connexion";
import ForgetPassword from "./components/authentification/forgetPassword";
import Profil from "./components/authentification/profil";
import Medecin from "./components/authentification/medecin";
import Layout from './components/layout/layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/home" element={<Home />} />
          <Route path="/medecin" element={<Medecin />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

