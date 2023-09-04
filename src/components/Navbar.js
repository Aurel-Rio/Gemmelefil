import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/gemme_le_fil_logo.png';
import ContactModal from "./ContactModal";

const Nav = styled.nav`
  background: linear-gradient(135deg, #14453A 0%, #B19E63 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 3px solid #14453A;
  height: 55px;
  z-index: 9999;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
  filter: brightness(1.5);
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    z-index: 2;
  }
`;

const BurgerIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #B19E63;
  margin: 4px 0;
  transition: transform 0.3s ease-in-out;

  &:first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    transform-origin: top left;
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
  }

  &:last-child {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    transform-origin: top left;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  z-index: ${({ open }) => (open ? '1' : '0')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ open }) => (open ? 'rgba(0, 0, 0, 0.9)' : 'transparent')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 3840px) {
    font-size: 24px; /* Ajustez la taille de la police pour les écrans 4K */
  }
`;

const Li = styled.li`
  font-family: 'brush script mt'; 
  margin-left: 0px;
  position: relative;
  transition: background-color 0.3s ease-in-out;
  margin-right:15px;
  border: 1px solid #B19E63;
  padding:5px;
  border-radius: 5px;
  background: linear-gradient(18deg, rgba(20,69,58,1) 0%, rgba(177,158,99,1) 64%, rgba(177,158,99,1) 100%);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    background: linear-gradient(135deg, #14453A 0%, #B19E63 100%); /* Gradient inversé */
    border-color: green;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(135deg, #B19E63 0%, #14453A 100%);
    transform: scaleX(${({ animate }) => (animate ? '1' : '0')});
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
    background: linear-gradient(135deg, #B19E63 0%, #14453A 100%);
  }

  @media (max-width: 768px) {
    font-size: 1.8em;
    margin: 10px;
    transform: scale(1.2);
  }

  @media (min-width: 3840px) {
    font-size: 36px; /* Ajustez la taille de la police pour les écrans 4K */
  }
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  const handleLogoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Nav>
      <Logo src={logo} alt="Logo" onClick={handleLogoClick} />
      <BurgerMenu onClick={handleBurgerClick}>
        <BurgerIcon open={open} />
        <BurgerIcon open={open} />
        <BurgerIcon open={open} />
      </BurgerMenu>
      <Ul open={open}>
        <Li animate={open.toString()} onClick={handleBurgerClick}>
          <StyledLink to="/">Accueil</StyledLink>
        </Li>
        <Li animate={open.toString()} onClick={handleBurgerClick}>
          <StyledLink to="/catalog">Catalogue</StyledLink>
        </Li>
        <Li animate={open.toString()} onClick={handleBurgerClick}>
          <StyledLink to="/contact">Contact</StyledLink>
        </Li>
      </Ul>
      {isModalOpen && <ContactModal onClose={handleCloseModal} />}
    </Nav>
  );
};

export default Navbar;
