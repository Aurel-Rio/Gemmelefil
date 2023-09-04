import React, { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import upsLogo from "../assets/ups.png";
import mondialRelayLogo from "../assets/mondialrelay.png";
import colisPrive from "../assets/cp.png";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  text-align: center;
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  animation: ${fadeIn} 1s ease-in-out;
  margin-top: 30px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

const Title = styled.h1``;

const ContactInfo = styled.div`
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  width: 75%;
  margin: auto;
`;

const StyledButton = styled.button`
  background: linear-gradient(135deg, #14453a 0%, #b19e63 100%);
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  border: 1px solid grey;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #b19e63 0%, #14453a 100%);
    border-color: grey;
    color: white;
  }

  &:active {
    border-color: red;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 1400px) {
    width: 100%;
    display: block;
    width: fit-content;
    margin: auto;
    height: auto;
    margin-top: 25px;
  }
  
  /* Requête média pour les écrans 4K */
  @media (min-width: 3840px) {
    font-size: 24px; /* Ajustez la taille de la police pour les écrans 4K */
    padding: 20px 40px; /* Ajustez le rembourrage pour les écrans 4K */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  position: relative;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: auto;
  margin: 0 100px;
  margin-bottom:100px;
  
  /* Requête média pour les écrans 4K */
  @media (min-width: 3840px) {
    height: 200px; /* Ajustez la hauteur pour les écrans 4K */
    width: auto;
    margin: 0 200px; /* Ajustez l'espace entre les logos pour les écrans 4K */
  }
`;

const Accueil = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    document.title = "Gemme le fil - Accueil";

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Bienvenue chez Gemme le fil ! Découvrez notre boutique d'artisanat de bijoux en macramé et pierres naturelles à Saverdun. Ouverts du mardi au samedi, de 9h30 à 12h30 et de 14h à 19h00."
      );
    }

    const internalLinks = document.querySelectorAll('a[href^="/"]');
    internalLinks.forEach((link) => {
      link.setAttribute("rel", "internal");
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container className="custom-container" animate={animate}>
        <Title>
          <strong className="title">Gemme le fil</strong>
        </Title>
        <ContactInfo>
          <Description>
            <span style={{ fontSize: "1.6em", textShadow: "1px 1px blue" }}>
              <strong>
                <i></i>
              </strong>
            </span>{" "}
            <span
              style={{
                fontSize: "1.2em",
                color: "black",
              }}
            >
              <p>
                Situé en plein cœur de Saverdun dans le 09, Gemme le fil est une
                boutique d'artisanat de bijoux en macramé et pierres naturelles.
              </p>
            </span>
            <p>
              <strong>
                &#33; Nous sommes ouverts du mardi au samedi, de 9h30 à 12h30 et
                de 14h à 19h00. &#33;
              </strong>
            </p>
            <p>
              N'hésitez pas à nous rendre visite et découvrez notre sélection de
              produits de qualité.
            </p>
            <p>
              Pour les nouveautés, présentation et autres{" "}
              <StyledButton
                as="a"
                href="https://www.facebook.com/gemmelefil"
                target="_blank"
                rel="noopener noreferrer"
              >
                lien Facebook
              </StyledButton>
              .
            </p>
          </Description>
        </ContactInfo>

        <Description>
          <p>Point Mondial Relay, UPS Access Point et Colis Privé Store</p>
        </Description>
      </Container>
      <LogoContainer style={{ top: "500px" }} className="logo_service">
        <Logo src={upsLogo} alt="Logo UPS" />
        <Logo src={mondialRelayLogo} alt="Logo Mondial Relay" />
        <Logo src={colisPrive} alt="Logo Colis Privé" />
      </LogoContainer>
    </>
  );
};

export default Accueil;
