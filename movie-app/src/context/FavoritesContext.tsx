import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Movie } from '@/types/movies';
import { useMovieData } from '@/lib/useMovieData';

interface FavoritesContextType {
  favorites: number[];
  addFavoriteById: (movieId: number) => void;
  removeFavoriteById: (movieId: number) => void;
  getFavoriteMovies: () => Movie[];
  isLoading: boolean;
  error: string | null;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoriteContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { movies } = useMovieData();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavoriteById = useCallback((movieId: number) => {
    setLoading(true);
    try {
      setFavorites((prevFavorites) => {
        const updatedFavorites = [...prevFavorites, movieId];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    } catch (e) {
      setError('Failed to add favorite');
    } finally {
      setLoading(false);
    }
  }, []);

  const removeFavoriteById = useCallback((movieId: number) => {
    setLoading(true);
    try {
      setFavorites((prevFavorites) => {
        const updatedFavorites = prevFavorites.filter((id) => id !== movieId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    } catch (e) {
      setError('Failed to remove favorite');
    } finally {
      setLoading(false);
    }
  }, []);

  const getFavoriteMovies = useCallback(() => {
    return movies.filter((movie) => favorites.includes(movie.id));
  }, [movies, favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavoriteById,
        removeFavoriteById,
        getFavoriteMovies,
        isLoading,
        error,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
