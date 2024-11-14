import React from 'react';
import styled from 'styled-components';

const CategorySection = () => {
  const categories = ['Electronics', 'Fashion', 'Home', 'Toys', 'Books'];

  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <Category key={index}>{category}</Category>
      ))}
    </CategoryContainer>
  );
};

export default CategorySection;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const Category = styled.div`
  padding: 10px 20px;
  background-color: #f37708;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8c32;
  }
`;
