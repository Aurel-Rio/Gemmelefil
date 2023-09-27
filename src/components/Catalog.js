import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importez seulement les images que vous utilisez ici
import bouclesAigueMarine from '../assets/Bijoux/Boucles d\'oreilles aigue marine 18 €.jpg';
import bouclesApatite from '../assets/Bijoux/Boucles d\'oreilles apatite 12 €.JPG';
import bouclesSablier from '../assets/Bijoux/Boucles d\'oreilles sablier 18 €.jpg';
import bouclesTurquoise from '../assets/Bijoux/Boucles d\'oreilles turquoise 24 €.jpg';
import collierAngelique from '../assets/Bijoux/Collier angélique 42 €.JPG';
import collierApatie from '../assets/Bijoux/Collier apatie 39 €.png';
import collierDonutMacrame from '../assets/Bijoux/Collier donut et macramé 41 €.jpg';
import collierEcussonJaspePaysage from '../assets/Bijoux/Collier écusson et jaspe paysage 34 €.JPG';
import collierLapisLazuli from '../assets/Bijoux/Collier Lapis Lazuli 49 €.JPG';
import collierMalachitePetales from '../assets/Bijoux/Collier malachite et pétales 39 €.png';
import collierMandalaEstampe from '../assets/Bijoux/Collier Mandala et estampe 31 €.JPG';
import collierSodalite from '../assets/Bijoux/Collier sodalite 45 €.jpg';
import manchetteApatie from '../assets/Bijoux/Manchette apatie 37 €.JPG';
import bouclesAgateBleue from '../assets/Bijoux/Boucles d\'oreilles agate bleue 24 €.jpg'; // 


const Container = styled.div`
  text-align: center;
  width: 95vw;
  transform: none;
  position: absolute;
  top: 125px;
  left: 50%;
  transform: translateX(-50%);
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

const SearchInput = styled.input`
  width: fit-content;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background: linear-gradient(
    135deg,
    #14453A 0%, /* Vert */
    #B19E63 100% /* Or */
  );
  color: white; /* Couleur du texte */
  padding-left: 10px; /* Ajoutez un espace à gauche pour que le texte ne soit pas coupé */
  padding-right: 10px; /* Ajoutez un espace à droite pour que le texte ne soit pas coupé */
  outline: none; /* Supprime le contour sur le focus */
  transition: border-color 0.3s, background 0.3s, color 0.3s;

  &:focus {
    border-color: #B19E63; /* Couleur de la bordure au focus */
    background: #14453A; /* Couleur de fond au focus */
    color: white; /* Couleur du texte au focus */
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
  cursor: pointer; /* Ajoutez un curseur pointer pour indiquer que les images sont cliquables */

  @media (min-width: 3840px) {
    padding: 40px; /* Ajustez le rembourrage pour les écrans 4K */
  }
`;

const JewelryImage = styled.img`
  max-width: 100%;
  height: auto;
  z-index: 1; /* Assurez-vous que l'image est en arrière-plan */
  
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

// Style pour la modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 90%;
  max-height: 80%; /* Ajustez la hauteur maximale */
  top: 50%; /* Centrez la modal verticalement */
  left: 50%; /* Centrez la modal horizontalement */
  transform: translate(-50%, -50%); /* Centrez la modal */
  overflow: auto;
  position: fixed;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;



const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 32px;
  background-color: #ffffff; /* Couleur de fond blanche */
  color: #000000; /* Couleur du texte noire */
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 4px 10px;
  z-index: 3; /* Assurez-vous que la croix est au-dessus du carrousel */
`;


// Ajoutez ces styles pour les flèches du carrousel
const CarouselArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #000;
  border-radius: 50%;
`;

const CustomLeftArrow = styled(CarouselArrow)`
  left: 20px;
`;

const CustomRightArrow = styled(CarouselArrow)`
  right: 20px;
`;


// Composant de la modal
// Composant de la modal
const ProductModal = ({ images, title, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <CustomLeftArrow onClick={onClickHandler} title={label}>
                &#9664;
              </CustomLeftArrow>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <CustomRightArrow onClick={onClickHandler} title={label}>
                &#9654;
              </CustomRightArrow>
            )
          }
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={title} />
            </div>
          ))}
        </Carousel>
      </ModalContent>
    </ModalOverlay>
  );
};

const Catalog = () => {
  useEffect(() => {
    document.title = 'Catalogue - Gemme le fil'; // Mettez le titre souhaité ici
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
  
    {
      image: bouclesAgateBleue,
      title: 'Boucles d\'oreilles Agate Bleue',
      price: '24 €',
      description: 'Des belles boucles d\'oreilles en agate bleue pour illuminer votre journée.',
    },
    {
      image: bouclesAigueMarine,
      title: 'Boucles d\'oreilles Aigue Marine',
      price: '18 €',
      description: 'Des boucles d\'oreilles élégantes avec des pierres d\'aigue marine.',
    },
    {
      image: bouclesApatite,
      title: 'Boucles d\'oreilles Apatite',
      price: '12 €',
      description: 'De magnifiques boucles d\'oreilles en apatite à un prix incroyable.',
    },
    {
      image: bouclesSablier,
      title: 'Boucles d\'oreilles Sablier',
      price: '18 €',
      description: 'Des boucles d\'oreilles uniques avec un design de sablier.',
    },
    {
      image: bouclesTurquoise,
      title: 'Boucles d\'oreilles Turquoise',
      price: '24 €',
      description: 'Des boucles d\'oreilles en turquoise pour un look bohème.',
    },
    {
      image: collierAngelique,
      title: 'Collier Angélique',
      price: '42 €',
      description: 'Un collier angélique qui apporte de la grâce à votre tenue.',
    },
    {
      image: collierApatie,
      title: 'Collier Apatie',
      price: '39 €',
      description: 'Un collier élégant avec des pierres d\'apatite.',
    },
    {
      image: collierDonutMacrame,
      title: 'Collier Donut et Macramé',
      price: '41 €',
      description: 'Un collier unique avec un donut en pierre et une touche de macramé.',
    },
    {
      image: collierEcussonJaspePaysage,
      title: 'Collier Écusson et Jaspe Paysage',
      price: '34 €',
      description: 'Un collier avec un écusson en jaspe paysage pour un look terreux.',
    },
    {
      image: collierLapisLazuli,
      title: 'Collier Lapis Lazuli',
      price: '49 €',
      description: 'Un collier en lapis lazuli pour apporter une touche de bleu à votre style.',
    },
    {
      image: collierMalachitePetales,
      title: 'Collier Malachite et Pétales',
      price: '39 €',
      description: 'Un collier avec des pierres de malachite en forme de pétales.',
    },
    {
      image: collierMandalaEstampe,
      title: 'Collier Mandala et Estampe',
      price: '31 €',
      description: 'Un collier avec un mandala et une estampe pour une touche spirituelle.',
    },
    {
      image: collierSodalite,
      title: 'Collier Sodalite',
      price: '45 €',
      description: 'Un collier en sodalite pour une énergie apaisante.',
    },
    {
      image: manchetteApatie,
      title: 'Manchette Apatie',
      price: '37 €',
      description: 'Une manchette en apatite pour un style audacieux.',
    },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(() => {
    document.title = 'Catalogue - Gemme le fil'; // Mettez le titre souhaité ici
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchValue, products]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const generateCatalogItems = () => {
    return filteredProducts.map((product, index) => (
      <CatalogItem key={index} onClick={() => openModal(product)}>
        <JewelryImage src={product.image} alt={product.title} loading="lazy"/>
        <Title>{product.title}</Title>
        <Price>{product.price}</Price>
        <Description>{product.description}</Description>
      </CatalogItem>
    ));
  };

  return (
    <Container className="custom-container">
      <Title className="title">Réalisations maison</Title>
      <SearchInput
        type="text"
        placeholder="Rechercher un produit..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      <CatalogGrid>{generateCatalogItems()}</CatalogGrid>

      {isModalOpen && selectedProduct && (
        <ProductModal
          images={[selectedProduct.image]} // Utilisez un tableau pour les images
          title={selectedProduct.title}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default Catalog;
