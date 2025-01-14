import React, { useState } from 'react';
import styled from "styled-components";

const Filter = ({ categories = [], onFilter }) => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const handleFilter = () => {
        onFilter({ search, category, price, rating });
    };

    const clearFilter = () => {
        setSearch('');
        setCategory('');
        setPrice('');
        setRating('');
        onFilter({ search: '', category: '', price: '', rating: '' });
    };

    return (
        <FilterContainer>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search products"
            />

            <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                aria-label="Filter by category"
            >
                <option value="">All categories</option>
                {categories.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <select
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                aria-label="Filter by price range"
            >
                <option value="">Price Range</option>
                <option value="0-50">$0-$50</option>
                <option value="50-100">$50-$100</option>
                <option value="100-200">$100-$200</option>
            </select>

            <select
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                aria-label="Filter by rating"
            >
                <option value="">Ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <Button onClick={handleFilter}>Apply Filters</Button>
            <Button onClick={clearFilter}>Clear Filters</Button>
        </FilterContainer>
    );
};

export default Filter;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    // border: 1px solid;
    padding: 15px;
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: transparent;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
