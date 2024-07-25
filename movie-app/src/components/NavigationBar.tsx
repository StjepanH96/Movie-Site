import Link from 'next/link';
import styled from 'styled-components';

const NavLink = styled.a`
  color: white;
  text-decoration: none; 
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

// Navigation component
export const Navigation = () => {
  return (
    <nav style={{ display: 'flex', gap: '16px' }}>
      <Link href="/" passHref>
        <NavLink>Početna</NavLink>
      </Link>
      <Link href="/novo" passHref>
        <NavLink>Novo</NavLink>
      </Link>
      <Link href="/najgledanije" passHref>
        <NavLink>Najgledanije</NavLink>
      </Link>
      <Link href="/liste" passHref>
        <NavLink>Liste</NavLink>
      </Link>
    </nav>
  );
};