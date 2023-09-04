import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Forfaits from './components/Forfaits';
import Assistance from './components/Catalog';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './container.css';
import back02 from './assets/pierre0003.png';
import { StyleSheetManager } from 'styled-components';
import Catalog from './components/Catalog';

function App() {
  useEffect(() => {
    document.title = 'Gemme le fil';
    const faviconLink = document.querySelector("link[rel='icon']");
    faviconLink.href = `${process.env.PUBLIC_URL}/gemme_le_fil_logo.ico`;

    // Mettre à jour la balise meta pour la description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Bienvenue chez Gemme le fil ! Ouverts du mardi au samedi, de 9h30 à 12h30 et de 14h à 19h00."
      );
    }
  }, []);

  return (
    <StyleSheetManager target={document.head}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/forfaits" element={<Forfaits />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
        <img src={back02} alt="Background" className="background-image" />
      </Router>
    </StyleSheetManager>
  );
}

export default App;
