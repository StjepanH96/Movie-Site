import { styled } from "styled-components";

const StyledNavigation = styled.nav`
  flex-direction: column;

`;


const MenuIcon = styled.div`
  color: white;
  font-size: 30px;
  display: block;
  cursor: pointer;

  @media (min-width: 958px) {
    display: none;

  }


  @media (max-width: 958px) {
  margin-right:40px;
  margin-top:20px;

  }

`;

interface NavigationLinksProps {
  $show: boolean;
}

const NavigationLinks = styled.div<NavigationLinksProps>`
  display: ${props => props.$show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  width: 150%;
  padding: 10px 0;
  position: absolute;
  background-color: #141414;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 100;

  @media (min-width: 958px) {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    background-color: transparent;
  }
`;

const StyledLink = styled.p`
  color: white;
  text-decoration: none;
  font-size: 16px;
  margin: 10px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const MobileSearchLink = styled(StyledLink)`
  display: none;

  @media (max-width: 958px) {
    display: block;
  }
`;

export {MobileSearchLink, StyledLink, NavigationLinks,MenuIcon, StyledNavigation }