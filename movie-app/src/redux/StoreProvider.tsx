import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { movieStore, AppStore } from './store';
import { initializeMovies } from './reducers/movies/movieSlice';
import { Movie } from '@/types/movies';

interface StoreProviderProps {
  initialMovies: Movie[];
  children: React.ReactNode;
}

export default function StoreProvider({
  initialMovies,
  children,
}: StoreProviderProps) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = movieStore;
  }

  useEffect(() => {
    if (storeRef.current) {
      storeRef.current.dispatch(initializeMovies(initialMovies));
    }
  }, [initialMovies]);

  useEffect(() => {
    initializeMovies(initialMovies);
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
