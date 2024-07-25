import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { movieStore, AppStore } from '../redux/store';
import { initializeMovies, Movie } from '../redux/reducers/movies/movieSlice';

interface StoreProviderProps {
  initialMovies: Movie[];
  children: React.ReactNode;
}

export default function StoreProvider({ initialMovies, children }: StoreProviderProps) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = movieStore;
  }

  useEffect(() => {
    if (storeRef.current) {
      storeRef.current.dispatch(initializeMovies(initialMovies));
    }
  }, [initialMovies]); 

  return <Provider store={storeRef.current}>{children}</Provider>;
}