import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const PageContainer = styled.div`
  padding-bottom: 90px; /* Ajoutez un padding en bas pour laisser de la place au footer */
`;

const FooterContainer = styled.footer`
  background-color: black;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 3px solid rgb(15, 15, 15);
  background: linear-gradient(
    135deg,
    #14453a 0%, /* Vert */
    #b19e63 100% /* Or */
  );
`;

const FooterText = styled.p`
  color: white; /* Texte en blanc */
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  & > * {
    margin-left: 10px;
    font-size: 24px;
    color: white; /* Icones en blanc */
    cursor: pointer;
  }

  @media (min-width: 3840px) {
    & > * {
      font-size: 36px; /* Ajustez la taille des icônes pour les écrans 4K */
    }
  }
`;

const Footer = () => {
  return (
    <PageContainer>
      <FooterContainer>
        <FooterText>© 2023 Servant Aurélien. Tous droits réservés.</FooterText>
        <SocialIcons>
          <a
            href="https://www.linkedin.com/in/aur%C3%A9lien-servant-a85218217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Aurel-Rio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </SocialIcons>
      </FooterContainer>
    </PageContainer>
  );
};

export default Footer;
