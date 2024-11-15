import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import panierIcon from '../images/panier.png';
import userIcon from '../images/user.png';
import loupeIcon from '../images/loupe.png';
import Youssef from '../images/youssef.jpeg';

const Header = ({ products, onSearch, toggleTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = (isSignUp) => {
    setIsModalOpen(true);
    setIsSignUp(isSignUp);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <>
      <HeaderContainer>
        <div>
          <NavLink to="/" activeClassName="active">
          <NavItem> 
            <Icon src={Youssef} alt="Youssef" className='youssef'/> 
          </NavItem>
          </NavLink>
        </div>

        <SearchBarContainer>
          <SearchBar
            placeholder="Search for products, brands, categories..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchIcon src={loupeIcon} alt="Search" />
        </SearchBarContainer>

        <NavOptions>
          <NavItem onClick={() => handleOpenModal(false)}>
            <Icon src={userIcon} alt="Account" />
          </NavItem>
          <NavItem>
            <Icon src={panierIcon} alt="Cart" />
          </NavItem>
        </NavOptions>
        <ThemeToggle onClick={toggleTheme}>🌙</ThemeToggle>
      </HeaderContainer>

      <SubNavbar>
        <NavItem>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </NavItem>
      </SubNavbar>

      {/* Modal for login/signup */}
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            <h2>{isSignUp ? 'Create Account' : 'Login'}</h2>
            <Form>
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              {isSignUp && <Input type="password" placeholder="Confirm Password" required />}
              <Button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</Button>
            </Form>
            <SwitchLink onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
            </SwitchLink>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Header;


// Styled components

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease;
`;



const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
  
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: ${({ theme }) => theme.mode === 'light' ? '2px solid #f37708' : 'none'};
  font-size: 16px;
  transition: border 0.3s ease;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  filter: ${({ theme }) => (theme.text === 'white' ? 'invert(1)' : 'none')};
`;

const NavOptions = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease, border 0.3s ease;
  color: ${({ theme }) => theme.text};
  padding: 5px;
  border-radius: 5px;
  border: 2px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.mode === 'light' ? '#333' : '#f37708'};
    transform: scale(1.1);
    border: ${({ theme }) => theme.mode === 'light' ? '2px solid #333' : '2px solid #f37708'};
  }
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  transition: filter 0.3s ease, transform 0.3s ease;
  
  
  filter: ${({ theme }) => (theme.mode === 'dark' ? 'invert(1)' : 'none')};

  &:hover {
    filter: ${({ theme }) => (theme.mode === 'dark' ? 'invert(0.8)' : 'invert(0.6)')};
    transform: scale(1.1);
  }

  /* Targeting the Youssef icon */
  &.youssef {
    width: 70px; /* Adjust Youssef's icon size */
    height: 70px;
    border-radius: 50%; /* Optional: Make Youssef's icon circular */
    filter: none; /* Remove filter effect if you don't want it */
    transition: none; /* Optional: remove transition for Youssef's icon */
  }
`;


const SubNavbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  background-color: ${({ theme }) => (theme.mode === 'light' ? '#f37708' : '#333333')};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.mode === 'light' ? '#333' : '#f37708'};
  }

  .active {
    color: ${({ theme }) => theme.mode === 'light' ? '#333' : '#f37708'};
    font-weight: bold;
  }
`;

const ThemeToggle = styled.div`
  cursor: pointer;
  font-size: 1.5em;
  color: ${({ theme }) => theme.text};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Modal Styles
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 30px;
  width: 400px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f37708;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e26e07;
  }
`;

const SwitchLink = styled.div`
  margin-top: 15px;
  cursor: pointer;
  color: #f37708;

  &:hover {
    text-decoration: underline;
  }
`;
