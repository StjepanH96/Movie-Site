import { styled } from 'styled-components';

export const StyledButtonFavorite = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: grey;
  z-index: 3;
  transition: color 0.3s;

  &.gold {
    color: gold;
  }
`;
