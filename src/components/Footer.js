import React from 'react';
import styled from 'styled-components';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
      </FooterSection>
      <FooterSection>
        <h4>Customer Service</h4>
        <ul>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>Returns</li>
        </ul>
      </FooterSection>
      <FooterSection>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com/AyoubShop" target="_blank" rel="noopener noreferrer">
              <Icon src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ayoubshop_" target="_blank" rel="noopener noreferrer">
              <Icon src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+212601020304" target="_blank" rel="noopener noreferrer">
              <Icon src={whatsapp} alt="WhatsApp" />
            </a>
          </li>
        </ul>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: ${({ theme }) => theme.secondary}; /* Couleur de fond en fonction du thème */
  color: ${({ theme }) => theme.text}; /* Couleur du texte en fonction du thème */
`;

const FooterSection = styled.div`
  h4 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    line-height: 1.6;
  }
`;

const Icon = styled.img`
  width: 30px; /* Taille de l'icône */
  height: 30px;
  margin-right: 10px; /* Espacement entre les icônes */
  cursor: pointer;
  
  &:hover {
    opacity: 0.8; /* Effet au survol */
  }
`;
