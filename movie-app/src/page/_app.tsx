import { AppProps } from 'next/app';
import StoreProvider from '../redux/StoreProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const initialMovies = pageProps.movies || [];

  return (
    <StoreProvider initialMovies={initialMovies}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;