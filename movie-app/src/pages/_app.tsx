import type { AppProps } from 'next/app';
import { FavoriteContextProvider } from './../context/FavoritesContext';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import StoreProvider from '../components/StoreProvider'; 

function MyApp({ Component, pageProps }: AppProps) {
  const initialMovies = pageProps.movies || [];

  return (
    <StoreProvider initialMovies={initialMovies}>
      <FavoriteContextProvider movies={initialMovies}> 
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </FavoriteContextProvider>
    </StoreProvider>
  );
}

export default MyApp;