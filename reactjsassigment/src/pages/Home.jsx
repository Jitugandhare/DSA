import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/api';
import Filter from '../components/Filter';
import ProductCards from '../components/ProductCards';
import styled from 'styled-components';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);

     
      const uniqueCategories = [...new Set(data.map((product) => product.category))];
      setCategories(uniqueCategories);
    };

    loadData();
  }, []);

  const handleFilter = ({ search, category, price, rating }) => {
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (price) {
      const [min, max] = price.split('-').map(Number);
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    }
    if (rating) {
      filtered = filtered.filter((p) => p.rating.rate >= Number(rating));
    }

    setFilteredProducts(filtered);
  };

  return (
    <PageContainer>
      <h1>Products</h1>

      <MainContent>
        <Filter categories={categories} onFilter={handleFilter} />

        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </ProductGrid>
      </MainContent>
    </PageContainer>
  );
};

export default Home;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 15px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;
