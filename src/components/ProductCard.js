    // import React from 'react';
    // import '../App.css';
    
    // const ProductCard = ({produit}) => {
    // return (
    //     <div className="product-card ">
    //     <img src={produit.image} alt={produit.title} className="product-image" />
    //     <div className="product-content">
    //         <h3 className="product-title">{produit.title}</h3>
    //         <p className="product-description limited-text">{produit.description}</p>
    //         <p className="product-price">${produit.price}</p>
    //         <button className="product-button" >
    //         Ajouter au panier
    //         </button>
    //     </div>
    //     </div>
    // );
    // };
    
    
    
    // export default ProductCard;




    import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Redirection vers la page de détails du produit avec son ID
    navigate(`/product/${product.id}`);
  };

  return (
    <ProductCardContainer
      onClick={handleCardClick} // Appel de la fonction lors du clic
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }} // Effet hover (agrandissement)
    >
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <Price>${product.price}</Price>
      <button>Add to Cart</button>
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.mode === 'light' ? '#ffffff' : '#1a1a1a'};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }

  h3 {
    margin: 10px 0;
    font-size: 18px;
  }

  button {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-top: 10px;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &:hover {
    transform: translateY(-10px); // Effet de déplacement vers le haut lors du hover
  }
`;

const Price = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  margin: 10px 0;
`;
