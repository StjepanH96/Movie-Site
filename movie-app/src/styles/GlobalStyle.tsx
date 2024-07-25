import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  header, footer {
    background-color: #141414;
    color: #fff;
  }

  header {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer {
    padding: 20px 40px;
    text-align: center;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 10px 0;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e50914;
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }

  .nav-links a {
    font-size: 1rem;
    color: #ffffff;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 20px 0;
  }

  .movie-list {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding: 20px 0;
    align-items: center;
  }

  .movie-item {
    position: relative;
    margin-right: 20px;
    width: 200px;
    flex-shrink: 0;
  }

  .movie-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .movie-item-top {
    position: relative;
    margin-right: 20px;
    width: 300px;
    flex-shrink: 0;
  }

  .movie-item-top img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .movie-item .rank {
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

  .movie-item img {
    z-index: 2;
    position: relative;
  }

  .favorite-star.gold {
    color: gold;
  }
`;