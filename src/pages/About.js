import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <Title>About Ayoub Shop</Title>
      <Description>
        Welcome to Ayoub Shop, your number one destination for high-quality products at affordable prices. 
        We are dedicated to providing you with the best online shopping experience, offering a wide range of 
        categories from electronics to fashion and beyond.
      </Description>
      <Description>
        At Ayoub Shop, our mission is simple: to make shopping easy and enjoyable. We carefully select products 
        that meet our high standards for quality, and we work with trusted suppliers to ensure that every 
        product you buy is the best it can be.
      </Description>
      <Description>
        Whether you are looking for the latest tech gadgets, stylish apparel, or home essentials, Ayoub Shop is 
        here to help you find what you need. We believe in excellent customer service and strive to make your 
        experience with us as smooth as possible.
      </Description>
      <Description>
        Thank you for choosing Ayoub Shop. We look forward to serving you!
      </Description>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  padding: 40px;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  line-height: 1.6;
`;
