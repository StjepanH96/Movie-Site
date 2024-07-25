import { styled } from 'styled-components';

const MovieItem = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const MovieOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 8px;
  border-radius: 0 0 8px 8px;
`;

const MovieTitle = styled.p`
  margin: 0;
  font-size: 16px;
`;

const FavoriteStarContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`;

export {
  FavoriteStarContainer,
  MovieTitle,
  MovieOverlay,
  MovieImage,
  MovieItem,
};
