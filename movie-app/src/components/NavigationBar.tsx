import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FavoriteDropdown } from './FavoriteDropdown';
import { SearchBar } from './SearchBar';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  MenuIcon,
  MobileSearchLink,
  NavigationLinks,
  StyledLink,
  StyledNavigation,
} from '@/styled-components/NavigationBarStyles';

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateMobileStatus() {
      setIsMobile(window.innerWidth < 968);
    }

    if (typeof window !== 'undefined') {
      updateMobileStatus();
      window.addEventListener('resize', updateMobileStatus);

      return () => window.removeEventListener('resize', updateMobileStatus);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <StyledNavigation>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavigationLinks show={isOpen}>
        <Link href="/" passHref>
          <StyledLink onClick={toggleMenu}>Home</StyledLink>
        </Link>
        <Link href="/movie/new-movies" passHref>
          <StyledLink onClick={toggleMenu}>New Movies</StyledLink>
        </Link>
        <Link href="/movie/most-watched" passHref>
          <StyledLink onClick={toggleMenu}>Most Watched</StyledLink>
        </Link>
        <Link href="/movie/search-movie" passHref>
          <MobileSearchLink onClick={toggleMenu}>Search</MobileSearchLink>
        </Link>
        <Link href="/movie/favorite-movies" passHref>
          <MobileSearchLink onClick={toggleMenu}>Favorites</MobileSearchLink>
        </Link>
        {!isMobile && <FavoriteDropdown />}
        {!isMobile && <SearchBar />}
      </NavigationLinks>
    </StyledNavigation>
  );
};
