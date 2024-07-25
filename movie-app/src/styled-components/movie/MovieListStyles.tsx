import { styled } from 'styled-components';

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  margin-top: 5%;
  @media (max-width: 968px) {
    margin-top: 20%;
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const NoFavoritesMessage = styled.p`
  color: #fff;
  text-align: center;
`;

export { MovieListContainer, MovieGrid, NoFavoritesMessage };
