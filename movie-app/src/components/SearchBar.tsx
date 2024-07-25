// SearchBar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 8px 16px;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  background: transparent;
  color: white;
  width: 200px;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #e2b616;
  }
`;

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implementiraj funkcionalnost pretrage ovdje
    console.log('Tražilica:', query);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Pretražite filmove ili serije"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <FaSearch />
      </Button>
    </SearchContainer>
  );
};