import React from 'react';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import ProductList from './ProductList';

const HomePage = () => {
  return (
    <>
      <Banner />
      <CategorySection />
      <ProductList />
    </>
  );
};

export default HomePage;
