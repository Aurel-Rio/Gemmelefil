import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% {
    color: black;
  }
  50% {
    color: grey;
  }
  100% {
    color: black;
  }
`;

const Container = styled.div`
  text-align: center;
  width: 70%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 60px;
  }

  @media (min-width: 3840px) {
    width: 40%; /* Ajustez la largeur pour les écrans 4K */
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #14453A; /* Utilisation de la couleur verte */
  margin-bottom: 20px;
  width: 80%;
  border: 1px solid black;
  font-weight: bold;
  font-style: italic;
  font-family: 'brush script mt'; /* Utilisation de la police personnalisée */

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 3840px) {
    font-size: 48px; /* Ajustez la taille de la police pour les écrans 4K */
  }
`;

const BlinkingAddress = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: bold;
  animation: ${blinkAnimation} 2s linear infinite;
  color: #14453A; /* Utilisation de la couleur verte */

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 3840px) {
    font-size: 32px; /* Ajustez la taille de la police pour les écrans 4K */
  }
`;

const ContactInfo = styled.div`
  font-size: 16px;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 3840px) {
    font-size: 24px; /* Ajustez la taille de la police pour les écrans 4K */
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 70vh;
  margin-bottom: 55px;
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
`;

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact - Gemme le fil'; // Mettez le titre souhaité ici
  }, []);

  return (
    <Container className="custom-container">
      <Heading className="title">Contact</Heading>
      <BlinkingAddress>Adresse : <span>8 r Lion D'Or, 09700 Saverdun</span></BlinkingAddress>
      <ContactInfo>
        <p>
          Par Mail : <a href="mailto:gemmelefil@free.fr" style={{ color: '#990000', textDecoration: 'none' }}>gemmelefil@free.fr</a>
        </p>
        <p>
          Au téléphone : <a href="tel:+33652098744" style={{ color: '#006600', textDecoration: 'none' }}>06 52 09 87 44 </a>
        </p>
      </ContactInfo>
      <MapContainer>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7623345185725!2d1.572620977268053!3d43.23544237112526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aee136bf019043%3A0x3dadb1d40aa83d21!2sGemme%20le%20Fil%20%2F%20Point%20Mondial%20Relay%20%2F%20UPS%20Access%20Point%20%2F%20Colis%20Priv%C3%A9%20Store!5e0!3m2!1sfr!2sfr!4v1693460666032!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></Map>
      </MapContainer>
    </Container>
  );
};

export default Contact;
