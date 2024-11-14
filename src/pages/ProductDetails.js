import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetails = () => {
  const { id } = useParams(); // Récupération de l'ID du produit à partir de l'URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <DetailsContainer>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <Price>${product.price}</Price>
        <button>Add to Cart</button>
      </div>
    </DetailsContainer>
  );
};

export default ProductDetails;

const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;

  img {
    width: 300px;
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const Price = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin: 20px 0;
`;
