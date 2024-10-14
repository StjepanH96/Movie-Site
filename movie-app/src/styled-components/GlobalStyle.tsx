import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #141414;
    color: #ffffff;
    line-height: 1.6;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 10%;

  @media (max-width: 768px) {
    margin-top: 30%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding: 20px 0;
  align-items: center;
  scrollbar-width: none; 
  -ms-overflow-style: none; 


  &::-webkit-scrollbar {
    display: none;
  }

  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50px;
    pointer-events: none; 
    background: linear-gradient(to left, rgba(0, 0, 0, 0.8), transparent); 
  }
`;
const MovieItem = styled.div`
  position: relative;
  margin-right: 20px;
  width: 200px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    z-index: 2;
    position: relative;
  }
`;

const MovieItemTop = styled(MovieItem)`
  width: 300px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .rank {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.1);
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export {
  MovieItem,
  MovieItemTop,
  MovieList,
  Container,
  SectionTitle,
  GlobalStyle,
};
