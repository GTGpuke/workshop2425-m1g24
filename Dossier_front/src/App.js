import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/authentification/home";
import Inscription from "./components/authentification/inscription";
import Connexion from "./components/authentification/connexion";
import Layout from './components/layout/layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

