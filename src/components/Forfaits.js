import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const HighlightedTitle = styled.span`
  color: #888;
  font-weight: bold;
  text-shadow: 1px 1px black;
`;

const Forfaits = () => {
  useEffect(() => {
    document.title = 'Forfaits - ISS09 Informatiques saverdun';
  }, []);

  return (
    <Container className="custom-container">
      <Title className="title">Forfaits</Title>
      
      <Price>
        <HighlightedTitle><strong>Forfait Correctif :</strong></HighlightedTitle> 55€ en atelier
      </Price>
      <Description>
        Blocage intégral des publicités intempestives
        Nettoyage complet de votre système, suppression des logiciels inutiles, désinfection de virus
        Correction de vos drivers (carte mère, carte graphique, imprimante...)
        Optimisation et accélération de votre système, remplacement des logiciels obsolètes
      </Description>
      <Price>
        <HighlightedTitle>Forfait nouvelle installation ou réinstallation :</HighlightedTitle> 75€ en atelier
      </Price>
      <Description>
        Installation ou réinstallation du logiciel d'exploitation (Windows, Linux ou Mac)
        Installation des drivers (carte mère, carte graphique, imprimante...)
        Mise à jour du système et de tous les logiciels utiles (Java, antivirus, messagerie, dessin, vidéo, audio...)
        Optimisation du système d'exploitation en fonction du matériel
      </Description>
    </Container>
  );
};

export default Forfaits;