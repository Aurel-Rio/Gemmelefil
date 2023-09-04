import React, { useEffect } from 'react';
import styled from 'styled-components';

import produit1Image from '../assets/produits/produit0001.png';
import produit2Image from '../assets/produits/produit0002.jpg';
import produit3Image from '../assets/produits/produit0003.png';
import produit4Image from '../assets/produits/produit0004.png';

const Container = styled.div`
  text-align: center;
  width:95vw;
  transform:none;
  position:absolute;
  top:125px;
  left:50%;
  transform:translateX(-50%);
  @media (min-width: 3840px) {
    top: 250px; /* Ajustez la position verticale pour les écrans 4K */
  }
`;

const Title = styled.h1`
  font-size: 2.2em;
  color: #14453A; /* Vert */
  margin-bottom: 20px;
  border: 1px solid black;
  font-family: 'brush script mt'; /* Utilisation de la police personnalisée */
  font-style: italic;

  @media (min-width: 3840px) {
    font-size: 3.2em; /* Ajustez la taille de la police pour les écrans 4K */
  }
`;

const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 0 20px; /* Ajout de marges horizontales */

  @media (min-width: 3840px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Ajustez la largeur des colonnes pour les écrans 4K */
  }
`;

const CatalogItem = styled.div`
  background: linear-gradient(
    135deg,
    #14453A 0%, /* Vert */
    #B19E63 100% /* Or */
  );

  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(1, 34, 0, 0.5), 0 -2px 4px rgba(0, 0, 34, 0.5);
  text-align: center;

  @media (min-width: 3840px) {
    padding: 40px; /* Ajustez le rembourrage pour les écrans 4K */
  }
`;

const JewelryImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (min-width: 3840px) {
    max-width: 90%; /* Ajustez la largeur maximale de l'image pour les écrans 4K */
    max-height: auto;
  }
`;

const Price = styled.p`
  font-size: 20px;
  color: #14453A;
  margin-bottom: 10px;

  @media (min-width: 3840px) {
    font-size: 30px; /* Ajustez la taille de la police pour les écrans 4K */
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;

  @media (min-width: 3840px) {
    font-size: 20px; /* Ajustez la taille de la police pour les écrans 4K */
  }
`;

const Catalog = () => {
  useEffect(() => {
    document.title = 'Catalogue - Gemme le fil'; // Mettez le titre souhaité ici
  }, []);

  const products = [
    {
      image: produit1Image,
      title: 'Product 1',
      price: '$99.99',
      description: 'Description of product 1',
    },
    {
      image: produit2Image,
      title: 'Product 2',
      price: '$99.99',
      description: 'Description of product 2',
    },
    {
      image: produit3Image,
      title: 'Product 3',
      price: '$99.99',
      description: 'Description of product 3',
    },
    {
      image: produit4Image,
      title: 'Product 4',
      price: '$99.99',
      description: 'Description of product 4',
    },
  ];

  const generateCatalogItems = () => {
    return products.map((product, index) => (
      <CatalogItem key={index}>
        <JewelryImage src={product.image} alt={`Product ${index + 1}`} />
        <Title>{product.title}</Title>
        <Price>{product.price}</Price>
        <Description>{product.description}</Description>
      </CatalogItem>
    ));
  };

  return (
    <Container className="custom-container">
      <Title className="title">Réalisations maison</Title>
      <CatalogGrid>{generateCatalogItems()}</CatalogGrid>
    </Container>
  );
};

export default Catalog;
