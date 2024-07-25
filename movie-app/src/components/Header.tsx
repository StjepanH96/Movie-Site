
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SearchBar } from './SearchBar';

const NavLink = styled.p`
  color: white;
  text-decoration: none; 
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderContainer = styled.header`
  background-color: #141414;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #e2b616;
  font-size: 24px;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MovieWatch</Logo>
      <Container>
        <nav style={{ display: 'flex', gap: '16px' }}>
          <Link href="/" passHref><NavLink>Početna</NavLink></Link>
          <Link href="/novo" passHref><NavLink>Novo</NavLink></Link>
          <Link href="/most-watched" passHref><NavLink>Najgledanije</NavLink></Link>
          <Link href="/liste" passHref><NavLink>Liste</NavLink></Link>
          <SearchBar />
        </nav>
      
      </Container>
    </HeaderContainer>
  );
};