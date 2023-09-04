import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ContactCard = styled.div`
  background-color: #14453A;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  color: white;
  text-align: center;
  position: relative;
  border: 5px solid #B19E63;
  font-family: "brush script mt", cursive;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #B19E63;
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: 0;
`;

const StyledButton = styled.button`
  background: linear-gradient(135deg, #14453A 0%, #B19E63 100%);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border: 1px solid grey;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #B19E63 0%, #14453A 100%);
    border-color: grey;
    color: black;
  }

  &:active {
    border-color: red;
  }
`;

const ContactModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ContactCard>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Informations de contact</h2>
        <p><strong>Gemme le fil</strong><br />
          Nous sommes ouverts du mardi au samedi, de 9h30 à 12h30 et de 14h à 19h00.
        </p>
        <p>Par Mail : gemmelefil@free.fr
</p>
        <p>Au téléphone : 06 52 09 87 44</p>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7623345185725!2d1.572620977268053!3d43.23544237112526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aee136bf019043%3A0x3dadb1d40aa83d21!2sGemme%20le%20Fil%20%2F%20Point%20Mondial%20Relay%20%2F%20UPS%20Access%20Point%20%2F%20Colis%20Priv%C3%A9%20Store!5e0!3m2!1sfr!2sfr!4v1693460666032!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></Map>
        <StyledButton onClick={() => window.print()}>Imprimer</StyledButton>
        <StyledButton onClick={onClose}>Fermer</StyledButton>
      </ContactCard>
    </ModalOverlay>
  );
};

export default ContactModal;
